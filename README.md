# Beyoung Replica – Main Project Folder

This folder contains **all** HTML, CSS, and JavaScript for the website. Everything runs from here.

## Contents

### HTML (18 pages)
| File | Page |
|------|------|
| `index.html` | Homepage |
| `login.html` | Login / Signup |
| `cart.html` | Shopping cart |
| `checkout.html` | Checkout |
| `t-shirts-for-men.html` | T-Shirts for Men |
| `mens-shirts.html` | Shirts for Men |
| `polo-t-shirts.html` | Polo T-Shirts |
| `womens-clothing.html` | Women's Clothing |
| `mens-pants.html` | Trousers / Pants |
| `mens-joggers.html` | Joggers |
| `men-pyjamas.html` | Pyjamas |
| `mens-cargo-pants.html` | Cargo Pants |
| `mens-jeans.html` | Jeans |
| `mens-boxers.html` | Boxers |
| `shorts.html` | Shorts |
| `combo-products.html` | Combo Products |
| `mens-new-arrival.html` | New Arrivals |
| `men-winterwear.html` | Winterwear |

### CSS
- `css/styles.css` – All styles (layout, header, footer, product grid, hero, combos, banners, etc.)

### JavaScript
- `js/app.js` – Cart, auth, toast notifications
- `js/products.js` – Product data, image URLs, category helpers

### Docs
- `AUTO.md` – Project index and change log
- `FILES_MANIFEST.txt` – File list for deployment

---

## How to run

From this folder (main project folder):

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

Or open `index.html` directly in a browser (some features may need a local server).

---

## Folder structure

```
New Website/          ← main project folder
├── index.html
├── login.html
├── cart.html
├── checkout.html
├── t-shirts-for-men.html
├── mens-shirts.html
├── polo-t-shirts.html
├── womens-clothing.html
├── mens-pants.html
├── mens-joggers.html
├── men-pyjamas.html
├── mens-cargo-pants.html
├── mens-jeans.html
├── mens-boxers.html
├── shorts.html
├── combo-products.html
├── mens-new-arrival.html
├── men-winterwear.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── products.js
├── README.md
├── AUTO.md
└── FILES_MANIFEST.txt
```

All HTML, CSS, and JavaScript are in this main project folder. No files are stored outside it for the site to work.
