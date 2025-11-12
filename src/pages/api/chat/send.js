// API Route: Send Chat Message
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId, sender, text } = req.body

    // Validation
    if (!sessionId || !sender || !text) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!['user', 'admin', 'bot'].includes(sender)) {
      return res.status(400).json({ error: 'Invalid sender type' })
    }

    // Check if Supabase is enabled
    if (!supabase) {
      return res.status(503).json({ error: 'Database not configured' })
    }

    // 1. Ensure session exists
    const { data: existingSession } = await supabase
      .from('chat_sessions')
      .select('id')
      .eq('id', sessionId)
      .single()

    if (!existingSession) {
      // Create session if it doesn't exist
      const { error: sessionError } = await supabase
        .from('chat_sessions')
        .insert([{
          id: sessionId,
          unread: sender === 'user',
          user_agent: req.headers['user-agent'] || '',
          ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''
        }])

      if (sessionError) {
        console.error('Session creation error:', sessionError)
        return res.status(500).json({ error: 'Failed to create session' })
      }
    }

    // 2. Insert message
    const { data: message, error: messageError } = await supabase
      .from('chat_messages')
      .insert([{
        session_id: sessionId,
        sender,
        text
      }])
      .select()
      .single()

    if (messageError) {
      console.error('Message insert error:', messageError)
      return res.status(500).json({ error: 'Failed to send message' })
    }

    // 3. Update session unread status
    if (sender === 'user') {
      await supabase
        .from('chat_sessions')
        .update({ unread: true })
        .eq('id', sessionId)
    } else if (sender === 'admin') {
      await supabase
        .from('chat_sessions')
        .update({ unread: false })
        .eq('id', sessionId)
    }

    return res.status(200).json({ success: true, message })

  } catch (error) {
    console.error('Send message error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

