// API Route: Update (Edit) Chat Message
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId, messageId, text } = req.body

    if (!sessionId || !messageId || !text) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!supabase) {
      return res.status(503).json({ error: 'Database not configured' })
    }

    // Update message
    const { error } = await supabase
      .from('chat_messages')
      .update({ 
        text,
        edited: true,
        edited_at: new Date().toISOString()
      })
      .eq('id', messageId)
      .eq('session_id', sessionId)

    if (error) {
      console.error('Update message error:', error)
      return res.status(500).json({ error: 'Failed to update message' })
    }

    return res.status(200).json({ success: true })

  } catch (error) {
    console.error('Update error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

