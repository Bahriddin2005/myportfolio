#!/bin/bash

# 🚀 Portfolio VPS Deploy Script
# This script safely deploys portfolio without affecting my_test

echo "🚀 Portfolio Deploy Script - VPS"
echo "================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DEPLOY_DIR="/home/$USER/portfolio"
PORT=3001
APP_NAME="portfolio"
REPO_URL="https://github.com/Bahriddin2005/myportfolio.git"

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "   Deploy Directory: $DEPLOY_DIR"
echo "   Port: $PORT"
echo "   App Name: $APP_NAME"
echo "   Repository: $REPO_URL"
echo ""

# Step 1: Create directory if not exists
echo -e "${YELLOW}📁 Step 1: Creating directory...${NC}"
if [ ! -d "$DEPLOY_DIR" ]; then
    mkdir -p "$DEPLOY_DIR"
    echo -e "${GREEN}✅ Directory created: $DEPLOY_DIR${NC}"
else
    echo -e "${YELLOW}⚠️  Directory already exists: $DEPLOY_DIR${NC}"
fi
echo ""

# Step 2: Clone or pull repository
echo -e "${YELLOW}📥 Step 2: Getting latest code...${NC}"
cd "$DEPLOY_DIR" || exit

if [ ! -d ".git" ]; then
    echo "Cloning repository..."
    git clone "$REPO_URL" .
    echo -e "${GREEN}✅ Repository cloned${NC}"
else
    echo "Pulling latest changes..."
    git pull origin main
    echo -e "${GREEN}✅ Repository updated${NC}"
fi
echo ""

# Step 3: Install dependencies
echo -e "${YELLOW}📦 Step 3: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 4: Create .env.local if not exists
echo -e "${YELLOW}🔑 Step 4: Checking environment variables...${NC}"
if [ ! -f ".env.local" ]; then
    echo "Creating .env.local..."
    cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://nkbootgmzamrlgflezdo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYm9vdGdtemFtcmxnZmxlemRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Mjg0MjEsImV4cCI6MjA3ODUwNDQyMX0.KYN8Efb8gLueWgC-dR6m3TjIZNhFfWKjtzidrxSUmwY
EOF
    echo -e "${GREEN}✅ .env.local created${NC}"
else
    echo -e "${GREEN}✅ .env.local already exists${NC}"
fi
echo ""

# Step 5: Build project
echo -e "${YELLOW}🔨 Step 5: Building project...${NC}"
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed! Check errors above.${NC}"
    exit 1
fi
echo ""

# Step 6: PM2 management
echo -e "${YELLOW}🔄 Step 6: Managing PM2 process...${NC}"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed${NC}"
fi

# Stop existing process (if any)
pm2 stop "$APP_NAME" 2>/dev/null
pm2 delete "$APP_NAME" 2>/dev/null

# Start new process
PORT=$PORT pm2 start npm --name "$APP_NAME" -- start

# Save PM2 config
pm2 save

echo -e "${GREEN}✅ PM2 process started on port $PORT${NC}"
echo ""

# Step 7: Show status
echo -e "${YELLOW}📊 Step 7: Current status...${NC}"
pm2 status
echo ""

echo -e "${GREEN}🎉 DEPLOYMENT COMPLETE!${NC}"
echo ""
echo -e "${YELLOW}📌 Next Steps:${NC}"
echo "   1. Configure Nginx (see VPS_DEPLOY_GUIDE.md)"
echo "   2. Get SSL certificate (certbot)"
echo "   3. Point domain to server"
echo "   4. Test: http://YOUR_DOMAIN"
echo ""
echo -e "${YELLOW}🔗 Portfolio running on:${NC}"
echo "   http://localhost:$PORT"
echo "   http://YOUR_SERVER_IP:$PORT"
echo ""
echo -e "${GREEN}✅ my_test is NOT affected!${NC}"
echo ""

