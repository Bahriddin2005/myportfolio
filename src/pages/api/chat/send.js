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
      // Return success with mock message - chatService will use localStorage
      return res.status(200).json({ 
        success: false, 
        useLocalStorage: true,
        message: 'Database not configured, use localStorage'
      })
    }

    // 1. Ensure session exists
    const { data: existingSession, error: sessionCheckError } = await supabase
      .from('chat_sessions')
      .select('id')
      .eq('id', sessionId)
      .single()

    if (sessionCheckError && sessionCheckError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine (we'll create it)
      // Any other error means table doesn't exist or connection failed
      return res.status(200).json({ 
        success: false, 
        useLocalStorage: true,
        message: 'Database error, use localStorage'
      })
    }

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
        return res.status(200).json({ 
          success: false, 
          useLocalStorage: true,
          message: 'Failed to create session, use localStorage'
        })
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
      return res.status(200).json({ 
        success: false, 
        useLocalStorage: true,
        message: 'Failed to send message, use localStorage'
      })
    }

    // 3. Update session with last message info
    await supabase
      .from('chat_sessions')
      .update({ 
        last_message: text,
        last_message_time: new Date().toISOString(),
        unread: sender === 'user' ? true : false 
      })
      .eq('id', sessionId)

    // Format message for return
    const formattedMessage = {
      id: message.id,
      sender: message.sender,
      text: message.text,
      time: new Date(message.created_at).toLocaleTimeString('uz-UZ', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      timestamp: message.created_at,
      edited: false
    }

    return res.status(200).json({ success: true, message: formattedMessage })

  } catch (error) {
    console.error('Send message error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

