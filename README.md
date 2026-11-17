# Express

Responsive single-page website for the Express roadside towing service in Bishkek. Built with React 18, strict TypeScript, Vite, and a custom CSS design system (no UI framework).

## Run locally

```sh
npm install
npm run dev
```

Create a `.env` file from `.env.example` to enable Google Tag Manager. The ID is optional; analytics is not loaded unless `VITE_GTM_ID` contains a real container ID.

```sh
npm run build
npm run preview
npm run lint
```

## Project structure

- `src/components/` reusable navigation, contact, card, and gallery components
- `src/sections/` individual landing-page sections and their CSS Modules
- `src/i18n/ky.json` and `src/i18n/ru.json` localized text; language selection is reflected in `/ky` and `/ru`
- `src/config/site.ts` phone, WhatsApp, Telegram, service area, and business hours
- `src/styles/` CSS tokens, reset, typography, utilities, and global component styles
- `public/` favicon, social preview, robots.txt, and sitemap.xml

## Updating content

Edit both locale JSON files when adding or changing interface copy. Keep the same keys in each language. Change the contact details and service information in `src/config/site.ts`; the phone and WhatsApp actions throughout the site use that shared configuration.

The supplied service and gallery photos are stored locally under `src/assets/works/` and used directly in the hero, service, and gallery sections.
