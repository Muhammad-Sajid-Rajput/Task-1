# SUPPLY

SUPPLY is a responsive, static e-commerce storefront built with HTML, CSS, and JavaScript. It includes a landing page, product catalog, product detail view, cart, and checkout flow, with cart state stored in `localStorage`.

## Features

- Home page with a branded hero section and navigation
- Product catalog with search, category filtering, and sorting
- Individual product detail pages
- Shopping cart with quantity updates and removal actions
- Checkout flow with form validation and success state
- Mobile-friendly navigation and layout
- Persisted cart data using browser `localStorage`

## Tech Stack

- HTML
- CSS
- JavaScript
- Tailwind CSS via CDN
- Google Fonts

## Project Structure

- `index.html` - home / landing page
- `shop.html` - product catalog
- `product.html` - product detail page
- `cart.html` - shopping cart page
- `checkout.html` - checkout page
- `script.js` - shared cart and UI behavior
- `products.js` - product data source
- `style.css` - custom styling
- `products/` - product images
- `ratings/` - rating assets

## How To Run

This is a static site, so no build step is required.

1. Open `index.html` directly in a browser, or
2. Serve the folder with a local static server if you prefer:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Notes

- Cart items persist between page loads in the same browser.
- If product data or images are updated, make sure the file paths in `products.js` stay in sync.
- The site uses CDN-hosted Tailwind and Google Fonts, so an internet connection is needed for those assets unless they are replaced locally.

