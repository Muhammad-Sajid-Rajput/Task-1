/* ==========================================================
   SUPPLY — Shared Cart & Global System
   ========================================================== */

// ── Constants ─────────────────────────────────────────────
const SHIPPING_COST = 5.99;
const FREE_SHIPPING_THRESHOLD = 50;
const MAX_QTY = 99;

// ── Star Renderer ─────────────────────────────────────────
// Supports half-stars. Uses deterministic gradient IDs based on
// a per-render counter so IDs are unique even across large grids.
let _starRenderCounter = 0;

function renderStarsHTML(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars += `<svg class="w-4 h-4 star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else if (rating >= i - 0.5) {
      // Half star — deterministic gradient ID
      const gradId = `star-hg-${++_starRenderCounter}`;
      stars += `<svg class="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
        <defs>
          <linearGradient id="${gradId}">
            <stop offset="50%" stop-color="var(--color-lime)"/>
            <stop offset="50%" stop-color="#334155"/>
          </linearGradient>
        </defs>
        <path fill="url(#${gradId})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>`;
    } else {
      // Empty star
      stars += `<svg class="w-4 h-4 star-icon empty" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    }
  }
  return stars;
}

// Build an accessible star rating wrapper
function renderStarsBlock(rating) {
  return `<div class="flex items-center gap-1" role="img" aria-label="Rating: ${rating.toFixed(1)} out of 5">
    ${renderStarsHTML(rating)}
    <span class="text-xs text-muted ml-1">(${rating.toFixed(1)})</span>
  </div>`;
}

// ── Cart Helpers ───────────────────────────────────────────
function getCart() {
  try {
    const cartStr = localStorage.getItem('supply_cart');
    return cartStr ? JSON.parse(cartStr) : [];
  } catch (e) {
    console.error('Failed to parse cart data:', e);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('supply_cart', JSON.stringify(cart));
  updateNavBadge();
}

function addToCart(productId, qty = 1) {
  if (typeof products === 'undefined') {
    console.error('Products database is not loaded.');
    return;
  }
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) {
    console.error(`Product with ID ${productId} not found.`);
    return;
  }

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity = Math.min(cart[existingIndex].quantity + qty, MAX_QTY);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: Math.min(qty, MAX_QTY)
    });
  }

  saveCart(cart);
  showToast(`Added ${qty}x ${product.name} to cart`);
  triggerPageRender();
}

function removeFromCart(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === parseInt(productId));
  cart = cart.filter(i => i.id !== parseInt(productId));
  saveCart(cart);
  if (item) showToast(`Removed ${item.name} from cart`);
  triggerPageRender();
}

function updateQty(productId, qty) {
  let cart = getCart();
  const idx = cart.findIndex(i => i.id === parseInt(productId));
  if (idx > -1) {
    if (qty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].quantity = Math.min(qty, MAX_QTY);
    }
    saveCart(cart);
  }
  triggerPageRender();
}

function getCartTotal() {
  const cart = getCart();
  let subtotal = 0;
  let count = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    count += item.quantity;
  });

  // Round before threshold check to avoid floating-point drift
  subtotal = parseFloat(subtotal.toFixed(2));
  const shipping = count > 0 ? (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST) : 0;
  const total = parseFloat((subtotal + shipping).toFixed(2));

  return { subtotal, shipping, total, count };
}

// ── Nav Badge ─────────────────────────────────────────────
function updateNavBadge() {
  const { count } = getCartTotal();

  // Desktop badge
  const badge = document.getElementById('cart-badge-count');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
    badge.classList.toggle('flex', count > 0);
  }

  // Mobile badge — present on all pages
  const mobileBadge = document.getElementById('cart-badge-count-mobile');
  if (mobileBadge) {
    mobileBadge.textContent = count;
    mobileBadge.classList.toggle('hidden', count === 0);
    mobileBadge.classList.toggle('flex', count > 0);
  }
}

// ── Page Render Trigger ───────────────────────────────────
// Only triggers renderers that depend on cart state.
// renderShopPage is intentionally excluded — it doesn't depend on cart.
function triggerPageRender() {
  if (typeof renderCartPage === 'function') renderCartPage();
  if (typeof renderCheckoutPage === 'function') renderCheckoutPage();
}

// ── Toast ─────────────────────────────────────────────────
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-sm px-4';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900 border border-violet-500/30 text-slate-100 px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.15)] text-sm font-semibold pointer-events-auto flex items-center justify-between gap-3 animate-slide-up';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="text-lime-400 font-bold" aria-hidden="true">✦</span>
      <span>${message}</span>
    </div>
    <button class="text-xs text-slate-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-violet-500 rounded" onclick="this.closest('[role=status]').remove()" aria-label="Dismiss notification">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ── Show / Hide helpers ───────────────────────────────────
// Avoids the hidden+flex class conflict by always managing both.
function showEl(el) {
  if (!el) return;
  el.classList.remove('hidden');
  el.classList.add('flex');
}

function hideEl(el) {
  if (!el) return;
  el.classList.add('hidden');
  el.classList.remove('flex');
}

// ── Global Init ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateNavBadge();

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }
});
