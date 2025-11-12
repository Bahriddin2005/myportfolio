// Chat Service - Handles both Supabase and localStorage
import { supabase, isSupabaseEnabled } from './supabase'

// Generate unique session ID
export const generateSessionId = () => {
  const existing = localStorage.getItem('chatSessionId')
  if (existing) return existing
  
  const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  localStorage.setItem('chatSessionId', newId)
  return newId
}

// Send message (Supabase or localStorage)
export const sendMessage = async (sessionId, sender, text) => {
  if (isSupabaseEnabled()) {
    // Use Supabase API
    try {
      const response = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, sender, text })
      })
      
      if (!response.ok) throw new Error('Failed to send message')
      
      const data = await response.json()
      return { success: true, message: data.message }
    } catch (error) {
      console.error('Supabase send error:', error)
      // Fallback to localStorage
      return sendMessageLocalStorage(sessionId, sender, text)
    }
  } else {
    // Use localStorage
    return sendMessageLocalStorage(sessionId, sender, text)
  }
}

// Get messages (Supabase or localStorage)
export const getMessages = async (sessionId) => {
  if (isSupabaseEnabled()) {
    // Use Supabase API
    try {
      const response = await fetch(`/api/chat/messages?sessionId=${sessionId}`)
      
      if (!response.ok) throw new Error('Failed to get messages')
      
      const data = await response.json()
      return data.messages || []
    } catch (error) {
      console.error('Supabase get error:', error)
      // Fallback to localStorage
      return getMessagesLocalStorage(sessionId)
    }
  } else {
    // Use localStorage
    return getMessagesLocalStorage(sessionId)
  }
}

// Get all sessions (Admin - Supabase or localStorage)
export const getAllSessions = async () => {
  if (isSupabaseEnabled()) {
    // Use Supabase API
    try {
      const response = await fetch('/api/chat/sessions')
      
      if (!response.ok) throw new Error('Failed to get sessions')
      
      const data = await response.json()
      return data.sessions || []
    } catch (error) {
      console.error('Supabase sessions error:', error)
      // Fallback to localStorage
      return getSessionsLocalStorage()
    }
  } else {
    // Use localStorage
    return getSessionsLocalStorage()
  }
}

// === LocalStorage Fallback Functions ===

const sendMessageLocalStorage = (sessionId, sender, text) => {
  const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
  const sessionIndex = chatHistory.findIndex(c => c.id === sessionId)
  
  const newMessage = {
    id: Date.now(),
    sender,
    text,
    time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
    timestamp: new Date().toISOString()
  }
  
  if (sessionIndex >= 0) {
    chatHistory[sessionIndex].messages.push(newMessage)
    chatHistory[sessionIndex].lastMessage = text
    chatHistory[sessionIndex].timestamp = new Date().toISOString()
    if (sender === 'user') chatHistory[sessionIndex].unread = true
  } else {
    chatHistory.push({
      id: sessionId,
      messages: [newMessage],
      lastMessage: text,
      timestamp: new Date().toISOString(),
      unread: sender === 'user'
    })
  }
  
  localStorage.setItem('chatMessages', JSON.stringify(chatHistory))
  return { success: true, message: newMessage }
}

const getMessagesLocalStorage = (sessionId) => {
  const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
  const session = chatHistory.find(c => c.id === sessionId)
  return session ? session.messages : []
}

const getSessionsLocalStorage = () => {
  const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
  return chatHistory
}

// Update message (edit)
export const updateMessage = async (sessionId, messageId, newText) => {
  if (isSupabaseEnabled()) {
    try {
      const response = await fetch('/api/chat/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, messageId, text: newText })
      })
      
      if (!response.ok) throw new Error('Failed to update message')
      return { success: true }
    } catch (error) {
      console.error('Update error:', error)
      return updateMessageLocalStorage(sessionId, messageId, newText)
    }
  } else {
    return updateMessageLocalStorage(sessionId, messageId, newText)
  }
}

const updateMessageLocalStorage = (sessionId, messageId, newText) => {
  const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
  const sessionIndex = chatHistory.findIndex(c => c.id === sessionId)
  
  if (sessionIndex >= 0) {
    const msgIndex = chatHistory[sessionIndex].messages.findIndex(m => m.id === messageId)
    if (msgIndex >= 0) {
      chatHistory[sessionIndex].messages[msgIndex].text = newText
      chatHistory[sessionIndex].messages[msgIndex].edited = true
      chatHistory[sessionIndex].messages[msgIndex].editedAt = new Date().toISOString()
      localStorage.setItem('chatMessages', JSON.stringify(chatHistory))
    }
  }
  
  return { success: true }
}

// Delete message
export const deleteMessage = async (sessionId, messageId) => {
  if (isSupabaseEnabled()) {
    try {
      const response = await fetch('/api/chat/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, messageId })
      })
      
      if (!response.ok) throw new Error('Failed to delete message')
      return { success: true }
    } catch (error) {
      console.error('Delete error:', error)
      return deleteMessageLocalStorage(sessionId, messageId)
    }
  } else {
    return deleteMessageLocalStorage(sessionId, messageId)
  }
}

const deleteMessageLocalStorage = (sessionId, messageId) => {
  const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
  const sessionIndex = chatHistory.findIndex(c => c.id === sessionId)
  
  if (sessionIndex >= 0) {
    chatHistory[sessionIndex].messages = chatHistory[sessionIndex].messages.filter(
      m => m.id !== messageId
    )
    localStorage.setItem('chatMessages', JSON.stringify(chatHistory))
  }
  
  return { success: true }
}

// Check storage type
export const getStorageType = () => {
  return isSupabaseEnabled() ? 'database' : 'localStorage'
}

// Display storage status
export const getStorageStatus = () => {
  if (isSupabaseEnabled()) {
    return {
      type: 'database',
      message: '✅ Database (Supabase) - Xabarlar har qayerda ko\'rinadi',
      icon: '🌐'
    }
  } else {
    return {
      type: 'localStorage',
      message: '⚠️ LocalStorage - Faqat shu browser\'da. Database kerak!',
      icon: '💾'
    }
  }
}

