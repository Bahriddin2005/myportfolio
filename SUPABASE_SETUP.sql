-- =============================================
-- SUPABASE DATABASE SETUP
-- Copy and paste this into Supabase SQL Editor
-- =============================================

-- 1. Chat Sessions Table
CREATE TABLE IF NOT EXISTS chat_sessions (
  id TEXT PRIMARY KEY,
  last_message TEXT,
  last_message_time TIMESTAMPTZ DEFAULT NOW(),
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  unread BOOLEAN DEFAULT true,
  admin_replied BOOLEAN DEFAULT false,
  user_agent TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Chat Messages Table
CREATE TABLE IF NOT EXISTS chat_messages (
  id SERIAL PRIMARY KEY,
  session_id TEXT REFERENCES chat_sessions(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot', 'admin')),
  text TEXT NOT NULL,
  time TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  edited BOOLEAN DEFAULT false,
  edited_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- 4. Create policies to allow all operations (for now - you can restrict later)
CREATE POLICY "Allow all operations on chat_sessions" ON chat_sessions
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on chat_messages" ON chat_messages
  FOR ALL USING (true) WITH CHECK (true);

-- 5. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chat_sessions_timestamp ON chat_sessions(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages(timestamp);

-- 6. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. Create trigger for auto-updating updated_at
CREATE TRIGGER update_chat_sessions_updated_at BEFORE UPDATE ON chat_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SETUP COMPLETE! ✅
-- =============================================
-- Now close this file and I will update the code!

