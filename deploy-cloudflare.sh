#!/bin/bash

# Set working directory to project root
cd "$(dirname "$0")"

# Step 1: Build or prepare static files (already done if pure HTML/CSS/JS)
echo "📦 Preparing static site..."

# Step 2: Optional - validate mobile readiness before deploy
echo "✅ Running mobile readiness check..."
node validate-mobile-readiness.js

# Step 3: Publish to Cloudflare Pages
echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy . --project-name=jgwalsh-net --branch=main

# Step 4: Confirm
echo "✅ Deployment complete. Visit: https://jgwalsh.net"