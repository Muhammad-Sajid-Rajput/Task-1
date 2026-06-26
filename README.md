# SUPPLY

A responsive, static e-commerce storefront built with HTML, CSS, and vanilla JavaScript. Features a full shopping flow from product browsing to checkout, with cart state persisted in `localStorage`.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home page — hero section, top-rated featured products, and benefits |
| `shop.html` | Product catalog — live search, category filtering, and sort |
| `product.html` | Product detail — image, rating, quantity selector, related products, breadcrumb |
| `cart.html` | Shopping cart — quantity controls, order summary, free shipping indicator |
| `checkout.html` | Checkout — contact, shipping, and payment form with validation |

## Features

- **Product catalog** with 42 products across 6 categories: Home, Apparel, Footwear, Accessories, and Sports
- **Live search** filtering by name, category, and description
- **Category filters** with `aria-pressed` accessibility state
- **Sort** by featured, price (low/high), and top rated
- **Half-star ratings** rendered accurately for fractional values (e.g. 4.3 → 4 full + 1 half)
- **Cart** stored in `localStorage` — persists across page loads
- **Quantity cap** of 99 per item; decrease button disabled at qty 1
- **Free shipping** on orders over $50, calculated in real time
- **Checkout form** with inline validation, auto-formatted card number and expiry, and order success state
- **Breadcrumb navigation** on product detail pages
- **Mobile-responsive** layout with accessible hamburger menu
- **Toast notifications** for cart add/remove actions

## Tech Stack

- HTML5
- CSS3 (`style.css`)
- Vanilla JavaScript (`script.js`)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Google Fonts](https://fonts.google.com/) — Sora + DM Serif Display

## Project Structure

```
├── index.html          # Home / landing page
├── shop.html           # Product catalog
├── product.html        # Product detail
├── cart.html           # Shopping cart
├── checkout.html       # Checkout flow
├── script.js           # Shared cart logic, star renderer, toast, nav badge
├── products.js         # Product data (42 items)
├── tailwind.config.js  # Shared Tailwind theme config (loads before CDN)
├── style.css           # Custom styles, animations, component classes
├── products/           # Product images
└── ratings/            # Rating star assets
```

## Running Locally

No build step required — it's a fully static site.

**Option 1 — open directly:**
```
Open index.html in any modern browser
```

**Option 2 — local dev server (recommended):**
```bash
npx serve .
```
Then open the URL shown in the terminal.

> The site uses CDN-hosted Tailwind and Google Fonts. An internet connection is needed for those assets unless replaced with local copies.

## Cart Behaviour

- Cart items are saved to `localStorage` under the key `supply_cart`
- The cart badge in the navbar (desktop and mobile) updates automatically on all pages
- Shipping is **free** on orders ≥ $50, otherwise **$5.99**
- Quantities are capped at **99** per item

## Checkout Validation

All fields are validated on blur and re-validated live as the user corrects errors:

| Field | Rule |
|-------|------|
| Full Name | Min 3 characters |
| Email | Valid email format |
| Phone | 7–18 digits, allows `+`, `-`, `()`, spaces |
| Address | Min 5 characters |
| City / State | Min 2 characters |
| ZIP | 4–10 alphanumeric characters |
| Country | Required selection |
| Card Number | Exactly 16 digits (auto-formatted as `XXXX XXXX XXXX XXXX`) |
| Expiry | MM/YY format, must not be expired |
| CVV | 3–4 digits |
| Name on Card | Min 3 characters |

## Product Categories

| Category | Items |
|----------|-------|
| Home | Kitchen appliances, bedding, bath, cleaning supplies |
| Apparel | Clothing — tops, bottoms, outerwear, socks |
| Footwear | Sneakers, flats, heels, skate shoes |
| Accessories | Sunglasses, earrings, hats |
| Sports | Sporting equipment |

## Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<fieldset>`, `<legend>`)
- `aria-label` on all icon-only buttons and cart badges
- `aria-pressed` on category filter buttons
- `aria-expanded` and `aria-controls` on mobile menu toggle
- `aria-current="page"` on active nav links
- `role="img"` with descriptive label on star rating blocks
- `role="alert"` on form error messages
- `role="status"` on empty states and order success
- `aria-live="polite"` on dynamic content regions
- Full keyboard navigation support
