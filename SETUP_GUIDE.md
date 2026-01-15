# Setup Guide - Walk with Us GassiService

## Prerequisites

- Node.js 20+
- npm
- Google Maps API key (for service area map)
- Web3Forms access key (for contact form)

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

## Environment Setup

### Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Add the key to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

### Web3Forms Contact Form

1. Go to [web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email address
4. Copy the access key from your email
5. Add it to `src/data/constants.ts`:
   ```typescript
   web3formsAccessKey: 'your_access_key_here',
   ```

## Legal Pages Configuration

Replace placeholders in these files with your business information:

### `src/app/impressum/page.tsx`
- `[Ihr Name]` - Your full name
- `[Ihre Straße und Hausnummer]` - Street address
- `[PLZ]` - Postal code
- `[Ihre USt-IdNr.]` - VAT ID (if applicable)

### `src/app/datenschutz/page.tsx`
- `[Ihr Name]` - Your full name
- `[Ihre Straße und Hausnummer]` - Street address
- `[PLZ]` - Postal code

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack (localhost:3000)
npm run build    # Build for static export
npm run lint     # Run ESLint
npm start        # Start production server
```

## Testing Checklist

- [ ] Navigation links work (Über uns, Tarife, FAQ, Kontakt)
- [ ] Smooth scrolling functions correctly
- [ ] FAQ accordion opens/closes
- [ ] Contact form submits successfully
- [ ] Mobile menu works
- [ ] Legal pages load (/impressum, /datenschutz)
- [ ] Service area map displays correctly
- [ ] Footer links work

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with metadata
│   ├── impressum/         # Legal page
│   └── datenschutz/       # Privacy policy
├── components/
│   ├── ui/                # Reusable UI components (Radix + Tailwind)
│   ├── custom/            # Business components
│   │   ├── navbar/        # Navigation header
│   │   ├── contactForm/   # Contact form with Web3Forms
│   │   ├── faq/           # FAQ accordion
│   │   └── serviceArea/   # Google Maps integration
│   └── mainSection/       # Main page sections
├── data/                  # Constants and configuration
└── lib/                   # Utilities (cn function)
```

## Navigation Structure

### Main Navigation
- Über uns → #about
- Tarife → #tariffs
- FAQ → #faq
- Kontakt → #contact

### Footer Links
- Impressum → /impressum
- Datenschutz → /datenschutz

## Deployment

### GitHub Pages (Automatic)

The site deploys automatically via GitHub Actions when pushing to `main`:

1. Commit your changes
2. Push to `main` branch
3. GitHub Actions builds and deploys

**Note:** The Google Maps API key is stored in GitHub Secrets as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.

### Manual Deployment

```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## Troubleshooting

### Contact Form Not Working
1. Verify Web3Forms access key in `src/data/constants.ts`
2. Check email verification in Web3Forms dashboard
3. Check browser console for errors (F12)

### Map Not Displaying
1. Verify Google Maps API key in `.env.local`
2. Ensure Maps JavaScript API is enabled in Google Cloud Console
3. Check for API key restrictions

### Smooth Scrolling Not Working
1. Clear browser cache
2. Verify `scroll-behavior: smooth;` in `src/app/globals.css`

### Build Errors
1. Run `npm run lint` to check for issues
2. Ensure all environment variables are set
3. Check TypeScript errors with `npx tsc --noEmit`

## Feature Summary

| Feature | Configuration File |
|---------|-------------------|
| Site config & pricing | `src/data/constants.ts` |
| Navigation links | `src/data/constants.ts` |
| Hero banner items | `src/data/bannerItems.tsx` |
| Legal pages | `src/app/impressum/`, `src/app/datenschutz/` |
| Contact form | `src/components/custom/contactForm/` |
| Service area map | `src/components/custom/serviceArea/` |
| FAQ content | `src/components/custom/faq/` |

## Documentation

- [README.md](README.md) - Project overview and quick start
- [CLAUDE.md](CLAUDE.md) - AI assistant guidelines
