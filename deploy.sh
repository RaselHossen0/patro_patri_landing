#!/bin/bash

# Landing Page Deployment Script for Contabo Server
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Landing Page Deployment..."

# Configuration
SERVER_HOST="178.18.251.219"
SERVER_USER="root"
DEPLOY_DIR="~/patro-patri-landing"
APP_NAME="patro-patri-landing"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📦 Building Next.js application...${NC}"
npm run build

echo -e "${YELLOW}📁 Creating deployment archive...${NC}"
tar -czf landing.tar.gz \
  .next \
  public \
  package.json \
  package-lock.json \
  next.config.js \
  next.config.ts \
  tailwind.config.ts \
  postcss.config.mjs \
  tsconfig.json \
  ecosystem.config.js \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=.next/cache

echo -e "${YELLOW}📤 Uploading to server...${NC}"
scp landing.tar.gz $SERVER_USER@$SERVER_HOST:$DEPLOY_DIR/

echo -e "${YELLOW}🔧 Setting up on server...${NC}"
ssh $SERVER_USER@$SERVER_HOST "
  cd $DEPLOY_DIR
  
  # Backup current deployment
  if [ -d 'current' ]; then
    echo '📦 Creating backup...'
    mv current backup-\$(date +%Y%m%d-%H%M%S)
  fi
  
  # Extract new deployment
  echo '📂 Extracting new deployment...'
  tar -xzf landing.tar.gz
  mv .next current
  mv public current/public
  mv package.json current/
  mv package-lock.json current/
  mv next.config.js current/
  mv next.config.ts current/
  mv tailwind.config.ts current/
  mv postcss.config.mjs current/
  mv tsconfig.json current/
  mv ecosystem.config.js current/
  
  # Install production dependencies
  echo '📦 Installing dependencies...'
  cd current
  npm ci --production
  
  # Clean up
  cd ..
  rm landing.tar.gz
  
  echo '✅ Landing page deployment completed successfully'
"

echo -e "${YELLOW}🔄 Restarting PM2 process...${NC}"
ssh $SERVER_USER@$SERVER_HOST "
  # Stop existing process
  pm2 stop $APP_NAME || true
  pm2 delete $APP_NAME || true
  
  # Start new process
  cd $DEPLOY_DIR/current
  pm2 start ecosystem.config.js
  
  # Save PM2 configuration
  pm2 save
  
  # Show status
  pm2 status
"

echo -e "${GREEN}🎉 Landing page deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Landing page should be available at: https://patropatri.online${NC}"

# Clean up local files
rm -f landing.tar.gz

echo -e "${YELLOW}📊 Deployment Summary:${NC}"
echo "- Server: $SERVER_HOST"
echo "- User: $SERVER_USER"
echo "- App Name: $APP_NAME"
echo "- Deploy Directory: $DEPLOY_DIR"
echo "- Environment: Production"
