# Electric Orange E-commerce Frontend

This React app implements a production-ready e-commerce experience with the Electric Orange theme:
- Catalog, product details
- Shopping cart with context and local persistence
- Checkout flow with address collection and Stripe Checkout handoff
- API client wrappers with graceful fallback to mock data

Run:
- npm install
- Copy .env.example to .env and set:
  - REACT_APP_API_BASE_URL
  - REACT_APP_STRIPE_PUBLISHABLE_KEY
  - REACT_APP_SITE_URL
- npm start

Integration Notes:
- REST endpoints are implemented as placeholders under /api/... in src/api/client.js
  - Update to match your backend routes
- Stripe Checkout:
  - Backend should expose POST /api/checkout/session returning { url } or { redirectUrl }
  - The frontend will redirect the browser to that URL
  - Ensure success and cancel URLs are permitted in your Stripe Dashboard

Design Theme:
- Bold, high-contrast "Electric Orange" with black base and orange accents
- Styles in src/theme.css
