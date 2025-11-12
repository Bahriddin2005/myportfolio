-- Portfolio Chat Database Schema
-- Run this in Supabase SQL Editor

-- 1. Chat Sessions Table
CREATE TABLE IF NOT EXISTS chat_sessions (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_message TEXT,
  last_message_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unread BOOLEAN DEFAULT true,
  user_agent TEXT,
  ip_address TEXT
);

-- 2. Chat Messages Table
CREATE TABLE IF NOT EXISTS chat_messages (
  id BIGSERIAL PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'admin', 'bot')),
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  edited BOOLEAN DEFAULT false,
  edited_at TIMESTAMP WITH TIME ZONE
);

-- 3. Typing Status Table (for real-time typing indicators)
CREATE TABLE IF NOT EXISTS typing_status (
  session_id TEXT PRIMARY KEY REFERENCES chat_sessions(id) ON DELETE CASCADE,
  user_typing BOOLEAN DEFAULT false,
  user_typing_at TIMESTAMP WITH TIME ZONE,
  admin_typing BOOLEAN DEFAULT false,
  admin_typing_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON chat_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_unread ON chat_sessions(unread);

-- 5. Function to update session's last message
CREATE OR REPLACE FUNCTION update_session_last_message()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE chat_sessions
  SET 
    last_message = NEW.text,
    last_message_time = NEW.created_at
  WHERE id = NEW.session_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 6. Trigger to auto-update last message
DROP TRIGGER IF EXISTS trigger_update_last_message ON chat_messages;
CREATE TRIGGER trigger_update_last_message
  AFTER INSERT ON chat_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_session_last_message();

-- 7. Enable Row Level Security (RLS)
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE typing_status ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies (allow all for now - you can restrict later)
CREATE POLICY "Allow all operations on chat_sessions" ON chat_sessions FOR ALL USING (true);
CREATE POLICY "Allow all operations on chat_messages" ON chat_messages FOR ALL USING (true);
CREATE POLICY "Allow all operations on typing_status" ON typing_status FOR ALL USING (true);

-- Success message
SELECT 'Database setup complete! ✅' as status;

