# Agriculture AI Assistant

An intelligent agricultural advisory platform powered by AI that provides personalized farming recommendations, crop insights, and sustainable farming practices.

## Features

- 🤖 **AI-Powered Insights** - Advanced machine learning algorithms analyze land data for personalized crop recommendations
- 📈 **Yield Optimization** - Data-driven recommendations to maximize harvest while minimizing costs
- 📍 **Location-Based Analysis** - Region-specific farming strategies tailored to your climate and soil conditions
- 💾 **History Management** - Track all your consultations and starred recommendations
- 🎨 **Modern UI** - Clean, responsive interface built with React and Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support

## Project Structure

```
src/
├── main.tsx              # Application entry point
├── app/
│   ├── App.tsx          # Main application component
│   ├── routes.tsx       # Route definitions
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Base UI components (Input, Tabs, etc.)
│   │   ├── ai-response-card.tsx
│   │   ├── ask-ai-card.tsx
│   │   ├── history-panel.tsx
│   │   └── map-location-card.tsx
│   └── pages/           # Page components
│       ├── about.tsx    # About page
│       ├── history.tsx  # History/consultations page
│       └── ...
└── styles/
    ├── index.css
    ├── tailwind.css
    ├── theme.css
    └── fonts.css
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd agriculture-ai-assistant
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Configuration Files

- **vite.config.ts** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS configuration
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules and configuration

## Key Components

### UI Components
- **Input** - Customizable input field with styling
- **Tabs** - Tab navigation with support for multiple views
- **NavigationMenu** - Accessible navigation menu
- **Command** - Command palette/search component

### Feature Components
- **AIResponseCard** - Display AI recommendations
- **AskAICard** - Interface for asking questions
- **HistoryPanel** - View past consultations
- **MapLocationCard** - Display location-based information

### Pages
- **About** - Information about the platform, team, and features
- **History** - User consultation history and starred recommendations

## Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom theme colors** in `theme.css`
- **Custom fonts** in `fonts.css`
- **Dark mode support** via CSS variables

## Contributing

When contributing to this project:
1. Follow the existing code style
2. Use TypeScript for all new code
3. Ensure ESLint passes: `npm run lint`
4. Keep components focused and reusable
5. Add proper TypeScript types

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

[Add your license here]

## Contact & Support

[Add contact information or support channels here]