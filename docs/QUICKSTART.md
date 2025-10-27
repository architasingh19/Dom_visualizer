# 🚀 Quick Start Guide

## Get Started in 3 Minutes

### Prerequisites
- Node.js 18+ or 20+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)

---

## Installation & Setup

### 1️⃣ Clone or Download the Project
```bash
git clone <repository-url>
cd dom_visualizer
```

### 2️⃣ Install Dependencies
```bash
npm install
```

This will install:
- React 19.1.1
- React DOM 19.1.1
- React Flow 11.11.4
- Vite and development tools

### 3️⃣ Start Development Server
```bash
npm run dev
```

You should see:
```
VITE v7.1.12  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4️⃣ Open in Browser
Navigate to: **http://localhost:5173**

---

## 🎯 First Steps

### Try It Out Immediately

1. **Load Sample JSON**
   - Click the "Load Sample" button
   - Sample JSON will appear in the left panel

2. **Generate Tree**
   - Click "Generate Tree" button
   - Watch your JSON come to life as a beautiful tree! 🌳

3. **Search for a Node**
   - In the search bar, type: `$.user.address.city`
   - Click "Search" or press Enter
   - The matching node will highlight in pink! ✨

4. **Copy a Path**
   - Click any node in the tree
   - The JSON path is copied to your clipboard! 📋

5. **Toggle Dark Mode**
   - Click the Dark/Light toggle in the header
   - Experience the beautiful dark theme! 🌙

---

## 📝 Example JSON to Try

### Simple Example
```json
{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}
```

### With Arrays
```json
{
  "users": [
    { "name": "Alice", "role": "admin" },
    { "name": "Bob", "role": "user" }
  ]
}
```

### Complex Nested
```json
{
  "company": {
    "name": "TechCorp",
    "employees": [
      {
        "id": 1,
        "name": "Alice",
        "department": {
          "name": "Engineering",
          "location": "Building A"
        }
      }
    ]
  }
}
```

---

## 🔍 Search Examples

Try these search paths:

| Search Path | Description |
|------------|-------------|
| `$` | Root node |
| `$.name` | Top-level property |
| `$.user.address.city` | Nested property |
| `$.items[0]` | First array element |
| `$.users[1].name` | Array element property |

---

## 🎨 Features at a Glance

### ✅ What You Can Do

1. **Input JSON**
   - Paste your JSON in the left panel
   - Get instant validation
   - See helpful error messages

2. **Visualize**
   - See your data as a tree
   - Color-coded nodes (Objects, Arrays, Primitives)
   - Beautiful hierarchical layout

3. **Search**
   - Find any node by path
   - Highlight matches
   - Auto-center on results

4. **Interact**
   - Zoom in/out with buttons or mouse wheel
   - Pan by dragging
   - Hover to see details

5. **Customize**
   - Switch between light and dark themes
   - Clear and start fresh
   - Load sample data

6. **Copy**
   - Click nodes to copy their paths
   - Paste anywhere you need

---

## 🎮 Controls

### Mouse
- **Scroll Wheel**: Zoom in/out
- **Click + Drag**: Pan the canvas
- **Click Node**: Copy path to clipboard
- **Hover Node**: See path and value

### Buttons
- **🔍 Search**: Find nodes by path
- **➕ Zoom In**: Enlarge the tree
- **➖ Zoom Out**: Shrink the tree
- **⬜ Fit View**: Auto-fit tree to screen
- **Generate Tree**: Create visualization
- **Load Sample**: Load example JSON
- **Clear**: Reset everything

### Keyboard
- **Enter** (in search): Execute search
- **Tab**: Navigate between inputs

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📦 Production Build

### Build
```bash
npm run build
```

Creates optimized files in `dist/` folder:
- Minified JavaScript
- Optimized CSS
- Ready for deployment

### Preview
```bash
npm run preview
```

Test the production build locally before deploying.

---

## 🚢 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel --prod
```

### Netlify (Drag & Drop)
1. Run `npm run build`
2. Drag `dist` folder to netlify.com
3. Done! ✨

### GitHub Pages
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| [README.md](./README.md) | Project overview |
| [FEATURES.md](./FEATURES.md) | Complete feature list |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deployment guide |
| [TESTING_GUIDE.md](./TESTING_GUIDE.md) | Testing instructions |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Technical summary |

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Or use a different port:
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page
- Check browser console for errors
- Verify Node.js version (18+ required)
- Clear browser cache

---

## 💡 Tips

1. **Large JSON Files**: The app handles large JSON efficiently, but very large files may take a moment to layout

2. **Search Paths**: Start with `$` for root, then use `.property` for objects and `[index]` for arrays

3. **Theme**: Your theme preference can be saved by adding localStorage (future enhancement)

4. **Mobile**: Works great on mobile! Use touch gestures to pan and pinch to zoom

5. **Copy Path**: After clicking a node to copy, paste it into the search bar to quickly find it again

---

## 🎓 Learn More

### React Flow
- [React Flow Documentation](https://reactflow.dev/)
- [React Flow Examples](https://reactflow.dev/examples/)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)
- [Vite Config](https://vitejs.dev/config/)

### React
- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

---

## ✨ What's Next?

Now that you're set up:

1. ✅ Try the sample JSON
2. ✅ Paste your own JSON
3. ✅ Explore all features
4. ✅ Customize the theme
5. ✅ Deploy to production
6. ✅ Share with others!

---

## 🎉 You're Ready!

The JSON Tree Visualizer is now running at:
**http://localhost:5173**

Enjoy visualizing your JSON data! 🚀

---

## 📞 Need Help?

- Check the [README.md](./README.md) for detailed documentation
- Review [TESTING_GUIDE.md](./TESTING_GUIDE.md) for feature details
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for hosting options

---

**Happy Visualizing! 🌳✨**

