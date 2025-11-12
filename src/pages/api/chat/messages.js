// API Route: Get Chat Messages
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId } = req.query

    // Validation
    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID required' })
    }

    // Check if Supabase is enabled
    if (!supabase) {
      return res.status(200).json({ success: true, messages: [] })
    }

    // Get messages for this session
    const { data: messages, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })

    if (error) {
      // Return empty array instead of 500 error for graceful degradation
      return res.status(200).json({ success: true, messages: [] })
    }

    // Transform to match expected format
    const formattedMessages = messages.map((msg, index) => ({
      id: msg.id,
      sender: msg.sender,
      text: msg.text,
      time: new Date(msg.created_at).toLocaleTimeString('uz-UZ', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      timestamp: msg.created_at,
      edited: msg.edited || false,
      editedAt: msg.edited_at
    }))

    return res.status(200).json({ 
      success: true, 
      messages: formattedMessages 
    })

  } catch (error) {
    console.error('Get messages error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

