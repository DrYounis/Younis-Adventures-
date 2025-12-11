#!/bin/bash

# Deploy Script for Younis Adventures

echo "🚀 Starting Deployment Process..."

# 1. Add all changes
echo "📦 Adding changes..."
git add .

# 2. Commit with a timestamp message
echo "📝 Committing..."
git commit -m "Auto-deploy: $(date)"

# 3. Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

echo "✅ Done! Vercel should start building now."
