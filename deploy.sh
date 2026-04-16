#!/bin/bash
# ============================================
# EA Financial System — Deploy to GitHub Pages
# ============================================
# Run this script once from Terminal:
#   cd ~/Library/CloudStorage/OneDrive-Personal/Side\ Hustles/FlowLanding/Client/Abu\ Company/EA-MiniApp
#   chmod +x deploy.sh && ./deploy.sh
# ============================================

echo ""
echo "🚀 EA Financial System — Deploy to GitHub"
echo "==========================================="
echo ""

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

# Check if git is initialized
if [ ! -d ".git" ]; then
  echo "📦 Initializing git repo..."
  git init
  git branch -m main
fi

# Set remote
REMOTE_URL="https://github.com/flowlandinginfo-cpu/East-Asia-App.git"
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

# Copy app to root for GitHub Pages
echo "📋 Preparing files..."
cp app/index.html index.html 2>/dev/null

# Stage and commit
git add -A
git commit -m "Deploy EA Financial System v2.0" 2>/dev/null || echo "ℹ️  No new changes to commit"

# Force push (first time)
echo ""
echo "⬆️  Pushing to GitHub..."
echo "   (macOS will ask for your GitHub credentials — use your password or a Personal Access Token)"
echo ""
git push -u origin main --force

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Push successful!"
  echo ""
  echo "🌐 Next step: Enable GitHub Pages"
  echo "   1. Go to: https://github.com/flowlandinginfo-cpu/East-Asia-App/settings/pages"
  echo "   2. Source: Deploy from a branch"
  echo "   3. Branch: main / root"
  echo "   4. Save"
  echo ""
  echo "   Your app URL will be:"
  echo "   👉 https://flowlandinginfo-cpu.github.io/East-Asia-App/"
  echo ""
else
  echo ""
  echo "❌ Push failed. Try these steps:"
  echo "   1. Create a Personal Access Token at: https://github.com/settings/tokens"
  echo "   2. Use the token as your password when prompted"
  echo ""
fi
