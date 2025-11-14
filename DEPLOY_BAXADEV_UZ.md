# 🚀 baxadev.uz Deployment Plan (VPS, Multi-Project Safe)

This guide shows exactly how to deploy the portfolio project to the domain `baxadev.uz` on your VPS **without breaking the other 2 projects**.

---

## 🗂 1. Current + Target Layout

```
/home/USERNAME/
├── project_1/            (existing - keep)
├── project_2/            (existing - keep)
└── baxadev-portfolio/    (NEW - this repo)
```

| Project        | Port | PM2 name  | Domain / URL             |
|----------------|------|-----------|---------------------------|
| project_1      | 3000 | my_test   | my-test.example.com       |
| project_2      | 3002 | other_app | other-domain.tld         |
| baxadev-uz     | 3010 | baxadev   | https://baxadev.uz        |

> ✅ **Rule:** each project stays in its own folder, runs on its own port, and has its own PM2 process + nginx config.

---

## 🌐 2. DNS Setup (baxadev.uz)

At your domain registrar create the following records (replace `SERVER_IP` with your VPS public IP):

| Type | Host | Value     | TTL |
|------|------|-----------|-----|
| A    | @    | SERVER_IP | 300 |
| A    | www  | SERVER_IP | 300 |

Wait until `ping baxadev.uz` resolves to the VPS IP before continuing.

---

## 🔑 3. Prepare VPS Directory & Code

```bash
# 1) SSH into VPS
ssh USERNAME@SERVER_IP

# 2) Create + enter new folder (don't touch old projects)
mkdir -p /home/USERNAME/baxadev-portfolio
cd /home/USERNAME/baxadev-portfolio

# 3) Clone repo (or pull latest)
git clone https://github.com/Bahriddin2005/myportfolio.git .
# or, if already cloned earlier:
# git pull origin main

# 4) Environment variables
cat <<'ENV' > .env.local
NEXT_PUBLIC_SUPABASE_URL=https://nkbootgmzamrlgflezdo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYm9vdGdtemFtcmxnZmxlemRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Mjg0MjEsImV4cCI6MjA3ODUwNDQyMX0.KYN8Efb8gLueWgC-dR6m3TjIZNhFfWKjtzidrxSUmwY
ENV

# 5) Install & build (Node 18/20 recommended)
npm install
npm run build
```

---

## 🔁 4. PM2 Process (port 3010)

```bash
# Install PM2 if needed
npm install -g pm2

# Stop previous instance (if redeploying)
pm2 stop baxadev 2>/dev/null || true
pm2 delete baxadev 2>/dev/null || true

# Start new process on port 3010
PORT=3010 pm2 start npm --name "baxadev" -- start

# Save so it restarts on boot
pm2 save
pm2 startup   # follow instructions once
```

Check status:
```bash
pm2 status
# Expect to see 'baxadev' online on port 3010
```

---

## 🧾 5. Nginx Config (baxadev.uz)

**File:** `/etc/nginx/sites-available/baxadev.uz`

```nginx
server {
    listen 80;
    server_name baxadev.uz www.baxadev.uz;

    location / {
        proxy_pass http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Optional: cache static assets
    location /_next/static {
        proxy_pass http://127.0.0.1:3010;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(jpg|jpeg|png|gif|ico|webp|svg)$ {
        proxy_pass http://127.0.0.1:3010;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Enable & test:
```bash
sudo ln -s /etc/nginx/sites-available/baxadev.uz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

> Existing projects keep their own configs (do **not** modify `/etc/nginx/sites-available/my_test` etc.).

---

## 🔐 6. HTTPS (Certbot)

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d baxadev.uz -d www.baxadev.uz
# Choose option 2 (redirect HTTP→HTTPS)

# Test auto-renewal
sudo certbot renew --dry-run
```

---

## ✅ 7. Verification Checklist

```bash
# 1. Process online?
pm2 status baxadev

# 2. App reachable on internal port?
curl http://127.0.0.1:3010

# 3. Nginx serving?
curl -I http://baxadev.uz
curl -I https://baxadev.uz

# 4. Browser test
https://baxadev.uz  (Desktop + Mobile)

# 5. Admin panel
https://baxadev.uz/administration
```

If something fails, check logs:
```bash
pm2 logs baxadev
sudo tail -f /var/log/nginx/error.log
```

---

## 🔄 8. Future Updates (Zero Downtime)

```bash
ssh USERNAME@SERVER_IP
cd /home/USERNAME/baxadev-portfolio
git pull origin main
npm install
npm run build
PORT=3010 pm2 restart baxadev
```

> Other projects stay untouched because you never leave their folders or ports.

---

## 🆘 Support / Notes

- Keep backups of existing projects before big changes (`tar -czf my_test_backup.tar.gz my_test/`).
- Never run `git` commands for this repo inside other project folders.
- If ports clash, choose another free port (e.g., 3011) and update the config accordingly.
- Combine with `DEPLOY_SCRIPT.sh` for automation if you prefer a single command.

**Everything above keeps your other two services safe while serving baxadev.uz via HTTPS.**
