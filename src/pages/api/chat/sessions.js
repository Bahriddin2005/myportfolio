// API Route: Get All Chat Sessions (Admin)
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Check if Supabase is enabled
    if (!supabase) {
      return res.status(200).json({ success: true, sessions: [] })
    }

    // Get all sessions with message counts
    const { data: sessions, error } = await supabase
      .from('chat_sessions')
      .select(`
        id,
        created_at,
        last_message,
        last_message_time,
        unread,
        user_agent,
        chat_messages (count)
      `)
      .order('last_message_time', { ascending: false })

    if (error) {
      // Return empty array instead of 500 error for graceful degradation
      return res.status(200).json({ success: true, sessions: [] })
    }

    // Transform to match expected format
    const formattedSessions = await Promise.all(
      sessions.map(async (session) => {
        // Get all messages for this session
        const { data: messages } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('session_id', session.id)
          .order('created_at', { ascending: true })

        const formattedMessages = messages ? messages.map((msg) => ({
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
        })) : []

        return {
          id: session.id,
          messages: formattedMessages,
          lastMessage: session.last_message || '',
          timestamp: session.last_message_time || session.created_at,
          unread: session.unread || false,
          userAgent: session.user_agent
        }
      })
    )

    return res.status(200).json({ 
      success: true, 
      sessions: formattedSessions 
    })

  } catch (error) {
    console.error('Get sessions error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

