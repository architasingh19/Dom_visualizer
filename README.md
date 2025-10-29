# JSON Tree Visualizer

An interactive web application that transforms JSON data into an intuitive tree visualization. Built with React and React Flow.

## Quick Start

### Prerequisites

Make sure you have these installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
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
   
   Navigate to `http://localhost:5173` and you're ready to go! 

## Features

### Core Features

**JSON Input & Validation**
- Paste or type any JSON data
- Real-time validation with helpful error messages
- Load sample JSON with one click
- Clear button to start fresh

**Interactive Tree Visualization**
- Beautiful hierarchical tree layout
- Color-coded nodes by type:
  -  Purple for Objects
  -  Green for Arrays  
  -  Orange for Primitives (strings, numbers, booleans)
- Smooth animations and connections between nodes
- Hover over nodes to see full paths and values

**Smart Search**
- Search by JSON path (e.g., `$.user.name` or `$.items[0]`)
- Highlights matching nodes in pink
- Auto-pans to center the result
- Shows "Match found" or "No match found" feedback

**Interactive Controls**
- Zoom in/out with mouse wheel or buttons
- Pan by dragging the canvas
- Fit entire tree to view with one click
- Click any node to copy its path to clipboard

**Download Tree as Image**
- Export your tree visualization as a PNG image
- Click the download button in the top-right corner
- High-quality image with proper theme colors
- Perfect for documentation and sharing

**Dark/Light Mode**
- Beautiful toggle switch in the header
- Smooth theme transitions
- Optimized colors for both modes

**Copy JSON Paths**
- Click any node to copy its JSON path
- Instant clipboard access
- Visual confirmation message
