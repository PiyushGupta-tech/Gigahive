/* Beyoung product data - used across homepage, cart and category pages */
/* Category-specific images: each product type shows matching images (tshirt→tshirt, jeans→jeans) */
var U = 'https://images.unsplash.com/photo-';
/* Only t-shirt, bottomwear, combo and new arrival – images match description */
var CAT_IMAGES = {
  't-shirts-men': ['1521572163471-6300b90df261', '1576566588028-4147f3842f27', '1562157875-3b4a0a087518', '1586790170083-2f9ceadc732d', '1596755094514-f87e34085b2c', '1618359057172-21c1e2c2c4b4', '1507003211169-0a1dd7228f2f', '1583743814966-8936f5b7be1a', '1503341504253-dff4815485f1', '1610554775931-384f84e000c8', '1515886657613-d68ec8f82b0f', '1521572163471-6300b90df261', '1576566588028-4147f3842f27', '1562157875-3b4a0a087518', '1586790170083-2f9ceadc732d', '1596755094514-f87e34085b2c'],
  'mens-pants': ['1624378439575-d8705ad7ae80', '1584370848010-d7fe6bc767ec', '1594938298602-4c29d2dd7c2e', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a', '1495105787522-15a467324771', '1552902865-b72c031ac5ea'],
  'mens-joggers': ['1552902865-b72c031ac5ea', '1624378439575-d8705ad7ae80', '1594938298602-4c29d2dd7c2e', '1584370848010-d7fe6bc767ec', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a', '1495105787522-15a467324771'],
  'men-pyjamas': ['1624378439575-d8705ad7ae80', '1584370848010-d7fe6bc767ec', '1594938298602-4c29d2dd7c2e', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a', '1495105787522-15a467324771'],
  'mens-cargo-pants': ['1624378439575-d8705ad7ae80', '1552902865-b72c031ac5ea', '1584370848010-d7fe6bc767ec', '1594938298602-4c29d2dd7c2e', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a'],
  'mens-jeans': ['1541099649105-f69ad21f3246', '1594938298602-4c29d2dd7c2e', '1473968512647-b3f9d4199b7a', '1506629082955-0b9f2b5060d2', '1495105787522-15a467324771', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1584370848010-d7fe6bc767ec', '1552902865-b72c031ac5ea'],
  'mens-boxers': ['1521572163471-6300b90df261', '1583743814966-8936f5b7be1a', '1576566588028-4147f3842f27', '1562157875-3b4a0a087518', '1503341504253-dff4815485f1', '1610554775931-384f84e000c8', '1594938298602-4c29d2dd7c2e'],
  'shorts': ['1591195856828-1e4d4c727678', '1515886657613-d68ec8f82b0f', '1495105787522-15a467324771', '1576566588028-4147f3842f27', '1541099649105-f69ad21f3246', '1584370848010-d7fe6bc767ec', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a'],
  'combos': ['1521572163471-6300b90df261', '1552902865-b72c031ac5ea', '1596755094514-f87e34085b2c', '1583743814966-8936f5b7be1a', '1624378439575-d8705ad7ae80', '1576566588028-4147f3842f27', '1503341504253-dff4815485f1', '1586790170083-2f9ceadc732d', '1562157875-3b4a0a087518'],
  'new': ['1596755094514-f87e34085b2c', '1541099649105-f69ad21f3246', '1521572163471-6300b90df261', '1624378439575-d8705ad7ae80', '1576566588028-4147f3842f27', '1583743814966-8936f5b7be1a', '1562157875-3b4a0a087518', '1552902865-b72c031ac5ea', '1586790170083-2f9ceadc732d'],
  'mens-bottomwear': ['1624378439575-d8705ad7ae80', '1552902865-b72c031ac5ea', '1584370848010-d7fe6bc767ec', '1594938298602-4c29d2dd7c2e', '1473968512647-b3f9d4199b7a', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1495105787522-15a467324771']
};
function productImg(id, category) {
  var pool = CAT_IMAGES[category] || CAT_IMAGES.combos;
  var idx = (typeof id === 'number' ? id : parseInt(id, 10) || 0) % (pool.length || 1);
  var idStr = pool[idx] || pool[0];
  return U + idStr + '?w=400&q=80';
}
window.BEYOUNG_PRODUCTS = [
  /* Combos */
  { id: 1, title: 'Men\'s Plain T-Shirt Combo Pack of 3', price: 899, mrp: 1499, category: 'combos' },
  { id: 2, title: 'Men\'s Cargo Joggers Combo - 2 Pcs', price: 1299, mrp: 1999, category: 'combos' },
  { id: 3, title: 'Men\'s Satin Shirt - Summer Collection', price: 599, mrp: 999, category: 'combos' },
  { id: 4, title: 'Plain T-Shirts Pack of 4 - Multi Color', price: 1099, mrp: 1799, category: 'combos' },
  { id: 13, title: 'Men\'s New Arrival Shirt', price: 749, mrp: 1199, category: 'new' },
  { id: 14, title: 'Men\'s Printed T-Shirt', price: 399, mrp: 599, category: 'new' },
  { id: 15, title: 'Men\'s Denim Jeans', price: 999, mrp: 1499, category: 'new' },
  { id: 16, title: 'Men\'s Summer T-Shirt', price: 349, mrp: 549, category: 'new' },
  /* Men's New Arrival (mens-new-arrival page) */
  { id: 29, title: 'Sand Beige Dual Pocket Corduroy Shirt Corduroy Shirt', price: 998, mrp: 2499, category: 'new' },
  { id: 30, title: 'Wine Dual Pocket Corduroy Shirt Corduroy Shirt', price: 998, mrp: 2499, category: 'new' },
  { id: 31, title: 'Dark Green Double Cuff Satin Shirt Satin Shirt', price: 799, mrp: 2299, category: 'new' },
  { id: 32, title: 'Mauve Stripe Crochet Half-Sleeves Shirt Casual Shirts', price: 1099, mrp: 1999, category: 'new' },
  { id: 33, title: 'Mauve Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'new' },
  { id: 34, title: 'White Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'new' },
  { id: 35, title: 'Hot Pink Belief Acid Wash Oversized Tshirt', price: 799, mrp: 1999, category: 'new' },
  { id: 36, title: 'Red Smiley Rubber Printed T-shirt', price: 699, mrp: 1399, category: 'new' },
  { id: 37, title: 'Dark Violet Cutwork Jacquard Cuban Shirt Casual Shirts', price: 998, mrp: 2199, category: 'new' },
  { id: 38, title: 'White Cutwork Jacquard Cuban Shirt Casual Shirts', price: 998, mrp: 2199, category: 'new' },
  { id: 39, title: 'Deep Slate Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'new' },
  { id: 40, title: 'Navy Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'new' },
  /* Combo Products (combo-products page) */
  { id: 18, title: 'Pick Any 2 - Double Pleated Cargo Joggers Combo Double Pleated Joggers', price: 1499, mrp: 1598, category: 'combos' },
  { id: 19, title: 'Pick Any 3 - Plain Cotton Shirts Combo Plain Shirts', price: 1998, mrp: 2397, category: 'combos' },
  { id: 20, title: 'Pick Any 3 - Cotton Cargo Joggers Combo 100% Cotton', price: 1998, mrp: 2397, category: 'combos' },
  { id: 21, title: 'Pick Any 4 - Plain T-shirt Combo 2.0 Regular Fit', price: 1099, mrp: 1516, category: 'combos' },
  { id: 22, title: 'Pick Any 3- Polo T-shirt Combo Plain Polo T-shirts', price: 1399, mrp: 1647, category: 'combos' },
  { id: 23, title: 'Pick Any 4- Plain Mens Boxers Combo Boxers', price: 998, mrp: 1396, category: 'combos' },
  { id: 24, title: 'Pick Any 2 - Regular-fit Pyjama Combo Regular-fit', price: 1199, mrp: 1298, category: 'combos' },
  { id: 25, title: 'Pick Any 2 - Heavy Gauge Joggers Combo Joggers', price: 1799, mrp: 1996, category: 'combos' },
  { id: 28, title: 'Pick Any 3 - Regular-fit Pyjama Combo Regular-fit', price: 1599, mrp: 1947, category: 'combos' },
  /* T-Shirts for Men */
  { id: 101, title: 'Sea Green Stitch In Time T-shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 102, title: 'Red Smiley Rubber Printed T-shirt', price: 699, mrp: 1399, category: 't-shirts-men' },
  { id: 103, title: 'Electric Blue Monday Graphic HD Print T-shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 104, title: 'Rare Breed Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 105, title: 'Yay Day Half Sleeve T-shirt for Men Regular Fit', price: 399, mrp: 549, category: 't-shirts-men' },
  { id: 106, title: 'Pick Any 4 - Plain T-shirt Combo 2.0 Regular Fit', price: 1099, mrp: 1516, category: 't-shirts-men' },
  { id: 107, title: 'Pick Any 3- Polo T-shirt Combo Plain Polo T-shirts', price: 1399, mrp: 1647, category: 't-shirts-men' },
  { id: 108, title: 'Sun Motivation Printed T-shirt Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 109, title: 'Typography Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 110, title: 'Lilac Zip Sleeved Oversized T-shirt for Men Relaxed Fit', price: 549, mrp: 1520, category: 't-shirts-men' },
  { id: 111, title: 'Hot Pink Belief Acid Wash Oversized Tshirt', price: 799, mrp: 1999, category: 't-shirts-men' },
  { id: 112, title: 'Brown Stitch In Time T-shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 113, title: 'Black Striped Knitted T-Shirt Oversized Fit', price: 749, mrp: 1399, category: 't-shirts-men' },
  { id: 114, title: 'Emojis Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 115, title: 'Gayatri Mantra Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 116, title: 'Own Every Moment Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 117, title: 'Chanchal Mann Ati Random Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 118, title: 'Off White Monday Graphic HD Print T-shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 119, title: 'Orange Stripe Textured Oversized T-Shirt Oversized Fit', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 120, title: 'Off White Smiley Rubber Printed T-shirt', price: 699, mrp: 1399, category: 't-shirts-men' },
  /* More Men's T-Shirts */
  { id: 121, title: 'Men Solid Round Neck T-Shirt', price: 349, mrp: 599, category: 't-shirts-men' },
  { id: 122, title: 'Men Printed Round Neck T-Shirt', price: 399, mrp: 799, category: 't-shirts-men' },
  { id: 123, title: 'Men Striped Casual T-Shirt', price: 449, mrp: 899, category: 't-shirts-men' },
  { id: 124, title: 'Men Colorblock Round Neck T-Shirt', price: 499, mrp: 999, category: 't-shirts-men' },
  { id: 125, title: 'Men Graphic Print Oversized T-Shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 126, title: 'Men Full Sleeve Solid T-Shirt', price: 449, mrp: 849, category: 't-shirts-men' },
  { id: 127, title: 'Men Typography Printed T-Shirt', price: 399, mrp: 799, category: 't-shirts-men' },
  { id: 128, title: 'Men Slim Fit Cotton T-Shirt', price: 379, mrp: 699, category: 't-shirts-men' },
  { id: 129, title: 'Men Regular Fit Plain T-Shirt', price: 329, mrp: 549, category: 't-shirts-men' },
  { id: 130, title: 'Men Half Sleeve Printed T-Shirt', price: 419, mrp: 849, category: 't-shirts-men' },
  { id: 131, title: 'Men Casual Wear T-Shirt', price: 459, mrp: 899, category: 't-shirts-men' },
  { id: 132, title: 'Men Round Neck Multicolor T-Shirt', price: 299, mrp: 499, category: 't-shirts-men' },
  { id: 133, title: 'Men Cotton Blend T-Shirt', price: 389, mrp: 699, category: 't-shirts-men' },
  { id: 134, title: 'Men Abstract Print T-Shirt', price: 549, mrp: 1099, category: 't-shirts-men' },
  { id: 135, title: 'Men Relaxed Fit T-Shirt', price: 429, mrp: 799, category: 't-shirts-men' },
  { id: 136, title: 'Men Drop Shoulder Oversized T-Shirt', price: 649, mrp: 1299, category: 't-shirts-men' },
  { id: 137, title: 'Men Quote Printed T-Shirt', price: 399, mrp: 749, category: 't-shirts-men' },
  { id: 138, title: 'Men V-Neck Solid T-Shirt', price: 359, mrp: 599, category: 't-shirts-men' },
  { id: 139, title: 'Men Henley Neck T-Shirt', price: 479, mrp: 899, category: 't-shirts-men' },
  { id: 140, title: 'Men Camouflage Print T-Shirt', price: 529, mrp: 999, category: 't-shirts-men' },
  { id: 141, title: 'Men Sporty T-Shirt', price: 449, mrp: 849, category: 't-shirts-men' },
  { id: 142, title: 'Men Washed Denim Look T-Shirt', price: 579, mrp: 1149, category: 't-shirts-men' },
  { id: 143, title: 'Men Melange Round Neck T-Shirt', price: 399, mrp: 699, category: 't-shirts-men' },
  { id: 144, title: 'Men Pack of 3 Basic T-Shirts', price: 799, mrp: 1497, category: 't-shirts-men' },
  { id: 145, title: 'Men Full Sleeve Graphic T-Shirt', price: 549, mrp: 1099, category: 't-shirts-men' },
  { id: 146, title: 'Men Polo Neck T-Shirt', price: 469, mrp: 899, category: 't-shirts-men' },
  { id: 147, title: 'Men Slim Fit Printed T-Shirt', price: 419, mrp: 799, category: 't-shirts-men' },
  { id: 148, title: 'Men Casual Solid T-Shirt', price: 339, mrp: 599, category: 't-shirts-men' },
  { id: 149, title: 'Men Streetwear Oversized T-Shirt', price: 699, mrp: 1399, category: 't-shirts-men' },
  { id: 150, title: 'Men Premium Cotton T-Shirt', price: 499, mrp: 999, category: 't-shirts-men' },
  { id: 151, title: 'Men Geometric Print T-Shirt', price: 459, mrp: 899, category: 't-shirts-men' },
  { id: 152, title: 'Men Neutral Tone T-Shirt', price: 369, mrp: 649, category: 't-shirts-men' },
  { id: 153, title: 'Men Summer Collection T-Shirt', price: 389, mrp: 699, category: 't-shirts-men' },
  /* Trousers / Mens Pants */
  { id: 501, title: 'Space Grey Slim-Fit Trousers Chino Pants', price: 998, mrp: 2999, category: 'mens-pants' },
  { id: 502, title: 'Wood Brown Slim-Fit Trousers Chino Pants', price: 998, mrp: 2999, category: 'mens-pants' },
  { id: 503, title: 'Beige Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'mens-pants' },
  { id: 504, title: 'Black Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'mens-pants' },
  { id: 505, title: 'Khaki Side-Adjuster Cotton Slub Trousers', price: 1199, mrp: 3299, category: 'mens-pants' },
  { id: 506, title: 'Grey Double Cloth Cotton Pants Trouser', price: 998, mrp: 1998, category: 'mens-pants' },
  { id: 507, title: 'Caramel Brown Slim-Fit Trousers Chino Pants', price: 998, mrp: 2999, category: 'mens-pants' },
  { id: 508, title: 'Seafoam Green Slim-Fit Trousers Chino Pants', price: 998, mrp: 2999, category: 'mens-pants' },
  { id: 509, title: 'Light Grey Cotton Slub Pleated Trousers Straight Fit', price: 899, mrp: 1999, category: 'mens-pants' },
  { id: 510, title: 'Navy Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'mens-pants' },
  { id: 511, title: 'Sage Green Double Cloth Cotton Pant Trouser', price: 998, mrp: 1998, category: 'mens-pants' },
  { id: 512, title: 'Light Grey Stretch Gurkha Pants Gurkha Pants', price: 1299, mrp: 3299, category: 'mens-pants' },
  /* Joggers */
  { id: 601, title: 'Pick Any 3 - Double Pleated Cargo Joggers Combo', price: 1998, mrp: 2397, category: 'mens-joggers' },
  { id: 602, title: 'Crocodile Green Heavy Gauge Cargo Joggers Cotton Twill Lycra', price: 998, mrp: 2199, category: 'mens-joggers' },
  { id: 603, title: 'Black Heavy Gauge Cargo Joggers Cotton Twill Lycra', price: 998, mrp: 2199, category: 'mens-joggers' },
  { id: 604, title: 'Pick Any 3 - Cotton Cargo Joggers Combo 100% Cotton', price: 1998, mrp: 2397, category: 'mens-joggers' },
  { id: 605, title: 'Pick Any 2 - Heavy Gauge Joggers Combo Joggers', price: 1799, mrp: 1996, category: 'mens-joggers' },
  { id: 606, title: 'Coffee Brown Double Pleated Cargos Cotton Twill', price: 799, mrp: 1598, category: 'mens-joggers' },
  { id: 608, title: 'Dark Space Blue Heavy Gauge Cargo Joggers', price: 998, mrp: 2199, category: 'mens-joggers' },
  { id: 609, title: 'Black Double Pleated Cargos Cotton Twill', price: 799, mrp: 1598, category: 'mens-joggers' },
  { id: 610, title: 'Metal Grey Cotton Cargo Joggers 100% Cotton', price: 799, mrp: 1598, category: 'mens-joggers' },
  { id: 611, title: 'Rust Brown Double Pleated Cargos Cotton Twill', price: 799, mrp: 1598, category: 'mens-joggers' },
  { id: 612, title: 'Pick Any 2 - Double Pleated Cargo Joggers Combo', price: 1499, mrp: 1598, category: 'mens-joggers' },
  /* Pyjamas */
  { id: 702, title: 'Pick Any 2 - Regular-fit Pyjama Combo Regular-fit', price: 1199, mrp: 1298, category: 'men-pyjamas' },
  { id: 703, title: 'Light Grey Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 704, title: 'Dark Grey Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 705, title: 'Chocolate Brown Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 706, title: 'True Blue Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 707, title: 'Black Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 708, title: 'Navy Blue Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 709, title: 'Navy Blue Regular-fit Pyjamas Regular-fit', price: 649, mrp: 1080, category: 'men-pyjamas' },
  { id: 710, title: 'Cedar Green Loose-fit Pyjama Pants Loose-fit', price: 899, mrp: 1999, category: 'men-pyjamas' },
  { id: 711, title: 'Light Grey Regular-fit Pyjamas Regular-fit', price: 649, mrp: 1000, category: 'men-pyjamas' },
  /* Cargo Pants */
  { id: 801, title: 'Sand Beige Striped Side Pocket Cargo Trousers Cargo Trousers', price: 1299, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 802, title: 'Beige Striped Side Pocket Cargo Trousers Cargo Trousers', price: 1299, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 803, title: 'Off White Signature Cargo Pants Cargo Pants', price: 1199, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 804, title: 'Pale Grey Solid Cargo Pants for Men Cargo Pants', price: 998, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 805, title: 'Light Blue Denim Cargo Pants For Men Cargo Pants', price: 1299, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 806, title: 'Dark Blue Denim Cargo Pants For Men Cargo Pants', price: 1299, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 807, title: 'Pale Olive Solid Cargo Pants for Men Cargo Pants', price: 998, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 808, title: 'Dark Space Blue Solid Cargo Pants for Men Cargo Pants', price: 998, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 809, title: 'Black Denim Cargo Pants For Men Cargo Pants', price: 1299, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 810, title: 'Mist Grey Signature Cargo Pants Cargo Pants', price: 1199, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 811, title: 'Crocodile Green Solid Cargo Pants for Men Cargo Pants', price: 998, mrp: 2999, category: 'mens-cargo-pants' },
  { id: 812, title: 'Black Signature Cargo Pants Cargo Pants', price: 1199, mrp: 2999, category: 'mens-cargo-pants' },
  /* Jeans */
  { id: 901, title: 'Sky Blue Regular Fit Jeans Regular Fit', price: 1099, mrp: 2499, category: 'mens-jeans' },
  { id: 902, title: 'Tinted Green Over Dyed Baggy Fit Jeans', price: 1199, mrp: 2499, category: 'mens-jeans' },
  { id: 903, title: 'Mid Blue Regular Fit Jeans Regular Fit', price: 1099, mrp: 2499, category: 'mens-jeans' },
  { id: 904, title: 'Grey Over Dyed Baggy Fit Jeans Baggy Fit', price: 998, mrp: 2499, category: 'mens-jeans' },
  { id: 905, title: 'Light Blue Regular Fit Jeans Regular Fit', price: 998, mrp: 2499, category: 'mens-jeans' },
  { id: 906, title: 'Indigo Blue Over Dyed Baggy Fit Jeans', price: 1199, mrp: 2499, category: 'mens-jeans' },
  { id: 907, title: 'Blue Green Tinted Regular Fit Jeans Regular Fit', price: 998, mrp: 2499, category: 'mens-jeans' },
  { id: 908, title: 'Mid Blue Ombre Bootcut Jeans Bootcut', price: 1199, mrp: 2999, category: 'mens-jeans' },
  { id: 909, title: 'Soft Blue Raw Regular Fit Jeans Regular Fit', price: 1399, mrp: 3499, category: 'mens-jeans' },
  { id: 910, title: 'Black Cut and Sew Baggy Fit Jeans Baggy Fit', price: 1299, mrp: 2899, category: 'mens-jeans' },
  { id: 911, title: 'Indigo Blue Regular Fit Jeans Regular Fit', price: 998, mrp: 2499, category: 'mens-jeans' },
  { id: 912, title: 'Black Regular Fit Mens Jeans Regular Fit', price: 998, mrp: 2499, category: 'mens-jeans' },
  /* Boxers */
  { id: 1001, title: 'Pick Any 4- Plain Mens Boxers Combo Boxers', price: 998, mrp: 1396, category: 'mens-boxers' },
  { id: 1003, title: 'Pick Any 2- Plain Mens Boxers Combo Boxers', price: 599, mrp: 698, category: 'mens-boxers' },
  { id: 1004, title: 'Plain Sage Green Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1005, title: 'Plain Navy Blue Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1006, title: 'Plain Army Green Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1007, title: 'Plain Black Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1008, title: 'Plain Burgundy Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1009, title: 'Plain Rust Orange Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  { id: 1010, title: 'Plain Dark Violet Mens Boxer Boxers', price: 349, mrp: 599, category: 'mens-boxers' },
  /* Shorts */
  { id: 1101, title: 'White Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'shorts' },
  { id: 1102, title: 'Mauve Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'shorts' },
  { id: 1103, title: 'Grey Carpenter Denim Jorts Jorts', price: 1199, mrp: 1998, category: 'shorts' },
  { id: 1104, title: 'Light Blue Carpenter Denim Jorts Jorts', price: 1199, mrp: 1998, category: 'shorts' },
  { id: 1105, title: 'Beige Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'shorts' },
  { id: 1106, title: 'Black Carpenter Denim Jorts', price: 1199, mrp: 1998, category: 'shorts' },
  { id: 1107, title: 'Black Rugged Hem Denim Jorts', price: 1199, mrp: 1998, category: 'shorts' },
  { id: 1108, title: 'Dark Blue Rugged Hem Denim Jorts', price: 1199, mrp: 1998, category: 'shorts' }
];
window.BEYOUNG_PRODUCTS.forEach(function(p) { p.img = productImg(p.id, p.category); });

function getProductsByCategory(cat) {
  return window.BEYOUNG_PRODUCTS.filter(function(p) { return p.category === cat; });
}

var BOTTOMWEAR_SLUGS = ['mens-pants', 'mens-joggers', 'men-pyjamas', 'mens-cargo-pants', 'mens-jeans', 'mens-boxers', 'shorts'];
function getProductsByCategorySlug(slug) {
  if (slug === 'mens-bottomwear') {
    return window.BEYOUNG_PRODUCTS.filter(function(p) { return BOTTOMWEAR_SLUGS.indexOf(p.category) !== -1; });
  }
  return window.BEYOUNG_PRODUCTS.filter(function(p) { return p.category === slug; });
}

function getProductById(id) {
  return window.BEYOUNG_PRODUCTS.find(function(p) { return String(p.id) === String(id); });
}

function getComboProducts() {
  return getProductsByCategory('combos');
}

function getNewArrivals() {
  return getProductsByCategory('new');
}

function getCategoryProducts() {
  return window.BEYOUNG_PRODUCTS.filter(function(p) {
    return ['combos', 'new', 't-shirts-men', 'mens-pants', 'mens-joggers', 'men-pyjamas', 'mens-cargo-pants', 'mens-jeans', 'mens-boxers', 'shorts'].indexOf(p.category) !== -1;
  });
}

window.getProductsByCategorySlug = getProductsByCategorySlug;
window.getProductById = getProductById;
