# Setup Guide - Walk with us GassiService

## ✅ What's Been Done

All improvements have been implemented on the `feature/website-improvements` branch:

1. ✅ Legal pages (Impressum & Datenschutz)
2. ✅ Functional contact form with Web3Forms integration
3. ✅ FAQ section with accordion UI
4. ✅ FAQ added to navigation bar and footer
5. ✅ Smooth scrolling for anchor links
6. ✅ CTA buttons throughout the site
7. ✅ Code cleanup and constants extraction
8. ✅ "Coming Soon" removed from navigation (replaced with FAQ)

---

## 🔧 Setup Steps Required

### Step 1: Fill in Your Legal Information

You need to replace placeholders in these files with your actual business information:

#### File: `src/app/impressum/page.tsx`
Replace the following placeholders:
- `[Ihr Name]` - Your full name
- `[Ihre Straße und Hausnummer]` - Your street address
- `[PLZ]` - Your postal code (e.g., 80331)
- `[Ihre USt-IdNr.]` - Your VAT ID (if applicable, or remove this section)

#### File: `src/app/datenschutz/page.tsx`
Replace the same placeholders:
- `[Ihr Name]`
- `[Ihre Straße und Hausnummer]`
- `[PLZ]`

---

### Step 2: Setup Web3Forms (Free Contact Form Service)

Web3Forms is a free service that sends form submissions directly to your email. Here's how to set it up:

#### A. Get Your Free Access Key

1. Go to https://web3forms.com
2. Click "Get Started Free"
3. Enter your email address: `walk-with-us@web.de`
4. Check your email for the access key
5. Copy the access key (it looks like: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)

#### B. Add Your Access Key

1. Open the file: `src/data/constants.ts`
2. Find the line:
   ```typescript
   web3formsAccessKey: 'YOUR_ACCESS_KEY_HERE',
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```typescript
   web3formsAccessKey: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
   ```

#### C. Test the Form

1. Run the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email (`walk-with-us@web.de`) for the submission

---

## 🚀 Testing Locally

1. Make sure you're on the correct branch:
   ```bash
   git branch
   # Should show: * feature/website-improvements
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

5. Test the following:
   - [ ] Click navigation links (Über uns, Tarife, FAQ, Kontakt)
   - [ ] Test smooth scrolling
   - [ ] Open/close FAQ questions
   - [ ] Submit contact form (after adding Web3Forms key)
   - [ ] Test mobile menu
   - [ ] Visit `/impressum` and `/datenschutz` pages
   - [ ] Check footer links

---

## 📱 Navigation Structure (Updated)

### Desktop & Mobile Navigation:
- Über uns → #about
- Tarife → #tariffs
- **FAQ → #faq** (NEW!)
- Kontakt → #contact

### Footer Additional Links:
- Impressum → /impressum
- Datenschutz → /datenschutz

---

## 📝 Commit & Deploy

Once you've tested everything and filled in your information:

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add legal pages, FAQ, Web3Forms contact, and UX improvements"

# Push to remote
git push -u origin feature/website-improvements
```

Then you can either:
- **Merge directly to main** (if you're confident):
  ```bash
  git checkout main
  git merge feature/website-improvements
  git push
  ```

- **Or create a Pull Request** on GitHub for review

---

## 🎨 What Changed in Navigation

### Before:
- Über uns
- Kontakt
- Tarife
- Coming Soon ❌

### After:
- Über uns
- Tarife
- **FAQ** ✨ (NEW!)
- Kontakt

The "Coming Soon" section still exists on the page, but it's no longer in the main navigation. Users can scroll to it naturally or you can add it back later if needed.

---

## 📧 Contact Form Features

Your new contact form includes:
- Name field (required)
- Email field (required)
- Phone field (optional)
- Message field (required)
- Form validation
- Loading states
- Success/error messages
- Email notifications via Web3Forms

When someone submits the form, you'll receive an email at `walk-with-us@web.de` with:
- Subject: "Neue Kontaktanfrage von [Name]"
- All form field data

---

## 🆘 Troubleshooting

### Contact Form Not Working?
1. Check that you've added your Web3Forms access key in `src/data/constants.ts`
2. Verify your email address in the Web3Forms dashboard
3. Check browser console for errors (F12)
4. Test with a different email address

### Links Not Working?
- Make sure all sections have the correct IDs:
  - `#about` - About section ✅
  - `#tariffs` - Pricing section ✅
  - `#faq` - FAQ section ✅
  - `#contact` - Contact section ✅

### Smooth Scrolling Not Working?
- Clear your browser cache
- Check that `src/app/globals.css` has `scroll-behavior: smooth;`

---

## 📞 Need Help?

If you run into any issues:
1. Check the browser console (F12 → Console tab)
2. Verify all files are saved
3. Restart the development server
4. Check that you're on the correct branch: `feature/website-improvements`

---

## ✨ Summary of New Features

| Feature | Status | File |
|---------|--------|------|
| Impressum page | ⚠️ Needs your info | `src/app/impressum/page.tsx` |
| Datenschutz page | ⚠️ Needs your info | `src/app/datenschutz/page.tsx` |
| Contact form | ⚠️ Needs Web3Forms key | `src/components/custom/contactForm/ContactForm.tsx` |
| FAQ section | ✅ Ready | `src/components/custom/faq/FAQ.tsx` |
| FAQ in navigation | ✅ Ready | All navigation components |
| Smooth scrolling | ✅ Ready | `src/app/globals.css` |
| Constants file | ✅ Ready | `src/data/constants.ts` |

---

Good luck with your website! 🐾
