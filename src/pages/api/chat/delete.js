// API Route: Delete Chat Message
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId, messageId } = req.body

    if (!sessionId || !messageId) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!supabase) {
      return res.status(503).json({ error: 'Database not configured' })
    }

    // Delete message
    const { error } = await supabase
      .from('chat_messages')
      .delete()
      .eq('id', messageId)
      .eq('session_id', sessionId)

    if (error) {
      console.error('Delete message error:', error)
      return res.status(500).json({ error: 'Failed to delete message' })
    }

    return res.status(200).json({ success: true })

  } catch (error) {
    console.error('Delete error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

