# Kane Creative Portfolio

A modern portfolio website built with Next.js, TypeScript, and Sass featuring a clean design and smooth animations.

## Features

- **Modern Design**: Clean, minimalist interface with professional aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Portfolio Gallery**: Tile-based gallery showcasing work with hover effects
- **Multiple Pages**: Home, About, Contact, and Store pages
- **Animations**: Smooth transitions and scroll-triggered animations (Framer Motion ready)
- **TypeScript**: Full type safety and better development experience
- **Sass**: Advanced styling with variables and mixins

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Sass/SCSS
- **Animations**: Framer Motion (placeholder components included)
- **UI**: Custom components with CSS modules

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Install Framer Motion for animations:
```bash
npm install framer-motion
# or
yarn add framer-motion
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Enabling Framer Motion

The project includes placeholder animation components. To enable full Framer Motion animations:

1. Replace the MotionWrapper component imports with actual framer-motion components:
```typescript
// Replace this:
import MotionWrapper from './MotionWrapper'

// With this:
import { motion } from 'framer-motion'

// And replace MotionWrapper components with motion.div
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── store/          # Store page
│   ├── globals.scss    # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── PortfolioGallery.tsx # Portfolio grid
│   └── MotionWrapper.tsx    # Animation wrapper
└── styles/            # Additional styles
```

## Customization

### Colors and Theme

Update the CSS custom properties in `globals.scss`:

```scss
:root {
  --primary-color: #2d3748;
  --secondary-color: #4a5568;
  --accent-color: #667eea;
  // ... more variables
}
```

### Portfolio Content

Update the portfolio items in `PortfolioGallery.tsx`:

```typescript
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Your Project",
    category: "Your Category",
    image: "your-image-url",
    description: "Your description"
  },
  // ... more items
]
```

### Store Products

Update the products array in `src/app/store/page.tsx` with your actual merchandise.

## Deployment

### GitHub Pages

This site is automatically deployed to GitHub Pages via GitHub Actions. Any push to the `main` branch triggers a new deployment.

Visit the live site at: https://pkane.github.io

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
