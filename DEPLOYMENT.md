# Vercel Deployment Guide for Relytix Research

## Quick Deployment Options

### Option 1: Automatic Deployment (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect React and deploy

### Option 2: Drag & Drop Deployment
1. Run `build.bat` to build the project
2. Go to [vercel.com](https://vercel.com)
3. Drag the `build` folder to Vercel
4. Your site will be live instantly!

### Option 3: Vercel CLI
1. Run `deploy-vercel.bat`
2. Follow the prompts
3. Your site will be deployed

## Important Files Created:
- `vercel.json` - Vercel configuration
- `.env` - Environment variables
- `.gitignore` - Git ignore rules
- `build.bat` - Local build script
- `deploy-vercel.bat` - Deployment script

## Environment Variables Set:
- `CI=false` - Disables strict CI checks
- `GENERATE_SOURCEMAP=false` - Reduces build size
- `SKIP_PREFLIGHT_CHECK=true` - Skips dependency checks
- `DISABLE_ESLINT_PLUGIN=true` - Disables ESLint during build

## Project Features:
✅ Fully responsive design
✅ Mobile-first approach
✅ SEO optimized
✅ Fast loading
✅ Professional UI/UX
✅ WhatsApp integration
✅ Contact forms
✅ Service pages
✅ About section

## Contact Integration:
- Phone: +91 88007 08757
- Email: relytix@gmail.com
- WhatsApp: Floating button + direct links
- Address: A-144, Chhatarpur Enclave, Phase-II, New Delhi-74

Your website is now ready for deployment! 🚀
