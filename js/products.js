/* Gigahive product data - used across homepage, cart and category pages */
/* Category-specific images: each product type shows matching images (tshirt→tshirt, jeans→jeans) */
var U = 'https://images.unsplash.com/photo-';
/* Only t-shirt, bottomwear, combo and new arrival – images match description */
var CAT_IMAGES = {
  't-shirts-men': ['1521572163471-6300b90df261', '1576566588028-4147f3842f27', '1562157875-3b4a0a087518', '1586790170083-2f9ceadc732d', '1596755094514-f87e34085b2c', '1618359057172-21c1e2c2c4b4', '1507003211169-0a1dd7228f2f', '1583743814966-8936f5b7be1a', '1503341504253-dff4815485f1', '1610554775931-384f84e000c8', '1515886657613-d68ec8f82b0f', '1521572163471-6300b90df261', '1576566588028-4147f3842f27', '1562157875-3b4a0a087518', '1586790170083-2f9ceadc732d', '1596755094514-f87e34085b2c'],
  'mens-pants': ['1624378439575-d8705ad7ae80', '1584370848010-d7fe6bc767ec', '1594938298602-4c29d2dd7c2e', '1506629082955-0b9f2b5060d2', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1473968512647-b3f9d4199b7a', '1495105787522-15a467324771', '1552902865-b72c031ac5ea'],
  'mens-jeans': ['1541099649105-f69ad21f3246', '1594938298602-4c29d2dd7c2e', '1473968512647-b3f9d4199b7a', '1506629082955-0b9f2b5060d2', '1495105787522-15a467324771', '1516973762510-8e6271ba40a5', '1552374196-c4e0842cfc97', '1584370848010-d7fe6bc767ec', '1552902865-b72c031ac5ea'],
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
window.GIGAHIVE_PRODUCTS = [
  /* Combos */
  { id: 3, title: 'Men\'s Satin Shirt - Summer Collection', price: 599, mrp: 999, category: 'combos' },
  { id: 4, title: 'Plain T-Shirts Pack of 4 - Multi Color', price: 1099, mrp: 1799, category: 'combos' },
  /* Men's New Arrival (mens-new-arrival page) */
  { id: 31, title: 'Dark Green Double Cuff Satin Shirt Satin Shirt', price: 799, mrp: 2299, category: 'new' },
  { id: 32, title: 'Mauve Stripe Crochet Half-Sleeves Shirt Casual Shirts', price: 1099, mrp: 1999, category: 'new' },
  { id: 34, title: 'White Overdyed Jorts Jorts', price: 1299, mrp: 2599, category: 'new' },
  { id: 35, title: 'Hot Pink Belief Acid Wash Oversized Tshirt', price: 799, mrp: 1999, category: 'new' },
  { id: 41, title: 'Lounge Dreams Dark Green Milano Satin Relaxed Fit Shirt', price: 999, category: 'new' },
  /* Combo Products (combo-products page) */
  { id: 20, title: 'Pick Any 3 - Cotton Cargo Joggers Combo 100% Cotton', price: 1998, mrp: 2397, category: 'combos' },
  { id: 23, title: 'Pick Any 4- Plain Mens Boxers Combo Boxers', price: 998, mrp: 1396, category: 'combos' },
  { id: 28, title: 'Pick Any 3 - Regular-fit Pyjama Combo Regular-fit', price: 1599, mrp: 1947, category: 'combos' },
  /* T-Shirts for Men */
  { id: 103, title: 'Electric Blue Monday Graphic HD Print T-shirt', price: 599, mrp: 1199, category: 't-shirts-men' },
  { id: 104, title: 'Rare Breed Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 108, title: 'Sun Motivation Printed T-shirt Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 110, title: 'Lilac Zip Sleeved Oversized T-shirt for Men Relaxed Fit', price: 549, mrp: 1520, category: 't-shirts-men' },
  { id: 111, title: 'Hot Pink Belief Acid Wash Oversized Tshirt', price: 799, mrp: 1999, category: 't-shirts-men' },
  { id: 113, title: 'Black Striped Knitted T-Shirt Oversized Fit', price: 749, mrp: 1399, category: 't-shirts-men' },
  { id: 115, title: 'Gayatri Mantra Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  { id: 116, title: 'Own Every Moment Printed T-shirt for Men Regular Fit', price: 399, mrp: 998, category: 't-shirts-men' },
  /* More Men's T-Shirts */
  { id: 135, title: 'Men Relaxed Fit T-Shirt', price: 429, mrp: 799, category: 't-shirts-men' },
  { id: 136, title: 'Men Drop Shoulder Oversized T-Shirt', price: 649, mrp: 1299, category: 't-shirts-men' },
  /* Polo T-Shirts */
  { id: 301, title: 'Red Polo T-shirt for Men', price: 899, category: 'polo-t-shirts' },
  { id: 302, title: 'Blue Polo T-shirt for Men', price: 799, category: 'polo-t-shirts' },
  { id: 303, title: 'Black Polo T-shirt for Men', price: 599, category: 'polo-t-shirts' },
  { id: 304, title: 'Men Khaki Polo T-shirt for Men', price: 1099, category: 'polo-t-shirts' },
  { id: 305, title: 'Red Half Sleeves Polo T-shirt', price: 609, category: 'polo-t-shirts' },
  { id: 306, title: 'Classic Polo T-shirt for Men', price: 700, category: 'polo-t-shirts' },
  /* Women's T-Shirts */
  { id: 401, title: 'Round Neck Printed T Shirts for Women', price: 899, category: 'womens-clothing' },
  { id: 402, title: 'Loose T-shirt for Women', price: 599, category: 'womens-clothing' },
  { id: 403, title: 'Blue T-shirt for Women', price: 899, category: 'womens-clothing' },
  { id: 404, title: 'Black Stripe T-shirt for Women', price: 699, category: 'womens-clothing' },
  { id: 405, title: 'Purple T-shirt for Women', price: 899, category: 'womens-clothing' },
  { id: 406, title: 'Loose Fit T-shirt for Women', price: 699, category: 'womens-clothing' },
  /* Shirts for Men */
  { id: 201, title: 'Olive Checked Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts', price: 750, category: 'mens-shirts' },
  { id: 202, title: 'Beige Solid Men\'s Shirt (Slim Fit)', price: 899, mrp: 1599, category: 'mens-shirts', color: 'Beige', delivery: 'Free delivery' },
  { id: 203, title: 'Men Solid Formal Dark Blue Shirt', price: 1599, category: 'mens-shirts' },
  { id: 204, title: 'Men\'s Brown Pinstripe Short-Sleeve Shirt - Cotton Folk', price: 999, category: 'mens-shirts' },
  { id: 205, title: 'Pink Color Shirt for Men', price: 999, category: 'mens-shirts' },
  { id: 206, title: 'Beige Color Shirt for Men', price: 799, category: 'mens-shirts' },
  { id: 207, title: 'Stripe Shirt for Men', price: 1099, category: 'mens-shirts' },
  { id: 208, title: 'Check Shirt for Men', price: 666, category: 'mens-shirts' },
  { id: 209, title: 'Black Shirt for Men', price: 699, category: 'mens-shirts' },
  /* Trousers / Mens Pants */
  { id: 503, title: 'Beige Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'mens-pants' },
  { id: 504, title: 'Black Solid Korean Pants Korean Pants', price: 998, mrp: 1999, category: 'mens-pants' },
  { id: 505, title: 'Khaki Side-Adjuster Cotton Slub Trousers', price: 1199, mrp: 3299, category: 'mens-pants' },
  { id: 512, title: 'Light Grey Stretch Gurkha Pants Gurkha Pants', price: 1299, mrp: 3299, category: 'mens-pants' },
  { id: 513, title: 'Beige Color Trouser', price: 699, category: 'mens-pants' },
  { id: 514, title: 'Men\'s Medium Grey Loose Baggy Fit Solid Korean Pants Stretchable', price: 899, category: 'mens-pants' },
  /* Jeans */
  { id: 915, title: 'Twilight Fade Blue Denim Cargo', price: 899, category: 'mens-jeans' },
  { id: 916, title: 'Medium Blue Jeans for Men', price: 799, category: 'mens-jeans' },
  { id: 917, title: 'Blue Jeans for Men', price: 899, category: 'mens-jeans' },
  { id: 918, title: 'Men Blue Mid Wash Jeans', price: 699, category: 'mens-jeans' },
  { id: 919, title: 'Denim Jeans for Men', price: 999, category: 'mens-jeans' },
  { id: 920, title: 'The Original - Straight Fit Cargo Jeans - Men', price: 1099, category: 'mens-jeans' },
  { id: 921, title: 'Men High-Rise Relaxed Fit Modern Boot Denim Jeans', price: 777, category: 'mens-jeans' },
  { id: 922, title: 'Mid Regular Jeans for Men', price: 888, category: 'mens-jeans' },
  { id: 923, title: 'Mid Rise Regular Fit Jeans for Men', price: 799, category: 'mens-jeans' },
  /* Shorts */
];
window.GIGAHIVE_PRODUCTS.forEach(function(p) { p.img = productImg(p.id, p.category); });
var blackStripedProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 113; });
if (blackStripedProduct) {
  blackStripedProduct.img = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbhngiB3qfu9ZQJ2SV4WpQ-VzRJED--SbYT5XsVgUd2ETVRTs4lmU1zj9BKqmShlA3auEb7pOh&usqp=CAc';
}
var gayatriMantraProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 115; });
if (gayatriMantraProduct) {
  gayatriMantraProduct.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKmVIwUd6_DVSv6TlVMIdVDIcoXlLjetuig&s';
}
var ownEveryMomentProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 116; });
if (ownEveryMomentProduct) {
  ownEveryMomentProduct.img = 'https://www.beyoung.in/api/cache/catalog/products/t_shirt_for_men/printed_t-shirts/own_every_moment_printed_t-shirt_for_men_base_700x933.jpg';
}
var rareBreedProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 104; });
if (rareBreedProduct) {
  rareBreedProduct.img = 'https://5.imimg.com/data5/ECOM/Default/2024/3/405128769/LO/ZY/UN/13548708/170195402708a51b6582ad8dd3abde0a1da0e81907-500x500.jpg';
}
var relaxedFitProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 135; });
if (relaxedFitProduct) {
  relaxedFitProduct.img = 'https://m.media-amazon.com/images/I/61dy26qc7qL._AC_UY1100_.jpg';
}
var redPoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 301; });
if (redPoloProduct) {
  redPoloProduct.img = 'https://shop.teamsg.in/cdn/shop/files/1_01128fbf-c294-494c-823f-99e34a68facf.jpg?v=1744269959';
}
var bluePoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 302; });
if (bluePoloProduct) {
  bluePoloProduct.img = 'https://www.iconicindia.com/cdn/shop/files/GMS24-8030202433_1_76919352-d392-49a0-8b16-b0e40a13a40e.jpg?v=1756443940';
}
var blackPoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 303; });
if (blackPoloProduct) {
  blackPoloProduct.img = 'https://www.technosport.in/cdn/shop/files/OR81Black_1_f951dce3-37c8-431c-bfe7-3c23e6221216.jpg?v=1765952024';
}
var khakiPoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 304; });
if (khakiPoloProduct) {
  khakiPoloProduct.img = 'https://imagescdn.vanheusenindia.com/img/app/product/3/39828190-16480321.jpg?auto=format&w=390';
}
var redHalfSleevesPoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 305; });
if (redHalfSleevesPoloProduct) {
  redHalfSleevesPoloProduct.img = 'https://static.cilory.com/744980-thickbox_default/mens-red-half-sleeves-polo-t-shirt-by-nologo.jpg.webp';
}
var classicPoloProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 306; });
if (classicPoloProduct) {
  classicPoloProduct.img = 'https://classicpolos.com/cdn/shop/files/3_f1c3268a-5069-4f51-a24c-7faa434a4ced.jpg?v=1751715378';
}
var womenPrintedRoundNeckProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 401; });
if (womenPrintedRoundNeckProduct) {
  womenPrintedRoundNeckProduct.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiRqSf6orXPlu0d_G7_MreSoF5CShNatXUQ&s';
}
var womenLooseTeeProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 402; });
if (womenLooseTeeProduct) {
  womenLooseTeeProduct.img = 'https://blissclub.com/cdn/shop/files/Thumbnail-2_1_4bd53633-b4af-42e4-a415-8216e43c731e.jpg?v=1703147898&width=1080';
}
var womenBlueTeeProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 403; });
if (womenBlueTeeProduct) {
  womenBlueTeeProduct.img = 'https://cdn.shopify.com/s/files/1/0349/9969/7544/files/13thfeb2023_global_2806_4bb033ff_480x480.png?v=1715575016';
}
var womenBlackStripeTeeProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 404; });
if (womenBlackStripeTeeProduct) {
  womenBlackStripeTeeProduct.img = 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JANUARY/31/GHwtLC6b_d5ea4320283f4723ac6aa5eef60e9f8e.jpg';
}
var womenPurpleTeeProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 405; });
if (womenPurpleTeeProduct) {
  womenPurpleTeeProduct.img = 'https://repgod.in/cdn/shop/files/t-shirt-mockup-featuring-a-woman-and-plants-in-the-background-4824-el1_50_420x.png?v=1692198365';
}
var womenLooseFitTeeProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 406; });
if (womenLooseFitTeeProduct) {
  womenLooseFitTeeProduct.img = 'https://www.beyoung.in/api/cache/catalog/products/back_to_college_aug25/dark_violet_blooming_puff_printed_oversized_t-shirt_base_08_08_2025w_400x533.jpg';
}
var oliveCheckedShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 201; });
if (oliveCheckedShirtProduct) {
  oliveCheckedShirtProduct.img = 'https://imagescdn.pantaloons.com/img/app/product/8/804229-10747576.jpg?auto=format&w=450';
}
var gigahiveShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 202; });
if (gigahiveShirtProduct) {
  gigahiveShirtProduct.img = 'https://campussutra.com/cdn/shop/files/CSMOVSRT7606_1_919bad06-bb14-4123-af90-e2120af8fad9.jpg?v=1731147688';
}
var darkBlueFormalShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 203; });
if (darkBlueFormalShirtProduct) {
  darkBlueFormalShirtProduct.img = 'https://theholistik.com/cdn/shop/files/Omega-Shirt-Roayblue-1.webp?v=1725890152';
}
var brownPinstripeShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 204; });
if (brownPinstripeShirtProduct) {
  brownPinstripeShirtProduct.img = 'https://cottonfolk.in/cdn/shop/files/Men_sBrownPinstripeShort-SleeveShirt.jpg?v=1732268509&width=2048';
}
var pinkShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 205; });
if (pinkShirtProduct) {
  pinkShirtProduct.img = 'https://www.andamen.com/cdn/shop/products/01_4b31304a-4d67-4544-a365-7a0e5ee47ad3.jpg?v=1743151833';
}
var beigeShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 206; });
if (beigeShirtProduct) {
  beigeShirtProduct.img = 'https://gant.in/cdn/shop/files/GMS25-003240120277_1_9f69efb5-094b-4cb7-9f9b-adff1bcfc83d_550x550.jpg?v=1764854268';
}
var stripeShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 207; });
if (stripeShirtProduct) {
  stripeShirtProduct.img = 'https://redtape.com/cdn/shop/files/RFS2204_1.jpg?v=1754292891';
}
var checkShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 208; });
if (checkShirtProduct) {
  checkShirtProduct.img = 'https://campussutra.com/cdn/shop/files/CSMOVSRT7609_3_52eadbc3-3c06-4480-abda-47bf3a54c0dd.jpg?v=1730801146&width=2000';
}
var blackShirtProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 209; });
if (blackShirtProduct) {
  blackShirtProduct.img = 'https://stylequotient.co.in/cdn/shop/files/SS24SQPRUDENT_BLK_1.jpg?v=1715766861';
}
var lightGreyGurkhaPantProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 512; });
if (lightGreyGurkhaPantProduct) {
  lightGreyGurkhaPantProduct.img = 'https://bananaclub.co.in/cdn/shop/files/LightGreyGurkhaPant_3_eb06f3bd-5be6-433b-afac-687fa45350b5.jpg?v=1752911584';
}
var beigeTrouserProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 513; });
if (beigeTrouserProduct) {
  beigeTrouserProduct.img = 'https://www.urbanofashion.com/cdn/shop/files/koreantrou-cream.jpg?v=1765030838';
}
var mediumGreyKoreanPantProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 514; });
if (mediumGreyKoreanPantProduct) {
  mediumGreyKoreanPantProduct.img = 'https://www.urbanofashion.com/cdn/shop/files/koreantrou-mgrey-AI.png?v=1736435736';
}
var khakiSideAdjusterTrouserProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 505; });
if (khakiSideAdjusterTrouserProduct) {
  khakiSideAdjusterTrouserProduct.img = 'https://www.urbanofashion.com/cdn/shop/files/koreantrou-cream-2_da974195-b58c-4705-b600-66cbc5bb5a0f.png?v=1765030838';
}
var twilightFadeDenimCargoProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 915; });
if (twilightFadeDenimCargoProduct) {
  twilightFadeDenimCargoProduct.img = 'https://jimmyluxury.in/cdn/shop/files/IMG_7524copy_copy_8aa871d2-dd1e-4c64-8a72-b80ba25ee5b9.jpg?v=1763185908&width=2048';
}
var mediumBlueJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 916; });
if (mediumBlueJeansProduct) {
  mediumBlueJeansProduct.img = 'https://redtape.com/cdn/shop/files/RDM1084A_1.jpg?v=1754286431';
}
var blueJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 917; });
if (blueJeansProduct) {
  blueJeansProduct.img = 'https://i.shgcdn.com/5eb9ad3a-ccbf-4976-a0f3-3bdae63d6fde/-/format/auto/-/preview/3000x3000/-/quality/lighter/';
}
var midWashJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 918; });
if (midWashJeansProduct) {
  midWashJeansProduct.img = 'https://imagescdn.peterengland.com/img/app/product/3/39827003-16637360.jpg?auto=format&w=390';
}
var denimJeansBlackProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 919; });
if (denimJeansBlackProduct) {
  denimJeansBlackProduct.img = 'https://www.urbanofashion.com/cdn/shop/files/jeanlstowl-black-2.jpg?v=1768366873';
}
var straightFitCargoJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 920; });
if (straightFitCargoJeansProduct) {
  straightFitCargoJeansProduct.img = 'https://theclothingfactory.in/cdn/shop/files/TCF_17-10-240564_1800x.jpg?v=1731042045';
}
var highRiseBootDenimJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 921; });
if (highRiseBootDenimJeansProduct) {
  highRiseBootDenimJeansProduct.img = 'https://assets.ajio.com/medias/sys_master/root/20230925/Dl2f/6511bcd0ddf77915190022e6/-473Wx593H-469537897-indigo-MODEL.jpg';
}
var midRegularJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 922; });
if (midRegularJeansProduct) {
  midRegularJeansProduct.img = 'https://spykar.com/cdn/shop/files/G7Pvi3ylJ-8905566215245_8.webp?v=1757396921';
}
var midRiseRegularFitJeansProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 923; });
if (midRiseRegularFitJeansProduct) {
  midRiseRegularFitJeansProduct.img = 'https://hips.hearstapps.com/hmg-prod/images/mhl-jeans-levis-044-68c88b01918b8.jpg?crop=1xw:1xh;center,top&resize=1120:*';
}
var loungeDreamsNewArrivalProduct = window.GIGAHIVE_PRODUCTS.find(function(p) { return p.id === 41; });
if (loungeDreamsNewArrivalProduct) {
  loungeDreamsNewArrivalProduct.img = 'https://theloungedreams.com/cdn/shop/files/107A8266copy.final.w_1800x1800.jpg?v=1708066377';
}

function getProductsByCategory(cat) {
  return window.GIGAHIVE_PRODUCTS.filter(function(p) { return p.category === cat; });
}

var BOTTOMWEAR_SLUGS = ['mens-pants', 'mens-jeans'];
function getProductsByCategorySlug(slug) {
  if (slug === 'mens-bottomwear') {
    return window.GIGAHIVE_PRODUCTS.filter(function(p) { return BOTTOMWEAR_SLUGS.indexOf(p.category) !== -1; });
  }
  return window.GIGAHIVE_PRODUCTS.filter(function(p) { return p.category === slug; });
}

function getProductById(id) {
  return window.GIGAHIVE_PRODUCTS.find(function(p) { return String(p.id) === String(id); });
}

function getComboProducts() {
  return getProductsByCategory('combos');
}

function getNewArrivals() {
  return getProductsByCategory('new');
}

function getCategoryProducts() {
  return window.GIGAHIVE_PRODUCTS.filter(function(p) {
    return ['combos', 'new', 't-shirts-men', 'mens-pants', 'mens-jeans', 'shorts'].indexOf(p.category) !== -1;
  });
}

window.getProductsByCategorySlug = getProductsByCategorySlug;
window.getProductById = getProductById;
