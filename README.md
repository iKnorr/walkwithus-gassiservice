# Walk with Us - GassiService

A modern website for a professional dog-walking service in Munich, Germany. Built with Next.js 15, React 19, and TypeScript.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript 5
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Lucide React icons, Embla Carousel
- **Maps:** Google Maps (@vis.gl/react-google-maps)
- **Forms:** Web3Forms integration
- **Deployment:** GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/iKnorr/walkwithus-gassiservice.git
cd walkwithus-gassiservice

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Add your Google Maps API key to .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── custom/             # Business components (navbar, contactForm, faq, serviceArea)
│   └── mainSection/        # Main page sections
├── data/                   # Constants and configuration
└── lib/                    # Utilities
```

## Configuration

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup instructions including:
- Legal page configuration (Impressum & Datenschutz)
- Web3Forms contact form setup
- Google Maps API configuration

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch.

## Documentation

- [CLAUDE.md](CLAUDE.md) - AI assistant guidelines for this project
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup and configuration guide

## License

Private project - All rights reserved.
