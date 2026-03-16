# BI PLÅT & TAK AB - Landing Page

Landing page for BI PLÅT & TAK AB - Sheet Metal Bending & Flashing Solutions.

## Structure

- `index.html` - Main page with all sections
- `styles.css` - Styling (dark industrial theme)
- `script.js` - Mobile menu, scroll effects

## Preview

Open `index.html` in a browser, or run a local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit http://localhost:8000

## Sections

1. **Hero** - Main headline and CTA
2. **About Us** - Specialization, materials, specs, facilities
3. **Production** - Capabilities and reports
4. **Pricing** - Fixed €0.60/m pricing
5. **Clients** - Microsoft, Amazon, expansion to Poland
6. **Contact** - Email, phone, contact form (Formspree)

## Setup before going live

1. **Phone number** – Set to +46 73 079 78 20 (hero Call button + contact section).
2. **Formspree** – Create a form at [formspree.io](https://formspree.io), get your form ID, and replace `YOUR_FORM_ID` in the form `action` attribute. Emails will go to the Gmail linked to your Formspree account.
