#!/bin/bash
# ============================================
# EA Financial System — Push to GitHub (with Token)
# ============================================
# Usage:
#   chmod +x push-with-token.sh
#   ./push-with-token.sh ghp_YourTokenHere
# ============================================

echo ""
echo "🚀 EA Financial System — Push to GitHub with Token"
echo "===================================================="
echo ""

TOKEN="$1"

if [ -z "$TOKEN" ]; then
  echo "❌ Error: ต้องใส่ token ด้วย"
  echo ""
  echo "วิธีใช้:"
  echo "  ./push-with-token.sh ghp_YourTokenHere"
  echo ""
  echo "ถ้ายังไม่มี token → ไปสร้างที่:"
  echo "  https://github.com/settings/tokens/new"
  echo ""
  exit 1
fi

if [[ ! "$TOKEN" =~ ^ghp_ ]]; then
  echo "⚠️  Warning: token ควรเริ่มต้นด้วย 'ghp_'"
  echo "   ของคุณเริ่มต้นด้วย: ${TOKEN:0:4}..."
  echo "   ถ้าแน่ใจว่าถูก กด Ctrl+C ยกเลิก แล้วรันใหม่ถ้าผิด"
  echo ""
  sleep 2
fi

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

USER="flowlandinginfo-cpu"
REPO="East-Asia-App"

# Set remote with token embedded (no more password prompts!)
REMOTE_URL="https://${USER}:${TOKEN}@github.com/${USER}/${REPO}.git"
echo "📡 Configuring remote with token..."
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

# Make sure index.html is up to date at root
echo "📋 Preparing files..."
cp app/index.html index.html 2>/dev/null

# Stage and commit any new changes
git add -A
git commit -m "Deploy EA Financial System v2.0" 2>/dev/null || echo "ℹ️  No new changes to commit"

# Push
echo ""
echo "⬆️  Pushing to GitHub..."
echo ""
git push -u origin main --force

if [ $? -eq 0 ]; then
  # Remove token from remote URL (security!)
  git remote set-url origin "https://github.com/${USER}/${REPO}.git"

  echo ""
  echo "✅✅✅ Push successful! ✅✅✅"
  echo ""
  echo "🔐 ลบ token ออกจาก git config แล้ว (เพื่อความปลอดภัย)"
  echo ""
  echo "🌐 ขั้นต่อไป: เปิด GitHub Pages"
  echo "   1. ไปที่: https://github.com/${USER}/${REPO}/settings/pages"
  echo "   2. Source: Deploy from a branch"
  echo "   3. Branch: main / (root)"
  echo "   4. กด Save"
  echo ""
  echo "   รอประมาณ 1-2 นาที แอพจะอยู่ที่:"
  echo "   👉 https://${USER}.github.io/${REPO}/"
  echo ""
else
  # Remove token from remote URL even on failure
  git remote set-url origin "https://github.com/${USER}/${REPO}.git"

  echo ""
  echo "❌ Push failed."
  echo ""
  echo "ตรวจสอบ:"
  echo "   1. Token ถูกต้องหรือไม่? (ควรเริ่มต้นด้วย ghp_ ยาวประมาณ 40 ตัว)"
  echo "   2. Token มี scope 'repo' หรือไม่?"
  echo "   3. Token ไม่หมดอายุ?"
  echo ""
  echo "สร้าง token ใหม่ที่: https://github.com/settings/tokens/new"
  echo ""
fi
