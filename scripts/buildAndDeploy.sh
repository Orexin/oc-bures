#!/bin/bash

# Change to the correct directory
echo "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
echo "🔥              BUILD & DEPLOY SCRIPT                   🔥"
echo "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"

echo "📁 Working directory is: " 
pwd
echo "⚙️ Configuring git"
git config pull.rebase false
echo "🔀 Changing to production branch"
checkout main
echo "⬇️ Pulling changes"
git pull
# For each site, instal dependencies and build

echo "🏁 Starting build process for WEBSITE 🏁"
echo "________________________________________"
# WEBSITE
cd ../website
echo "⬇️ Installing dependencies"
npm install
echo "👷 Building"
npm run build
echo "⛓️ Symlinking"
ln -s ~/files/oc-bures/website/dist  ~/files/symlink/web

echo "✅ Success! "

echo "🏁 Starting build process for CMS 🏁"
echo "____________________________________"

## CMS
cd ../admin-react
echo "⬇️ Installing dependencies"
npm install
echo "👷 Building"
npm run build
echo "⛓️ Symlinking"

ln -s ~/files/oc-bures/admin-react/build  ~/files/symlink/dashboard

echo "✅ Success!"

echo "✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨"
echo "✨                     COMPLETED                        ✨"
echo "✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨"