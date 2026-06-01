# FlipPro Services

A modern, professional website for digital services built with Next.js 14, React 18, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 Service showcase pages
- 💰 Pricing page with multiple plans
- 📧 Contact form
- 🔧 Easy to customize
- 📱 Mobile-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mayankgarg80-maker/flipproservices.git
cd flipproservices
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
flipproservices/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── Features.tsx      # Features section
│   ├── Pricing.tsx       # Pricing section
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
└── tailwind.config.js    # Tailwind config
```

## Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Customization

### Update Company Information

Edit the following files to customize your company details:

- `app/layout.tsx` - Update metadata
- `components/Navbar.tsx` - Update logo and navigation
- `components/Footer.tsx` - Update company contact info
- `components/Services.tsx` - Update service offerings
- `components/Pricing.tsx` - Update pricing plans

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: "#2563eb",
      secondary: "#1e40af",
      accent: "#f97316",
    },
  },
}
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Other Platforms

```bash
npm run build
npm run start
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting (recommended)

## License

MIT

## Support

For support, please contact: hello@flipproservices.com
