# AUTO — Project index and change log

**Project:** Beyoung.in replica (New Website)  
**Last updated:** 2026-03-02

---

## 1. File structure

All files in this folder:

```
New Website/
├── AUTO.md                    ← this file (auto-generated index)
├── index.html                 ← Homepage
├── login.html                 ← Login / Signup
├── cart.html                  ← Shopping bag
├── checkout.html              ← Checkout
├── men-winterwear.html        ← Winterwear for Men
├── combo-products.html        ← Combo products listing
├── mens-new-arrival.html      ← New arrivals listing
├── t-shirts-for-men.html      ← T-Shirts for Men (Topwear)
├── mens-shirts.html           ← Shirts for Men (Topwear)
├── polo-t-shirts.html         ← Polo T-Shirts (Topwear)
├── womens-clothing.html       ← Women's Clothing (Topwear)
├── mens-pants.html            ← Trousers / Pants (Bottomwear)
├── mens-joggers.html          ← Joggers (Bottomwear)
├── men-pyjamas.html           ← Pyjamas (Bottomwear)
├── mens-cargo-pants.html      ← Cargo Pants (Bottomwear)
├── mens-jeans.html            ← Jeans (Bottomwear)
├── mens-boxers.html           ← Boxers (Bottomwear)
├── shorts.html                ← Shorts (Bottomwear)
├── css/
│   └── styles.css             ← Global styles
└── js/
    ├── app.js                 ← Cart, auth, toasts
    └── products.js            ← Product data + getProductsByCategorySlug, getProductById
```

**Total:** 21 files (18 HTML, 1 CSS, 2 JS, 1 AUTO).

---

## 2. Products by category

| Category slug       | Page file              | Product IDs      | Count |
|---------------------|------------------------|------------------|-------|
| combos              | combo-products.html    | 1–4, 17–28       | 16    |
| new                 | mens-new-arrival.html  | 13–16, 29–40     | 16    |
| topwear             | (homepage grid)        | 5, 7, 9, 10      | 4     |
| bottomwear          | (homepage grid)        | 6, 8, 12         | 3     |
| winterwear          | men-winterwear.html    | 11, 1201–1212    | 13    |
| t-shirts-men        | t-shirts-for-men.html  | 101–117          | 17    |
| mens-shirts         | mens-shirts.html       | 201–214          | 14    |
| polo-t-shirts       | polo-t-shirts.html     | 301–315          | 15    |
| womens-clothing     | womens-clothing.html   | 401–412          | 12    |
| mens-pants          | mens-pants.html        | 501–512          | 12    |
| mens-joggers        | mens-joggers.html      | 601–612          | 12    |
| men-pyjamas         | men-pyjamas.html       | 701–711          | 11    |
| mens-cargo-pants    | mens-cargo-pants.html  | 801–812          | 12    |
| mens-jeans          | mens-jeans.html        | 901–912          | 12    |
| mens-boxers         | mens-boxers.html       | 1001–1010        | 10    |
| shorts              | shorts.html            | 1101–1108        | 8     |

**Total products:** 175 (in `window.BEYOUNG_PRODUCTS` in `js/products.js`).

---

## 3. Navigation

- **Topwear** → dropdown: T-Shirts for Men, Shirts, Polo T-Shirts, Women's Clothing  
- **Bottomwear** → dropdown: Trousers, Korean Pants, Joggers, Pyjamas, Cargo Pants, Jeans, Boxers, Shorts  
- **Combos** → combo-products.html  
- **New Arrivals** → mens-new-arrival.html  
- **Winterwear** → men-winterwear.html  

All HTML pages use the same header with these links. Homepage footer includes “Shop by category” with links to all 14 product pages.

## 3.1. Official Beyoung.in URLs → local pages

| Beyoung.in URL | Local page |
|----------------|------------|
| /t-shirts-for-men | t-shirts-for-men.html |
| /mens-shirts | mens-shirts.html |
| /womens-clothing | womens-clothing.html |
| /polo-t-shirts | polo-t-shirts.html |
| /mens-pants | mens-pants.html |
| /mens-pants?filter=6-242 (Korean Pants) | mens-pants.html?filter=korean |
| /mens-joggers | mens-joggers.html |
| /men-pyjamas | men-pyjamas.html |
| /mens-cargo-pants | mens-cargo-pants.html |
| /mens-jeans | mens-jeans.html |
| /mens-boxers | mens-boxers.html |
| /shorts | shorts.html |
| /combo-products | combo-products.html |
| /mens-new-arrival | mens-new-arrival.html |
| /men-winterwear | men-winterwear.html |

---

## 4. Features and behaviour

- **Cart:** `localStorage` key `beyoung_cart`; add/remove/update quantity; count in header.
- **Auth:** `localStorage` key `beyoung_user`; login/signup on login.html; header shows Log In or user/Logout.
- **Product images:** Unsplash placeholders (no copied Beyoung assets).
- **Category pages:** Breadcrumb, sidebar filters (UI only), Sort (Recommended, Price low/high), grid from `getProductsByCategorySlug(slug)`.
- **Checkout:** Order summary; “Place Order” clears cart and redirects to index.

---

## 5. Changes after product and page additions

1. **Topwear:** Added t-shirts-men, mens-shirts, polo-t-shirts, womens-clothing pages and products (IDs 101–117, 201–214, 301–315, 401–412).
2. **Bottomwear:** Added mens-pants, mens-joggers, men-pyjamas, mens-cargo-pants, mens-jeans, mens-boxers, shorts pages and products (501–512, 601–612, 701–711, 801–812, 901–912, 1001–1010, 1101–1108).
3. **Combos:** Added combo-products.html and extra combo products (17–28); “View all combo products” on homepage.
4. **New Arrivals:** Added mens-new-arrival.html and new products (29–40); “View all new arrivals” on homepage.
5. **Winterwear:** Added men-winterwear.html and winterwear products (11, 1201–1212); all “Winterwear” nav links point to men-winterwear.html.
6. **Global:** `getProductsByCategorySlug`, `getProductById` exposed on `window` in products.js; all category pages use same layout and cart/toast behaviour.

---

## 6. How to run

From project root:

```bash
cd "New Website"
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

---

*This file (AUTO.md) is the single “auto” index for the New Website folder. Update it when adding new pages or product ranges.*
