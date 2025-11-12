import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as chatService from '../lib/chatService'

export default function Administration() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('messages')
  const [chatMessages, setChatMessages] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [adminReply, setAdminReply] = useState('')
  const [userTypingStatus, setUserTypingStatus] = useState({})
  const [editingMessageId, setEditingMessageId] = useState(null)
  const [editedText, setEditedText] = useState('')
  
  // Portfolio Data State
  const [profileData, setProfileData] = useState({
    name: 'Bahriddin',
    role: 'Full-Stack Developer',
    email: 'hello@bahriddin.dev',
    telegram: '@baxadevuz',
    location: 'Buxoro, Uzbekistan',
    github: 'https://github.com/baxadevuz',
    linkedin: 'https://linkedin.com/in/bahriddin',
    bio: 'Results-driven Full-Stack Developer with 3+ years of experience...',
  })

  const [stats, setStats] = useState({
    experience: '3+',
    projects: '15+',
    users: '10K+',
    revenue: '$50K+'
  })

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Buxoro Bilimdonlar',
      slug: 'buxoro-bilimdonlar',
      description: 'Online education platform with video streaming, payment system & analytics.',
      icon: '🎓',
      color: 'blue',
      stats: { users: '10K+', revenue: '$50K+' },
      tech: ['Django', 'React', 'PostgreSQL'],
      year: '2025'
    },
    {
      id: 2,
      title: 'CodeLab',
      slug: 'codelab',
      description: 'Interactive bootcamp platform: coding, collaboration & testing.',
      icon: '💻',
      color: 'purple',
      stats: { students: '500+', completion: '95%' },
      tech: ['Next.js', 'TypeScript', 'MongoDB'],
      year: '2024'
    }
  ])

  // Check authentication
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin')
    setIsAuthenticated(adminStatus === 'true')
    
    // Load saved data
    const savedProfile = localStorage.getItem('portfolioProfile')
    if (savedProfile) setProfileData(JSON.parse(savedProfile))
    
    const savedStats = localStorage.getItem('portfolioStats')
    if (savedStats) setStats(JSON.parse(savedStats))
    
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) setProjects(JSON.parse(savedProjects))
    
    // Load chat messages from database
    const loadChatMessages = async () => {
      const sessions = await chatService.getAllSessions()
      setChatMessages(sessions)
      
      // Update selected chat if viewing one
      if (selectedChat) {
        const updated = sessions.find(c => c.id === selectedChat.id)
        if (updated) {
          setSelectedChat(updated)
        }
      }
    }
    loadChatMessages()
    
    // Refresh chat messages every 2 seconds
    const interval = setInterval(() => {
      loadChatMessages()
      
      // Check typing status for all chats
      const typingStatus = {}
      const chats = JSON.parse(localStorage.getItem('chatMessages') || '[]')
      chats.forEach(chat => {
        const typingTimestamp = localStorage.getItem('userTyping_' + chat.id)
        if (typingTimestamp) {
          const timeSinceTyping = Date.now() - parseInt(typingTimestamp)
          typingStatus[chat.id] = timeSinceTyping < 5000
        }
      })
      setUserTypingStatus(typingStatus)
    }, 1000) // Check every 1 second for faster response
    return () => clearInterval(interval)
  }, [selectedChat])

  const handleLogin = (e) => {
    e.preventDefault()
    const ADMIN_PASSWORD = 'bahriddin0121'
    
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true')
      setIsAuthenticated(true)
      setPassword('')
    } else {
      setPassword('')
      // Show error briefly
      setTimeout(() => {
        const errorDiv = document.querySelector('.password-error')
        if (errorDiv) errorDiv.remove()
      }, 3000)
    }
  }

  const handleLogout = () => {
    if (confirm('Logout from admin panel?')) {
      localStorage.removeItem('isAdmin')
      setIsAuthenticated(false)
      router.push('/')
    }
  }

  const saveProfileData = () => {
    localStorage.setItem('portfolioProfile', JSON.stringify(profileData))
    // Show toast notification instead of alert
    showToast('Profile data saved!')
  }

  const saveStats = () => {
    localStorage.setItem('portfolioStats', JSON.stringify(stats))
    showToast('Statistics saved!')
  }

  const saveProjects = () => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects))
    showToast('Projects saved!')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        localStorage.setItem('profileImage', reader.result)
        showToast('Image uploaded!')
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    localStorage.removeItem('profileImage')
    showToast('Image removed!')
  }

  const showToast = (message) => {
    // Simple toast - can be improved with a toast library
    const toast = document.createElement('div')
    toast.className = 'fixed top-24 right-6 z-50 px-6 py-4 bg-green-600 text-white rounded-xl font-bold shadow-2xl animate-slide-up'
    toast.innerHTML = `✅ ${message}`
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 2000)
  }

  const sendAdminReply = async (sessionId) => {
    if (!adminReply.trim()) return

    const replyText = adminReply
    setAdminReply('')
    
    // Clear typing indicator
    localStorage.removeItem('adminTyping_' + sessionId)
    
    // Send to database
    const result = await chatService.sendMessage(sessionId, 'admin', replyText)
    
    if (result.success) {
      // Reload messages
      const sessions = await chatService.getAllSessions()
      setChatMessages(sessions)
      
      const updated = sessions.find(c => c.id === sessionId)
      if (updated) {
        setSelectedChat(updated)
      }

      // Auto-scroll to bottom
      setTimeout(() => {
        const messagesDiv = document.getElementById('admin-chat-messages')
        if (messagesDiv) {
          messagesDiv.scrollTop = messagesDiv.scrollHeight
        }
      }, 100)

      showToast('Reply sent successfully!')
    }
  }

  const handleAdminTyping = (sessionId, text) => {
    setAdminReply(text)
    
    if (text.trim()) {
      // Set typing indicator
      localStorage.setItem('adminTyping_' + sessionId, Date.now().toString())
    } else {
      // Clear typing indicator
      localStorage.removeItem('adminTyping_' + sessionId)
    }
  }

  const markAsRead = async (sessionId) => {
    // Mark as read in local state (unread is just UI state for admin)
    const updated = chatMessages.map(chat => 
      chat.id === sessionId ? { ...chat, unread: false } : chat
    )
    setChatMessages(updated)
  }

  const deleteChat = async (sessionId) => {
    if (confirm('Delete this conversation?')) {
      // Delete all messages in this session
      const session = chatMessages.find(c => c.id === sessionId)
      if (session && session.messages) {
        for (const msg of session.messages) {
          await chatService.deleteMessage(sessionId, msg.id)
        }
      }
      
      // Reload sessions
      const sessions = await chatService.getAllSessions()
      setChatMessages(sessions)
      setSelectedChat(null)
      showToast('Chat deleted!')
    }
  }

  const startEditMessage = (messageId, currentText) => {
    setEditingMessageId(messageId)
    setEditedText(currentText)
  }

  const saveEditedMessage = async (sessionId, messageId) => {
    if (!editedText.trim()) return

    await chatService.updateMessage(sessionId, messageId, editedText)
    
    // Reload messages
    const sessions = await chatService.getAllSessions()
    setChatMessages(sessions)
    
    const updated = sessions.find(c => c.id === sessionId)
    if (updated) {
      setSelectedChat(updated)
    }
    
    setEditingMessageId(null)
    setEditedText('')
    showToast('Message updated!')
  }

  const deleteMessage = async (sessionId, messageId) => {
    if (confirm('Delete this message?')) {
      await chatService.deleteMessage(sessionId, messageId)
      
      // Reload messages
      const sessions = await chatService.getAllSessions()
      setChatMessages(sessions)
      
      const updated = sessions.find(c => c.id === sessionId)
      if (updated) {
        setSelectedChat(updated)
      }
      
      showToast('Message deleted!')
    }
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Login — Portfolio</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="relative bg-gray-900 rounded-3xl p-10 max-w-md w-full shadow-2xl border-2 border-gray-800">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                🔐
              </div>
              <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-3">
                Admin Panel
              </h1>
              <p className="text-gray-400 font-semibold">Enter password to access dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password..."
                  className="w-full px-5 py-4 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:border-blue-600 outline-none transition-all font-mono font-bold placeholder:text-gray-600"
                  autoFocus
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-black uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Login to Dashboard
              </button>
            </form>

            <div className="mt-8 text-center">
              <a href="/" className="text-gray-500 hover:text-blue-400 font-bold text-sm transition">
                ← Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Admin Dashboard
  return (
    <>
      <Head>
        <title>Administration Dashboard — Portfolio</title>
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-6 sticky top-0 z-50 shadow-2xl">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-tight">Admin Dashboard</h1>
                  <p className="text-blue-100 text-sm font-semibold">Portfolio Management System</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="/"
                  target="_blank"
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-bold text-sm transition-all"
                >
                  Preview Site
                </a>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-black uppercase text-sm transition-all"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {/* Tabs */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {[
              { id: 'messages', label: 'Messages', icon: '💬' },
              { id: 'profile', label: 'Profile Info', icon: '👤' },
              { id: 'stats', label: 'Statistics', icon: '📊' },
              { id: 'projects', label: 'Projects', icon: '💼' },
              { id: 'media', label: 'Media', icon: '📸' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:text-white border-2 border-gray-700 hover:border-blue-600'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="uppercase tracking-wide text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Chat List */}
              <div className="lg:col-span-1 bg-gray-800 rounded-2xl p-6 border-2 border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Conversations</h2>
                    <p className="text-gray-500 text-xs font-semibold mt-1">
                      {chatMessages.length} total • {chatMessages.filter(c => c.unread).length} unread
                    </p>
                    <p className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Barcha xabarlar localStorage'da saqlanadi
                    </p>
                  </div>
                  {chatMessages.length > 0 && (
                    <button
                      onClick={() => {
                        if (confirm('Delete ALL conversations? This cannot be undone!')) {
                          localStorage.removeItem('chatMessages')
                          setChatMessages([])
                          setSelectedChat(null)
                          showToast('All chats deleted!')
                        }
                      }}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs transition-all"
                      title="Delete all chats"
                    >
                      🗑️ All
                    </button>
                  )}
                </div>
                
                {chatMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">💬</div>
                    <p className="text-gray-400 font-semibold">No messages yet</p>
                    <p className="text-gray-600 text-sm mt-2">Messages will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {chatMessages.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => {
                          setSelectedChat(chat)
                          markAsRead(chat.id)
                        }}
                        className={`p-4 rounded-xl cursor-pointer transition-all ${
                          selectedChat?.id === chat.id
                            ? 'bg-blue-600 border-2 border-blue-500'
                            : 'bg-gray-900 border-2 border-gray-700 hover:border-blue-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-sm">
                              👤
                            </div>
                            <span className={`font-bold text-sm ${selectedChat?.id === chat.id ? 'text-white' : 'text-gray-300'}`}>
                              User #{chat.id.slice(-6)}
                            </span>
                          </div>
                          {chat.unread && (
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <p className={`text-xs line-clamp-2 ${selectedChat?.id === chat.id ? 'text-blue-100' : 'text-gray-500'} font-semibold`}>
                          {chat.lastMessage}
                        </p>
                        <div className={`text-xs mt-2 ${selectedChat?.id === chat.id ? 'text-blue-200' : 'text-gray-600'} font-mono`}>
                          {new Date(chat.timestamp).toLocaleString('uz-UZ')}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Chat View */}
              <div className="lg:col-span-2 bg-gray-800 rounded-2xl border-2 border-gray-700 flex flex-col" style={{height: '700px'}}>
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-6 border-b-2 border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                            👤
                          </div>
                          <div>
                            <div className="text-white font-black text-lg">User #{selectedChat.id.slice(-6)}</div>
                            <div className="text-blue-100 text-sm font-semibold">
                              {selectedChat.messages.length} messages • {new Date(selectedChat.timestamp).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              if (confirm('Clear all messages in this chat?')) {
                                const chatHistory = JSON.parse(localStorage.getItem('chatMessages') || '[]')
                                const chatIndex = chatHistory.findIndex(c => c.id === selectedChat.id)
                                if (chatIndex >= 0) {
                                  chatHistory[chatIndex].messages = [{
                                    id: 1,
                                    sender: 'bot',
                                    text: 'Assalomu alaykum! 👋 Men Bahriddin. Sizga qanday yordam bera olaman?',
                                    time: 'hozir'
                                  }]
                                  localStorage.setItem('chatMessages', JSON.stringify(chatHistory))
                                  setChatMessages(chatHistory)
                                  setSelectedChat(chatHistory[chatIndex])
                                  showToast('Chat cleared!')
                                }
                              }
                            }}
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear
                          </button>
                          <button
                            onClick={() => deleteChat(selectedChat.id)}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Delete Chat
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-950" id="admin-chat-messages">
                      {/* User Typing Indicator */}
                      {userTypingStatus[selectedChat.id] && (
                        <div className="flex justify-end">
                          <div className="max-w-[75%] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold uppercase">User yozmoqda...</span>
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedChat.messages && selectedChat.messages.length > 0 ? (
                        selectedChat.messages.map((msg, index) => (
                          <div
                            key={msg.id || index}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                          >
                            {/* Avatar for bot/admin */}
                            {(msg.sender === 'bot' || msg.sender === 'admin') && (
                              <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-lg mr-3 ${
                                msg.sender === 'admin'
                                  ? 'bg-gradient-to-br from-green-600 to-cyan-600'
                                  : 'bg-gradient-to-br from-blue-600 to-purple-600'
                              }`}>
                                {msg.sender === 'admin' ? '👨‍💼' : '👨‍💻'}
                              </div>
                            )}

                            <div className={`max-w-[75%] ${msg.sender === 'user' ? 'order-2' : ''} group`}>
                              <div className={`px-5 py-4 shadow-xl relative ${
                                msg.sender === 'user' 
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl rounded-br-md' 
                                  : msg.sender === 'admin'
                                  ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-3xl rounded-bl-md'
                                  : 'bg-gray-800 text-gray-200 border-2 border-gray-700 rounded-3xl rounded-bl-md'
                              }`}>
                                {/* Edit/Delete buttons - For all messages (admin can delete any) */}
                                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {msg.sender === 'admin' && (
                                    <button
                                      onClick={() => startEditMessage(msg.id, msg.text)}
                                      className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
                                      title="Edit message"
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </button>
                                  )}
                                  <button
                                    onClick={() => deleteMessage(selectedChat.id, msg.id)}
                                    className="p-1.5 bg-red-500/80 hover:bg-red-600 rounded-lg transition-all"
                                    title="Delete message"
                                  >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-black opacity-75 uppercase tracking-wide">
                                    {msg.sender === 'admin' ? '👨‍💼 You (Admin)' : msg.sender === 'user' ? '👤 User' : '🤖 Bot'}
                                  </span>
                                  {msg.edited && (
                                    <span className="text-xs opacity-60 italic">(edited)</span>
                                  )}
                                </div>
                                
                                {editingMessageId === msg.id ? (
                                  <div className="space-y-2">
                                    <textarea
                                      value={editedText}
                                      onChange={(e) => setEditedText(e.target.value)}
                                      className="w-full px-3 py-2 bg-white/10 border border-white/30 text-white rounded-lg outline-none font-semibold text-sm"
                                      rows={3}
                                      autoFocus
                                    />
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => saveEditedMessage(selectedChat.id, msg.id)}
                                        className="flex-1 px-3 py-1.5 bg-white text-green-600 rounded-lg font-bold text-xs uppercase hover:scale-105 transition-all"
                                      >
                                        ✓ Save
                                      </button>
                                      <button
                                        onClick={() => {
                                          setEditingMessageId(null)
                                          setEditedText('')
                                        }}
                                        className="flex-1 px-3 py-1.5 bg-white/20 text-white rounded-lg font-bold text-xs uppercase hover:scale-105 transition-all"
                                      >
                                        × Cancel
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="font-bold leading-relaxed text-base">{msg.text}</p>
                                )}
                                
                                <div className="text-xs opacity-75 mt-2 font-mono flex items-center gap-2">
                                  {msg.time || 'now'}
                                  {msg.edited && (
                                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">edited</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <div className="text-5xl mb-4">💬</div>
                          <p className="text-gray-400 font-semibold">No messages in this conversation</p>
                        </div>
                      )}
                      
                      {/* Debug info */}
                      <div className="px-6 py-2 bg-gray-900 text-gray-600 text-xs font-mono border-t border-gray-800">
                        Total messages: {selectedChat?.messages?.length || 0} • Last update: {new Date().toLocaleTimeString()}
                      </div>
                    </div>

                    {/* Reply Input */}
                    <div className="p-6 border-t-2 border-gray-700 bg-gray-900">
                      <div className="flex gap-3 items-end">
                        <div className="flex-1">
                          <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">
                            Your Reply
                          </label>
                          <textarea
                            value={adminReply}
                            onChange={(e) => handleAdminTyping(selectedChat.id, e.target.value)}
                            placeholder="Type your reply..."
                            rows={3}
                            className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:border-green-600 outline-none transition-all font-semibold"
                          />
                        </div>
                        <button
                          onClick={() => sendAdminReply(selectedChat.id)}
                          disabled={!adminReply.trim()}
                          className={`px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-xl font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105 flex items-center gap-2 ${
                            !adminReply.trim() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💬</div>
                      <h3 className="text-2xl font-black text-white mb-2">Select a Conversation</h3>
                      <p className="text-gray-400 font-semibold">Choose a chat from the list to view and reply</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Profile Info Tab */}
          {activeTab === 'profile' && (
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Profile Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Role/Title</label>
                  <input
                    type="text"
                    value={profileData.role}
                    onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Telegram</label>
                  <input
                    type="text"
                    value={profileData.telegram}
                    onChange={(e) => setProfileData({...profileData, telegram: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Location</label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={profileData.github}
                    onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Bio / Summary</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-semibold"
                  />
                </div>
              </div>
              <button
                onClick={saveProfileData}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-xl font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105"
              >
                💾 Save Profile Data
              </button>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Portfolio Statistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Experience</label>
                  <input
                    type="text"
                    value={stats.experience}
                    onChange={(e) => setStats({...stats, experience: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                    placeholder="3+"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Total Projects</label>
                  <input
                    type="text"
                    value={stats.projects}
                    onChange={(e) => setStats({...stats, projects: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                    placeholder="15+"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Total Users</label>
                  <input
                    type="text"
                    value={stats.users}
                    onChange={(e) => setStats({...stats, users: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                    placeholder="10K+"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Total Revenue</label>
                  <input
                    type="text"
                    value={stats.revenue}
                    onChange={(e) => setStats({...stats, revenue: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                    placeholder="$50K+"
                  />
                </div>
              </div>
              <button
                onClick={saveStats}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-xl font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105"
              >
                💾 Save Statistics
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Manage Projects</h2>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black uppercase text-sm tracking-wide">
                  + Add New Project
                </button>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={project.id} className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Project Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => {
                            const newProjects = [...projects]
                            newProjects[index].title = e.target.value
                            setProjects(newProjects)
                          }}
                          className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Icon Emoji</label>
                        <input
                          type="text"
                          value={project.icon}
                          onChange={(e) => {
                            const newProjects = [...projects]
                            newProjects[index].icon = e.target.value
                            setProjects(newProjects)
                          }}
                          className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-bold text-center text-2xl"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Description</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => {
                            const newProjects = [...projects]
                            newProjects[index].description = e.target.value
                            setProjects(newProjects)
                          }}
                          rows={2}
                          className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:border-blue-600 outline-none transition-all font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={saveProjects}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-xl font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105"
              >
                💾 Save All Projects
              </button>
            </div>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Profile Image</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Current Image */}
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-4">Current Image</h3>
                  <div className="w-64 h-64 mx-auto bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700">
                    {typeof window !== 'undefined' && localStorage.getItem('profileImage') ? (
                      <img 
                        src={localStorage.getItem('profileImage')} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-7xl">
                        👨‍💻
                      </div>
                    )}
                  </div>
                  {typeof window !== 'undefined' && localStorage.getItem('profileImage') && (
                    <button
                      onClick={removeImage}
                      className="mt-4 w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wide transition-all"
                    >
                      Remove Image
                    </button>
                  )}
                </div>

                {/* Upload New */}
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-4">Upload New Image</h3>
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-gray-600 rounded-2xl p-10 text-center hover:border-purple-600 hover:bg-gray-700/50 transition-all">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-4xl">
                        📸
                      </div>
                      <p className="text-white font-black mb-2 uppercase tracking-wide">Click to Upload</p>
                      <p className="text-gray-400 text-sm font-semibold">Professional headshot recommended</p>
                      <p className="text-gray-500 text-xs mt-2">PNG, JPG, WebP • Max 5MB</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">System Settings</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700">
                  <h3 className="text-xl font-black text-white mb-3 uppercase">Admin Password</h3>
                  <p className="text-gray-400 font-semibold mb-4">To change admin password, edit the <code className="text-blue-400 font-mono">ADMIN_PASSWORD</code> constant in <code className="text-blue-400 font-mono">src/pages/administration.jsx</code></p>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-gray-500 text-sm font-semibold">🔐 Password is securely stored in the source code</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700">
                  <h3 className="text-xl font-black text-white mb-3 uppercase">Clear All Data</h3>
                  <p className="text-gray-400 font-semibold mb-4">Reset portfolio to default state</p>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure? This will clear all customizations!')) {
                        localStorage.clear()
                        window.location.reload()
                      }
                    }}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wide transition-all"
                  >
                    ⚠️ Reset Everything
                  </button>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700">
                  <h3 className="text-xl font-black text-white mb-3 uppercase">Quick Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/"
                      target="_blank"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                    >
                      🌐 Preview Site 
                    </a>
                    <a
                      href="/resume"
                      target="_blank"
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all"
                    >
                      📄 View Resume
                    </a>
                    <a
                      href="/projects"
                      target="_blank"
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all"
                    >
                      💼 View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

