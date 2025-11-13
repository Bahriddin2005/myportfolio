import React, { useState } from 'react'
import * as chatService from '../lib/chatService'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isAdminTyping, setIsAdminTyping] = useState(false)
  const [editingMessageId, setEditingMessageId] = useState(null)
  const [editedText, setEditedText] = useState('')
  const messagesEndRef = React.useRef(null)
  const [messagesLoaded, setMessagesLoaded] = useState(false)
  const previousMessagesRef = React.useRef([])
  const lastNotificationTimeRef = React.useRef(0)
  const [unreadAdminMessages, setUnreadAdminMessages] = useState(0)
  const lastReadMessageIdRef = React.useRef(null)
  const [sessionId, setSessionId] = useState(null)
  const [showVideoCall, setShowVideoCall] = useState(false)
  const [videoRoomName, setVideoRoomName] = useState('')
  const jitsiApiRef = React.useRef(null)

  // Load Jitsi script when video call is started
  React.useEffect(() => {
    if (showVideoCall && videoRoomName && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://meet.jit.si/external_api.js'
      script.async = true
      
      script.onload = () => {
        initializeJitsi()
      }
      
      document.body.appendChild(script)
      
      return () => {
        if (jitsiApiRef.current) {
          jitsiApiRef.current.dispose()
        }
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [showVideoCall, videoRoomName])

  const initializeJitsi = () => {
    if (typeof window !== 'undefined' && window.JitsiMeetExternalAPI && videoRoomName) {
      const domain = 'meet.jit.si'
      const options = {
        roomName: videoRoomName,
        width: '100%',
        height: 600,
        parentNode: document.querySelector('#chat-jitsi-container'),
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          enableWelcomePage: false,
          prejoinPageEnabled: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          DEFAULT_BACKGROUND: '#1f2937',
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'desktop', 'fullscreen',
            'hangup', 'chat', 'settings'
          ]
        },
        userInfo: {
          displayName: 'User'
        }
      }
      
      jitsiApiRef.current = new window.JitsiMeetExternalAPI(domain, options)
    }
  }

  const startVideoCall = () => {
    const room = `chat-${sessionId || Date.now()}`
    setVideoRoomName(room)
    setShowVideoCall(true)
    
    // Send message to admin about video call
    if (sessionId) {
      chatService.sendMessage(sessionId, 'user', `🎥 Video qo'ng'iroq boshlandi! Room: ${room}`)
      setTimeout(async () => {
        const latestMessages = await chatService.getMessages(sessionId)
        setMessages(latestMessages)
      }, 500)
    }
  }

  const endVideoCall = () => {
    if (jitsiApiRef.current) {
      jitsiApiRef.current.dispose()
      jitsiApiRef.current = null
    }
    setShowVideoCall(false)
    setVideoRoomName('')
  }

  const handleUserTyping = (text) => {
    setInputText(text)
    
    const sessionId = localStorage.getItem('chatSessionId')
    if (sessionId && text.trim()) {
      // Set user typing indicator for admin to see
      localStorage.setItem('userTyping_' + sessionId, Date.now().toString())
    } else if (sessionId) {
      localStorage.removeItem('userTyping_' + sessionId)
    }
  }

  const deleteUserMessage = async (messageId) => {
    if (confirm('Bu xabarni o\'chirmoqchimisiz?')) {
      if (sessionId) {
        await chatService.deleteMessage(sessionId, messageId)
        const updatedMessages = messages.filter(msg => msg.id !== messageId)
        setMessages(updatedMessages)
      }
    }
  }

  const startEditMessage = (messageId, currentText) => {
    setEditingMessageId(messageId)
    setEditedText(currentText)
  }

  const saveEditedMessage = async (messageId) => {
    if (!editedText.trim()) return

    if (sessionId) {
      await chatService.updateMessage(sessionId, messageId, editedText)
      
      const updatedMessages = messages.map(msg => 
        msg.id === messageId 
          ? { ...msg, text: editedText, edited: true, editedAt: new Date().toISOString() }
          : msg
      )
      setMessages(updatedMessages)
    }

    setEditingMessageId(null)
    setEditedText('')
  }

  const cancelEdit = () => {
    setEditingMessageId(null)
    setEditedText('')
  }

  const showSavedIndicator = () => {
    // Create a brief visual indicator that message was saved
    const indicator = document.createElement('div')
    indicator.className = 'fixed bottom-24 right-6 z-50 px-4 py-2 bg-green-600 text-white rounded-lg font-bold text-sm shadow-xl animate-slide-up flex items-center gap-2'
    indicator.innerHTML = `
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Xabar saqlandi
    `
    document.body.appendChild(indicator)
    setTimeout(() => indicator.remove(), 2000)
  }

  const playNotificationSound = () => {
    // Simple notification sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 800
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    } catch (e) {
      console.log('Sound not supported')
    }
  }

  const showNewMessageNotification = (message) => {
    // Play sound
    playNotificationSound()

    // Show custom toast notification
    const notification = document.createElement('div')
    notification.className = 'fixed top-6 right-6 z-[60] max-w-md animate-slide-down'
    notification.innerHTML = `
      <div class="bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-2xl shadow-2xl p-4 border-2 border-white/20">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
            👨‍💼
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="font-black text-sm uppercase tracking-wide">Yangi Xabar</span>
              <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <p class="text-white/90 text-sm font-semibold line-clamp-2">${message.text}</p>
            <div class="text-white/70 text-xs font-bold mt-1">Bahriddin • ${message.time}</div>
          </div>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="flex-shrink-0 text-white/60 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    `
    document.body.appendChild(notification)
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-500')
      setTimeout(() => notification.remove(), 500)
    }, 5000)

    // Request browser notification permission and show if granted
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('💬 Yangi xabar - Bahriddin', {
        body: message.text,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'chat-message',
        requireInteraction: false,
        silent: false
      })
    } else if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('💬 Yangi xabar - Bahriddin', {
            body: message.text,
            icon: '/favicon.ico',
            badge: '/favicon.ico',
            tag: 'chat-message',
            requireInteraction: false,
            silent: false
          })
        }
      })
    }
  }

  // Load saved messages on component mount
  React.useEffect(() => {
    const loadSavedMessages = async () => {
      // Get or create session ID
      const sid = chatService.generateSessionId()
      setSessionId(sid)
      
      // Load messages from Supabase/localStorage
      const loadedMessages = await chatService.getMessages(sid)
      
      if (loadedMessages && loadedMessages.length > 0) {
        setMessages(loadedMessages)
        setMessagesLoaded(true)
      } else {
        // No existing messages - show welcome message
        const welcomeMessage = {
          id: Date.now(),
          sender: 'bot',
          text: 'Assalomu alaykum! 👋 Men Bahriddin. Sizga qanday yordam bera olaman?',
          time: 'hozir',
          timestamp: new Date().toISOString()
        }
        
        // Save welcome message to database
        await chatService.sendMessage(sid, 'bot', welcomeMessage.text)
        
        setMessages([welcomeMessage])
        setMessagesLoaded(true)
      }
    }
    
    loadSavedMessages()
  }, []) // Only run once on mount

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isAdminTyping])

  // Listen for custom event to open chat
  React.useEffect(() => {
    const handleOpenChat = () => setIsOpen(true)
    window.addEventListener('openChat', handleOpenChat)
    return () => window.removeEventListener('openChat', handleOpenChat)
  }, [])

  // Reset unread count when chat is opened
  React.useEffect(() => {
    if (isOpen) {
      setUnreadAdminMessages(0)
    }
  }, [isOpen])

  // Check for admin replies from database every 2 seconds
  React.useEffect(() => {
    if (!messagesLoaded || !sessionId) return
    
    const checkAdminActivity = async () => {
      // Fetch latest messages from database
      const latestMessages = await chatService.getMessages(sessionId)
      
      if (latestMessages && latestMessages.length > 0) {
        const previousMessages = previousMessagesRef.current
        
        // Check for new admin messages
        if (previousMessages.length > 0 && latestMessages.length > previousMessages.length) {
          const newAdminMessages = latestMessages.slice(previousMessages.length).filter(
            msg => msg.sender === 'admin'
          )
          
          const now = Date.now()
          if (newAdminMessages.length > 0 && (now - lastNotificationTimeRef.current) > 2000) {
            newAdminMessages.forEach(msg => {
              showNewMessageNotification(msg)
            })
            lastNotificationTimeRef.current = now
            
            if (!isOpen) {
              setUnreadAdminMessages(prev => prev + newAdminMessages.length)
            }
          }
        }
        
        previousMessagesRef.current = latestMessages
        
        // Update messages if changed
        const currentJson = JSON.stringify(messages)
        const latestJson = JSON.stringify(latestMessages)
        
        if (currentJson !== latestJson) {
          setMessages(latestMessages)
        }
      }

      // Check typing indicator (still using localStorage for real-time typing)
      const typingTimestamp = localStorage.getItem('adminTyping_' + sessionId)
      if (typingTimestamp) {
        const timeSinceTyping = Date.now() - parseInt(typingTimestamp)
        setIsAdminTyping(timeSinceTyping < 5000)
      } else {
        setIsAdminTyping(false)
      }
    }

    const interval = setInterval(checkAdminActivity, 2000) // Check every 2 seconds
    checkAdminActivity() // Initial check
    return () => clearInterval(interval)
  }, [messages, messagesLoaded, sessionId, isOpen])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputText.trim() || !sessionId) return

    const messageText = inputText
    setInputText('')
    
    // Clear user typing indicator
    localStorage.removeItem('userTyping_' + sessionId)

    // Send message to database
    const result = await chatService.sendMessage(sessionId, 'user', messageText)
    
    if (result.success) {
      // Update local state immediately
      const newMessage = result.message
      const updatedMessages = [...messages, newMessage]
      setMessages(updatedMessages)
      
      // Show saved indicator
      showSavedIndicator()

      // Auto reply after 2 seconds
      setTimeout(async () => {
        const autoReplyText = 'Xabaringiz qabul qilindi! 2 soat ichida javob beraman. Telegram orqali ham murojaat qilishingiz mumkin: @baxadevuz'
        const autoReplyResult = await chatService.sendMessage(sessionId, 'bot', autoReplyText)
        
        if (autoReplyResult.success) {
          setMessages(prev => [...prev, autoReplyResult.message])
        }
      }, 2000)
    }
  }

  return (
    <>
      {/* Chat Button - Premium Floating - Mobile Responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <div className="relative group">
            {/* Animated glow rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-2xl animate-ping opacity-20"></div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 p-3 sm:p-5 hover:scale-110 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  {/* Online dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-white text-sm font-black uppercase tracking-wide">Chat Boshlash</div>
                  <div className="text-blue-100 text-xs font-semibold">Onlinedamiz!</div>
                </div>
              </div>
              
              {/* Notification badge - Only show if unread messages */}
              {unreadAdminMessages > 0 && (
                <div className="absolute -top-2 -right-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                    <div className="relative w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg animate-scale-in">
                      {unreadAdminMessages}
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Chat Window - Dark Premium Design - Mobile Responsive */}
        {isOpen && (
          <div className="fixed inset-4 sm:relative sm:inset-auto sm:w-[420px] sm:h-[650px] w-auto h-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-scale-in border-2 border-gray-800">
            {/* Premium Header with Gradient - Mobile Responsive */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-4 py-4 sm:px-6 sm:py-5 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg">
                        👨‍💻
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                          <div className="relative w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-black text-base sm:text-lg tracking-tight">Bahriddin</div>
                      <div className="text-blue-100 text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="hidden sm:inline">Online • Tez javob beradi</span>
                        <span className="sm:hidden">Online</span>
                      </div>
                      <div className="text-blue-200/80 text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                          <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                        </svg>
                        {messages.length} xabar <span className="hidden sm:inline">• Saqlanmoqda</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Video Call Button */}
                    {!showVideoCall && (
                      <button
                        onClick={startVideoCall}
                        className="group relative text-white hover:bg-white/20 rounded-lg sm:rounded-xl p-1.5 sm:p-2 transition-all duration-300"
                        title="Video qo'ng'iroq boshlash"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {/* Pulse dot */}
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      </button>
                    )}
                    
                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setIsOpen(false)
                        endVideoCall()
                      }}
                      className="text-white hover:bg-white/20 rounded-lg sm:rounded-xl p-1.5 sm:p-2 transition-all hover:rotate-90 duration-300"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Call or Messages */}
            {showVideoCall ? (
              /* Video Call Interface */
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-3 sm:p-6">
                <div className="h-full flex flex-col">
                  {/* Video Call Header */}
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-3">
                      <span className="text-red-400 font-black text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Video Qo&apos;ng&apos;iroq Faol
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs font-semibold">
                      Room: <code className="text-green-400 font-mono">{videoRoomName}</code>
                    </p>
                  </div>

                  {/* Jitsi Container */}
                  <div 
                    id="chat-jitsi-container"
                    className="flex-1 bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl"
                    style={{minHeight: '400px'}}
                  ></div>

                  {/* End Call Button */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={endVideoCall}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-black text-sm transition-all hover:scale-105 shadow-xl hover:shadow-red-500/50 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Qo&apos;ng&apos;iroqni Tugatish
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(videoRoomName)
                        alert('Room link nusxalandi!')
                      }}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                      title="Room linkini nusxalash"
                    >
                      📋
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Messages - Dark bubbles - Mobile Responsive */
              <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-6 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
                {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 sm:gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                >
                  {/* Bot/Admin avatar */}
                  {(message.sender === 'bot' || message.sender === 'admin') && (
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-lg shadow-lg ${
                      message.sender === 'admin'
                        ? 'bg-gradient-to-br from-green-600 to-cyan-600'
                        : 'bg-gradient-to-br from-blue-600 to-purple-600'
                    }`}>
                      {message.sender === 'admin' ? '👨‍💼' : '👨‍💻'}
                    </div>
                  )}

                  <div className={`max-w-[85%] sm:max-w-[75%] ${message.sender === 'user' ? 'order-2' : ''} group`}>
                    <div
                      className={`px-3 py-2.5 sm:px-5 sm:py-4 shadow-xl relative text-sm sm:text-base ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl rounded-br-md shadow-blue-500/50 border border-blue-500/50'
                          : message.sender === 'admin'
                          ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-3xl rounded-bl-md shadow-green-500/50 border border-green-500/50'
                          : 'bg-gray-800 text-gray-100 rounded-3xl rounded-bl-md border-2 border-gray-700'
                      }`}
                    >
                      {/* Edit/Delete buttons for user messages - Premium Design */}
                      {message.sender === 'user' && editingMessageId !== message.id && (
                        <div className="absolute -top-3 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                          {/* Edit Button - Cyan/Green gradient */}
                          <button
                            onClick={() => startEditMessage(message.id, message.text)}
                            className="group/edit relative p-2 bg-gradient-to-br from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
                            title="Xabarni tahrirlash"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/edit:opacity-100 transition-opacity whitespace-nowrap font-bold">
                              Tahrirlash
                            </span>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-green-400 rounded-xl blur-md opacity-0 group-hover/edit:opacity-50 transition-opacity -z-10"></div>
                          </button>
                          
                          {/* Delete Button - Red/Orange gradient */}
                          <button
                            onClick={() => deleteUserMessage(message.id)}
                            className="group/delete relative p-2 bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
                            title="Xabarni o'chirish"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/delete:opacity-100 transition-opacity whitespace-nowrap font-bold">
                              O'chirish
                            </span>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-400 rounded-xl blur-md opacity-0 group-hover/delete:opacity-50 transition-opacity -z-10"></div>
                          </button>
                        </div>
                      )}
                      {message.sender === 'admin' && (
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/20">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-black uppercase tracking-wider">Bahriddin (Admin)</span>
                          {message.edited && (
                            <span className="text-xs opacity-70 italic ml-auto">(tahrirlangan)</span>
                          )}
                        </div>
                      )}
                      
                      {/* Edit mode for user messages - Premium Design */}
                      {editingMessageId === message.id ? (
                        <div className="space-y-3 animate-slide-up">
                          {/* Edit label */}
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-green-500 rounded-full"></div>
                            <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                              ✏️ Tahrirlash rejimi
                            </span>
                          </div>
                          
                          {/* Textarea with border gradient effect */}
                          <div className="relative">
                            <textarea
                              value={editedText}
                              onChange={(e) => setEditedText(e.target.value)}
                              className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 border-cyan-500/50 focus:border-cyan-400 text-white rounded-xl outline-none font-semibold text-sm resize-none shadow-xl shadow-cyan-500/20 transition-all duration-300"
                              rows={3}
                              autoFocus
                              placeholder="Xabaringizni tahrirlang..."
                            />
                            {/* Character count */}
                            <div className="absolute bottom-2 right-3 text-xs text-cyan-400 font-mono opacity-60">
                              {editedText.length} belgi
                            </div>
                          </div>
                          
                          {/* Action buttons - Premium gradient */}
                          <div className="flex gap-3">
                            {/* Save button - Cyan/Green gradient */}
                            <button
                              onClick={() => saveEditedMessage(message.id)}
                              className="group/save relative flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
                            >
                              {/* Button glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/save:translate-x-[100%] transition-transform duration-700"></div>
                              <span className="relative flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                Saqlash
                              </span>
                            </button>
                            
                            {/* Cancel button - Red/Gray gradient */}
                            <button
                              onClick={cancelEdit}
                              className="group/cancel relative flex-1 px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-500 hover:to-orange-500 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
                            >
                              {/* Button glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/cancel:translate-x-[100%] transition-transform duration-700"></div>
                              <span className="relative flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Bekor
                              </span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm font-bold leading-relaxed tracking-wide">{message.text}</p>
                      )}
                    </div>
                    <div className={`text-xs text-gray-500 font-bold mt-2 px-2 flex items-center gap-1 uppercase tracking-wider ${message.sender === 'user' ? 'justify-end' : ''}`}>
                      {message.sender === 'bot' && (
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {message.time}
                      {message.edited && message.sender === 'user' && (
                        <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-cyan-500/30 to-green-500/30 border border-cyan-400/40 px-2 py-0.5 rounded-lg text-cyan-200 font-bold shadow-sm">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          tahrirlangan
                        </span>
                      )}
                      {message.edited && (message.sender === 'admin' || message.sender === 'bot') && (
                        <span className="text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-400">tahrirlangan</span>
                      )}
                      {message.sender === 'user' && (
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Admin Typing Indicator - Mobile Responsive */}
              {isAdminTyping && (
                <div className="flex gap-2 sm:gap-3 animate-slide-up">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-lg shadow-lg">
                    👨‍💼
                  </div>
                  <div className="max-w-[85%] sm:max-w-[75%]">
                    <div className="px-3 py-2.5 sm:px-5 sm:py-4 bg-gray-800 rounded-2xl sm:rounded-3xl rounded-bl-md border-2 border-green-600 shadow-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] sm:text-xs font-bold text-green-400 uppercase">Bahriddin yozmoqda...</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />

              {/* Quick suggestions - Dark - Mobile Responsive */}
              {messages.length === 1 && (
                <div className="mt-4 sm:mt-6 bg-gray-800 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border-2 border-gray-700 shadow-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl shadow-lg">
                      💡
                    </div>
                    <div className="font-black text-white text-sm sm:text-base uppercase tracking-wide">Tez Savollar</div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => setInputText('Loyiha narxi qancha?')}
                      className="w-full text-left px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
                    >
                      💰 Narx Ma'lumoti
                    </button>
                    <button
                      onClick={() => setInputText('MVP yaratish uchun qancha vaqt kerak?')}
                      className="w-full text-left px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
                    >
                      ⏱️ MVP Vaqti
                    </button>
                    <button
                      onClick={() => setInputText('Portfolio ishlaringizni ko\'rmoqchiman')}
                      className="w-full text-left px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
                    >
                      🎨 Portfolio
                    </button>
                  </div>
                </div>
              )}
              </div>
            )}

            {/* Quick Actions - Dark chips - Mobile Responsive */}
            {!showVideoCall && (
              <div className="px-3 py-3 sm:px-6 sm:py-4 bg-gray-900 border-t-2 border-gray-800">
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  onClick={() => setInputText('Web sayt yaratish bo\'yicha gaplashmoqchiman')}
                  className="group px-3 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black whitespace-nowrap transition-all hover:scale-110 hover:shadow-xl shadow-blue-500/50 flex items-center gap-1 sm:gap-2 uppercase tracking-wider"
                >
                  <span className="text-base sm:text-xl">💻</span>
                  Web Sayt
                </button>
                <button
                  onClick={() => setInputText('MVP yaratish uchun yordam kerak')}
                  className="group px-3 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black whitespace-nowrap transition-all hover:scale-110 hover:shadow-xl shadow-purple-500/50 flex items-center gap-1 sm:gap-2 uppercase tracking-wider"
                >
                  <span className="text-base sm:text-xl">🚀</span>
                  MVP
                </button>
                <button
                  onClick={() => setInputText('Narx haqida ma\'lumot bera olasizmi?')}
                  className="group px-3 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black whitespace-nowrap transition-all hover:scale-110 hover:shadow-xl shadow-green-500/50 flex items-center gap-1 sm:gap-2 uppercase tracking-wider"
                >
                  <span className="text-base sm:text-xl">💰</span>
                  Narx
                </button>
              </div>
              </div>
            )}

            {/* Input - Dark Premium - Mobile Responsive */}
            {!showVideoCall && (
              <form onSubmit={handleSendMessage} className="p-3 sm:p-6 bg-gray-900 border-t-2 border-gray-800">
              <div className="flex gap-2 sm:gap-3 items-end">
                {/* Input field */}
                <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => handleUserTyping(e.target.value)}
                  placeholder="Xabaringizni yozing..."
                  className="w-full px-3 py-2.5 sm:px-5 sm:py-4 bg-gray-800 border-2 border-gray-700 text-white text-sm sm:text-base rounded-xl sm:rounded-2xl focus:bg-gray-850 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold placeholder:text-gray-500 placeholder:font-semibold"
                />
                </div>

                {/* Send button - Mobile Responsive */}
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`flex-shrink-0 px-4 py-2.5 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all flex items-center justify-center gap-1 sm:gap-2 font-black uppercase text-[10px] sm:text-xs tracking-wider ${
                    !inputText.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="hidden sm:inline">Yuborish</span>
                </button>
              </div>
              
              {/* Alternative contact - Dark - Mobile Responsive */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <a
                  href="https://t.me/baxadevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black text-white transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
                <span className="text-gray-600 font-black text-[10px] sm:text-xs">yoki</span>
                <a
                  href="mailto:hello@bahriddin.dev"
                  className="group flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black text-white transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
              </form>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

