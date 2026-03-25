/* Gigahive - Cart & Auth (shared across pages) */
(function() {
  var CART_KEY = 'gigahive_cart';
  var USER_KEY = 'gigahive_user';

  function getCart() {
    try {
      var s = localStorage.getItem(CART_KEY);
      return s ? JSON.parse(s) : [];
    } catch (e) { return []; }
  }

  function saveCart(items) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (e) {}
    updateCartCount();
  }

  function addToCart(product, qty, size) {
    qty = qty || 1;
    size = size || 'M';
    var items = getCart();
    var existing = items.find(function(i) {
      return String(i.id) === String(product.id) && String(i.size || 'M') === String(size);
    });
    if (existing) {
      existing.qty = (existing.qty || 1) + qty;
    } else {
      items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        qty: qty,
        size: size
      });
    }
    saveCart(items);
    return items;
  }

  function removeFromCart(productId, size) {
    if (productId == null || productId === '') return getCart();
    var current = getCart();
    var items = current.filter(function(i) {
      if (String(i.id) !== String(productId)) return true;
      if (size != null && size !== '') return String(i.size || 'M') !== String(size);
      return false;
    });
    if (items.length === current.length) return current;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (e) {}
    updateCartCount();
    return items;
  }

  function setCartQuantity(productId, qty, size) {
    if (productId == null || productId === '') return getCart();
    if (qty < 1) return removeFromCart(productId, size);
    var items = getCart();
    var item = items.find(function(i) {
      if (String(i.id) !== String(productId)) return false;
      if (size != null && size !== '') return String(i.size || 'M') === String(size);
      return true;
    });
    if (item) {
      item.qty = qty;
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      } catch (e) {}
      updateCartCount();
    }
    return items;
  }

  function updateCartCount() {
    var items = getCart();
    var n = items.reduce(function(s, i) { return s + (i.qty || 1); }, 0);
    var el = document.getElementById('cart-count');
    if (el) el.textContent = n;
    var link = document.querySelector('.cart-btn');
    if (link && link.getAttribute('href') !== 'cart.html') link.setAttribute('href', 'cart.html');
  }

  function showToast(message) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = message;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2500);
  }

  function getUser() {
    try {
      var s = localStorage.getItem(USER_KEY);
      return s ? JSON.parse(s) : null;
    } catch (e) { return null; }
  }

  function setUser(user) {
    try {
      localStorage.setItem(USER_KEY, user ? JSON.stringify(user) : '');
    } catch (e) {}
  }

  function renderAuthInHeader() {
    var wrap = document.getElementById('header-auth');
    if (!wrap) return;
    var user = getUser();
    if (user) {
      wrap.innerHTML = '<span class="user-name">' + (user.name || user.email || 'Account') + '</span> <button type="button" class="btn-logout" id="btn-logout">Log Out</button>';
      var btn = document.getElementById('btn-logout');
      if (btn) btn.addEventListener('click', function() {
        setUser(null);
        window.location.reload();
      });
    } else {
      wrap.innerHTML = '<a href="login.html" class="btn-login">Log In / Signup</a>';
    }
  }

  function formatPrice(n) { return '₹' + (n || 0).toLocaleString('en-IN'); }
  function renderProductCard(p) {
    var mrp = p.mrp ? '<span class="mrp">' + formatPrice(p.mrp) + '</span>' : '';
    var discount = (p.mrp && p.mrp > p.price) ? Math.round((1 - p.price / p.mrp) * 100) : 0;
    var badge = discount > 0 ? '<span class="product-badge">' + discount + '% off</span>' : '';
    var wishlistIcon = '<svg class="icon-wishlist" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="heart-path" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    var wishlist = '<button type="button" class="product-wishlist" aria-label="Add to wishlist" data-product-id="' + p.id + '">' + wishlistIcon + '</button>';
    var rating = (p.rating != null) ? p.rating : (4 + (p.id % 3) * 0.2).toFixed(1);
    var reviews = (p.reviews != null) ? p.reviews : (1000 + (p.id % 9) * 500);
    var delivery = p.delivery || 'Free delivery';
    return '<div class="product-card">' +
      '<div class="img-wrap">' + badge + wishlist + '<img src="' + (p.img || '') + '" alt="' + (p.title || '') + '"></div>' +
      '<div class="info">' +
        '<div class="product-brand">Gigahive</div>' +
        '<div class="title">' + (p.title || '') + '</div>' +
        '<div class="product-rating">' + rating + ' ★ <span class="product-reviews">(' + (reviews >= 1000 ? (reviews/1000).toFixed(1) + 'k' : reviews) + ')</span></div>' +
        '<div class="price">' + formatPrice(p.price) + mrp + '</div>' +
        '<p class="product-delivery">' + delivery + '</p>' +
        '<p class="product-sizes-label">Size</p>' +
        '<div class="product-size-options" data-product-id="' + p.id + '">' +
          '<button type="button" class="size-option" data-size="S">S</button>' +
          '<button type="button" class="size-option selected" data-size="M">M</button>' +
          '<button type="button" class="size-option" data-size="L">L</button>' +
          '<button type="button" class="size-option" data-size="XL">XL</button>' +
        '</div>' +
        '<button type="button" class="btn-add-cart" data-product-id="' + p.id + '"><span class="icon-cart"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span> Add to Cart</button>' +
      '</div></div>';
  }

  window.GigahiveApp = {
    getCart: getCart,
    saveCart: saveCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    setCartQuantity: setCartQuantity,
    updateCartCount: updateCartCount,
    showToast: showToast,
    getUser: getUser,
    setUser: setUser,
    renderAuthInHeader: renderAuthInHeader,
    formatPrice: formatPrice,
    renderProductCard: renderProductCard
  };
  window.renderProductCard = renderProductCard;

  document.body.addEventListener('click', function(e) {
    var searchBtn = e.target.closest('.header-search-btn');
    if (searchBtn) {
      e.preventDefault();
      var wrap = searchBtn.closest('.header-search-wrap');
      var input = wrap ? wrap.querySelector('.header-search-input') : null;
      if (input) {
        input.focus();
        input.select();
      }
      return;
    }
    var w = e.target.closest('.product-wishlist');
    if (w) {
      e.preventDefault();
      w.classList.toggle('active');
      if (window.GigahiveApp && window.GigahiveApp.showToast) window.GigahiveApp.showToast(w.classList.contains('active') ? 'Added to wishlist' : 'Removed from wishlist');
      return;
    }
    var sizeBtn = e.target.closest('.size-option');
    if (sizeBtn) {
      e.preventDefault();
      var wrap = sizeBtn.closest('.product-size-options');
      if (wrap) {
        wrap.querySelectorAll('.size-option').forEach(function(b) { b.classList.remove('selected'); });
        sizeBtn.classList.add('selected');
      }
      return;
    }
    var addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      var card = addBtn.closest('.product-card');
      var pid = addBtn.getAttribute('data-product-id');
      var sizeOpt = card ? card.querySelector('.size-option.selected') : null;
      var size = sizeOpt ? sizeOpt.getAttribute('data-size') : 'M';
      var product = window.getProductById ? window.getProductById(pid) : null;
      if (product) {
        window.GigahiveApp.addToCart(product, 1, size);
        if (window.GigahiveApp.showToast) window.GigahiveApp.showToast('Product added to cart.');
      }
    }
  });

  /* Fallback for product images: if category image fails to load, show Picsum by product id */
  document.body.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.closest('.img-wrap')) {
      e.target.onerror = null;
      var card = e.target.closest('.product-card');
      var btn = card ? card.querySelector('[data-product-id]') : null;
      var pid = btn ? btn.getAttribute('data-product-id') : '';
      e.target.src = 'https://picsum.photos/seed/' + (pid || 'img') + '/400/400';
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateCartCount();
      renderAuthInHeader();
    });
  } else {
    updateCartCount();
    renderAuthInHeader();
  }
})();
