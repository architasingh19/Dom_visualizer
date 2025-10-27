# Deployment Guide - JSON Tree Visualizer

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd dom_visualizer
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Method 1: Using Vercel CLI**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

**Method 2: Using Vercel Web Interface**

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

**Live URL:** Your app will be available at `https://your-project.vercel.app`

---

### Option 2: Netlify

**Method 1: Drag & Drop**

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy

**Method 2: Using Netlify CLI**

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Method 3: Continuous Deployment**

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

**Configuration File** (Optional - create `netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

1. **Install gh-pages package:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**

Add to the root of package.json:
```json
{
  "homepage": "https://yourusername.github.io/dom_visualizer",
}
```

Add to scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/dom_visualizer/'
})
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Configure GitHub:**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages / root

---

### Option 4: Render

1. Go to [render.com](https://render.com)
2. Click "New Static Site"
3. Connect your repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

---

### Option 5: Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click "Create a project"
3. Connect your Git repository
4. Configure:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

---

## 🔧 Environment Configuration

### For Different Environments

Create `.env` files if needed:

**.env.development:**
```
VITE_APP_NAME=JSON Tree Visualizer (Dev)
```

**.env.production:**
```
VITE_APP_NAME=JSON Tree Visualizer
```

Access in code:
```javascript
const appName = import.meta.env.VITE_APP_NAME;
```

---

## 📝 Pre-Deployment Checklist

- ✅ All features working locally
- ✅ No console errors
- ✅ Build completes successfully
- ✅ Preview build works correctly
- ✅ README.md is up to date
- ✅ .gitignore includes:
  - `node_modules/`
  - `dist/`
  - `.env.local`
  - `.DS_Store`

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build command fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deployment

**Issue:** Site shows blank page

**Solution:**
1. Check browser console for errors
2. Verify base path in `vite.config.js`
3. For subdirectory deployments, ensure base is set correctly

### Assets Not Loading

**Issue:** CSS/JS files return 404

**Solution:**
1. Check `vite.config.js` base configuration
2. Verify build output directory
3. Check deployment platform's publish directory setting

---

## 🔐 Security Considerations

- No sensitive data in repository
- Environment variables for API keys (if added)
- HTTPS enabled (automatic on most platforms)
- Regular dependency updates

---

## 📊 Performance Optimization

Already included:
- ✅ Vite optimization
- ✅ Code splitting
- ✅ Tree shaking
- ✅ CSS minification
- ✅ Asset optimization

---

## 🎯 Recommended: Vercel or Netlify

Both platforms offer:
- Free tier
- Automatic HTTPS
- Continuous deployment
- Easy setup
- Great performance
- CDN included

---

## 📱 Post-Deployment Testing

After deployment, verify:
1. ✅ Page loads correctly
2. ✅ All styles render properly
3. ✅ JSON input and validation works
4. ✅ Tree generation works
5. ✅ Search functionality works
6. ✅ Dark/light mode toggle works
7. ✅ All buttons and interactions work
8. ✅ Responsive design on mobile
9. ✅ Copy path feature works
10. ✅ No console errors

---

## 🌟 Custom Domain (Optional)

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records as instructed

---

## 📈 Analytics (Optional)

Add analytics if needed:

**Google Analytics:**
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

```javascript
// Add to main.jsx
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

---

## 🎉 You're Ready to Deploy!

Choose your preferred platform and follow the steps above. All platforms listed are free for this project size.

**Recommended for beginners:** Netlify (drag & drop method)
**Recommended for GitHub users:** Vercel or GitHub Pages
**Recommended for advanced users:** Any platform with CLI

---

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+ or 20+
4. Review the deployment platform's documentation
5. Check the FEATURES.md file for implementation details

---

**Happy Deploying! 🚀**

