# Electric Orange Storefront (React)

A bold, high-contrast e-commerce frontend built with React, featuring:
- Product catalog grid and product detail pages
- Shopping cart sidebar with quantity controls
- Checkout page with Stripe Checkout scaffold
- Mock REST API integration (easily swappable for real backend)
- Electric Orange theme: black base with vibrant orange and green accents

## Quick start

1) Install dependencies
- npm install

2) Configure environment variables
- cp .env.example .env
- Set REACT_APP_STRIPE_PUBLISHABLE_KEY when integrating with real Stripe + backend

3) Run the app
- npm start
- Open http://localhost:3000

## Project structure

- src/
  - App.js, App.css — App shell, theme, routes, layout
  - index.js — React entry
  - context/CartContext.js — Cart state with reducer and persistence
  - data/products.js — Mock product data
  - services/api.js — API placeholders simulating REST calls
  - components/
    - ProductCard.jsx, CartSidebar.jsx, QuantitySelector.jsx, Loading.jsx
  - pages/
    - HomePage.jsx — Catalog grid
    - ProductDetailPage.jsx — Detail with Add to Cart
    - CheckoutPage.jsx — Summary + Stripe redirect
    - NotFoundPage.jsx

## Stripe & backend integration

- This project includes scaffolding for Stripe Checkout.
- For production:
  - Provide a backend endpoint to create a Checkout Session.
  - Set REACT_APP_API_BASE_URL to your backend base URL.
  - Return a sessionId and use stripe.redirectToCheckout({ sessionId }).
  - Configure REACT_APP_STRIPE_PUBLISHABLE_KEY in your .env.

Without these, the app will simulate a successful redirect for demo purposes.

## Theming

Theme tokens live in src/App.css. Key variables:
- --primary: #F97316 (orange)
- --secondary: #10B981 (green)
- --background: #000000
- --surface: #1F2937
- --text: #FFFFFF

Adjust these to tune the brand feeling while retaining strong contrast and rounded UI.

## License

MIT
