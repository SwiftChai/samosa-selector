# Samosa Selector 🍟

A fun clicker game built with React and Vite. Click samosas to collect them, then spend your collection on multiplier upgrades to earn even faster!

## Features

- **Click to Earn**: Click the samosa image to increase your count by the current multiplier
- **Multiplier Upgrades**: Purchase upgrades that increase your earnings per click:
  - **Double Stuffed** (10 samosas) → 2x multiplier
  - **Party Pack** (100 samosas) → 5x multiplier
  - **Full Feast** (1000 samosas) → 10x multiplier
- **Dark Theme**: Clean black background with white text and hover effects
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Interactions**: Visual feedback when hovering over the samosa and clicking upgrades

## How to Play

1. **Click the samosa** to start collecting samosas
2. **Track your count** at the top of the screen
3. **Purchase upgrades** when you have enough samosas to increase your multiplier
4. **Watch your earnings grow** as you unlock higher multipliers

## Tech Stack

- **React** — UI framework
- **Vite** — Fast build tool and dev server
- **CSS3** — Styling with flexbox layout
- **Node.js** — Runtime and package management

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd samosa-selector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

Start the development server:
```bash
npm run dev
```

The app will open in your browser (typically `http://localhost:5173`).

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
samosa-selector/
├── src/
│   ├── App.jsx          # Main React component with game logic
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   ├── main.jsx         # React entry point
│   └── assets/
│       └── img/
│           └── samosa.png
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## Game Mechanics

- **Count**: Tracks your total samosas collected
- **Multiplier**: Determines how many samosas you earn per click (starts at 1)
- **Cost**: Each upgrade requires a minimum count to purchase
- **Deduction**: When you buy an upgrade, the cost is deducted from your count

## Future Enhancements

- Add more upgrade tiers
- Implement auto-clicker features
- Add a reset/prestige system
- Include sound effects and animations
- Track high scores

## License

MIT

---

**Happy clicking! 🌶️**
