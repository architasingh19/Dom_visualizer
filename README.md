# JSON Tree Visualizer

A beautiful, interactive web application that transforms JSON data into an intuitive tree visualization. Built with React and React Flow, it helps developers and data analysts understand complex JSON structures at a glance.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ What is this?

Ever struggled to understand a complex JSON structure? This tool visualizes your JSON data as an interactive tree diagram, making it easy to explore nested objects, arrays, and values. Click on nodes to copy paths, search for specific elements, and toggle between light and dark themes.

Perfect for:
- 🔍 Exploring API responses
- 📊 Understanding data structures
- 🐛 Debugging JSON data
- 📚 Learning JSON hierarchies
- 🎓 Teaching data structures

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd dom_visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` and you're ready to go! 🎉

## 🎯 Features

### Core Features

**📝 JSON Input & Validation**
- Paste or type any JSON data
- Real-time validation with helpful error messages
- Load sample JSON with one click
- Clear button to start fresh

**🌳 Interactive Tree Visualization**
- Beautiful hierarchical tree layout
- Color-coded nodes by type:
  - 🟣 Purple for Objects
  - 🟢 Green for Arrays  
  - 🟠 Orange for Primitives (strings, numbers, booleans)
- Smooth animations and connections between nodes
- Hover over nodes to see full paths and values

**🔍 Smart Search**
- Search by JSON path (e.g., `$.user.name` or `$.items[0]`)
- Highlights matching nodes in pink
- Auto-pans to center the result
- Shows "Match found" or "No match found" feedback

**🎮 Interactive Controls**
- Zoom in/out with mouse wheel or buttons
- Pan by dragging the canvas
- Fit entire tree to view with one click
- Click any node to copy its path to clipboard

### Bonus Features

**🌓 Dark/Light Mode**
- Beautiful toggle switch in the header
- Smooth theme transitions
- Optimized colors for both modes

**📋 Copy JSON Paths**
- Click any node to copy its JSON path
- Instant clipboard access
- Visual confirmation message

**✨ Beautiful UI/UX**
- Modern, clean design
- Responsive layout (works on mobile, tablet, desktop)
- Color legend for easy reference
- Helpful empty state with instructions

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.1** - Modern UI library with hooks
- **React Flow 11.11.4** - Powerful node-based visualization library

### Build Tools
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **ESLint 9.36.0** - Code quality and consistency

### Styling
- **CSS3** with custom properties for theming
- **Modular CSS** - Component-scoped styles
- **Responsive Design** - Mobile-first approach

### Architecture
- **Custom Hooks** - Reusable stateful logic
- **Component Composition** - Modular, maintainable components
- **Utility Functions** - Pure functions for algorithms
- **Modern JavaScript** - ES6+ features

## 📂 Project Structure

```
dom_visualizer/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header/         # App header with theme toggle
│   │   ├── JsonInput/      # JSON input panel
│   │   ├── SearchBar/      # Search functionality
│   │   ├── TreeVisualization/  # Tree display container
│   │   ├── TreeNode/       # Individual tree nodes
│   │   ├── Legend/         # Color legend
│   │   └── EmptyState/     # Empty state UI
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.js     # Theme management
│   │   └── useJsonTree.js  # Tree state logic
│   │
│   ├── utils/              # Helper functions
│   │   └── treeUtils.js    # Tree generation & layout
│   │
│   ├── constants/          # App constants
│   │   └── sampleData.js   # Sample JSON
│   │
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
│
├── public/                # Static assets
├── docs/                  # Additional documentation
├── package.json           # Dependencies
└── README.md             # This file
```

## 💡 How to Use

### 1. Input JSON Data

Paste your JSON in the left panel or click **"Load Sample"** to try the example:

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "address": {
      "city": "New York",
      "country": "USA"
    }
  }
}
```

### 2. Generate Tree

Click the **"Generate Tree"** button to visualize your JSON structure.

### 3. Explore the Tree

- **Zoom**: Use mouse wheel or the zoom buttons
- **Pan**: Click and drag the canvas
- **Hover**: See full paths and values
- **Click**: Copy any node's path to clipboard

### 4. Search

Enter a JSON path in the search bar:
- `$` - Root element
- `$.user` - Direct property
- `$.user.address.city` - Nested property
- `$.items[0]` - Array element
- `$.users[1].name` - Array element property

### 5. Toggle Theme

Switch between light and dark modes using the toggle in the top-right corner.

## 🔧 Development

### Available Scripts

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

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder:
- Minified JavaScript (~344 KB, 110 KB gzipped)
- Minified CSS (~15 KB, 3 KB gzipped)
- Ready to deploy anywhere!

## 🌐 Deployment

The app can be deployed to any static hosting service:

### Quick Deploy Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com
```

**GitHub Pages, Render, Cloudflare Pages** - All supported!

See the `docs/DEPLOYMENT.md` file for detailed deployment instructions.

## 🎨 Customization

### Colors

Edit the CSS custom properties in `src/App.css`:

```css
:root {
  --accent: #3b82f6;      /* Primary color */
  --success: #10b981;     /* Success messages */
  --error: #ef4444;       /* Error messages */
}
```

### Sample JSON

Update `src/constants/sampleData.js` to change the default example.

### Node Colors

Modify `src/utils/treeUtils.js` to customize node colors by type.

## 🧪 Browser Support

Works on all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Responsive Design

The application is fully responsive and works beautifully on:
- 💻 Desktop (1024px+)
- 📱 Tablet (640px - 1024px)
- 📱 Mobile (<640px)

## 🤝 Contributing

This project was created as part of a technical assignment. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linter: `npm run lint`
5. Test thoroughly
6. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/) - The UI library
- [React Flow](https://reactflow.dev/) - Node visualization
- [Vite](https://vitejs.dev/) - Build tool

## 📧 Contact

Created for **APIWIZ Frontend Developer Role Assignment**

For questions or feedback, please open an issue in the repository.

---

**Made with ❤️ and React** | [View Demo](#) | [Report Bug](#) | [Request Feature](#)
