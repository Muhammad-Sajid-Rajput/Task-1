/* ==========================================================
   SUPPLY Shared Cart & Global System
   ========================================================== */

// Helper to read cart from localStorage
function getCart() {
  try {
    const cartStr = localStorage.getItem('supply_cart');
    return cartStr ? JSON.parse(cartStr) : [];
  } catch (e) {
    console.error("Failed to parse cart data:", e);
    return [];
  }
}

// Helper to write cart to localStorage
function saveCart(cart) {
  localStorage.setItem('supply_cart', JSON.stringify(cart));
  updateNavBadge();
}

// Add item to cart
function addToCart(productId, qty = 1) {
  // Ensure product exists in products.js list (loaded globally)
  if (typeof products === 'undefined') {
    console.error("Products database is not loaded.");
    return;
  }
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) {
    console.error(`Product with ID ${productId} not found.`);
    return;
  }

  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: qty
    });
  }

  saveCart(cart);
  showToast(`Added ${qty}x ${product.name} to cart`);

  // Trigger page-specific re-renders if available
  triggerPageRender();
}

// Remove item from cart completely
function removeFromCart(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === parseInt(productId));
  cart = cart.filter(i => i.id !== parseInt(productId));
  saveCart(cart);
  
  if (item) {
    showToast(`Removed ${item.name} from cart`);
  }
  triggerPageRender();
}

// Update quantity of an item
function updateQty(productId, qty) {
  let cart = getCart();
  const itemIndex = cart.findIndex(i => i.id === parseInt(productId));
  
  if (itemIndex > -1) {
    if (qty <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = qty;
    }
    saveCart(cart);
  }
  triggerPageRender();
}

// Calculate cart totals
function getCartTotal() {
  const cart = getCart();
  let subtotal = 0;
  let count = 0;
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    count += item.quantity;
  });
  
  // Shipping: Free over $50, else $5.99. Shipping is $0 if cart is empty.
  const shipping = count > 0 ? (subtotal >= 50 ? 0 : 5.99) : 0;
  const total = subtotal + shipping;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
    count: count
  };
}

// Update navigation cart badge
function updateNavBadge() {
  const badge = document.getElementById('cart-badge-count');
  if (badge) {
    const { count } = getCartTotal();
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    } else {
      badge.classList.add('hidden');
      badge.classList.remove('flex');
    }
  }
}

// Helper to trigger rendering on specific pages
function triggerPageRender() {
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
  if (typeof renderCheckoutPage === 'function') {
    renderCheckoutPage();
  }
  if (typeof renderShopPage === 'function') {
    renderShopPage();
  }
}

// Toast notification helper
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-sm px-4';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast-message bg-slate-900 border border-violet-500/30 text-slate-100 px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.15)] text-sm font-semibold pointer-events-auto flex items-center justify-between gap-3';
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="text-lime-400 font-bold">✦</span>
      <span>${message}</span>
    </div>
    <button class="text-xs text-slate-400 hover:text-white" onclick="this.parentElement.remove()">✕</button>
  `;
  
  container.appendChild(toast);
  
  // Auto-dismiss toast
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// Global page load initialization
document.addEventListener('DOMContentLoaded', () => {
  updateNavBadge();
  
  // Mobile menu controls (if needed)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});