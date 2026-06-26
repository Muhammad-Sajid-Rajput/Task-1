const products = [
  {
    id: 1,
    name: "2-Slot Toaster",
    price: 29.99,
    rating: 4.3,
    category: "Home",
    image: "products/2-slot-toaster-white.jpg",
    description: "Classic white two-slot toaster with adjustable browning controls and crumb tray."
  },
  {
    id: 2,
    name: "3-Piece Cooking Set",
    price: 89.99,
    rating: 4.6,
    category: "Home",
    image: "products/3-piece-cooking-set.jpg",
    description: "Durable non-stick pots and pans designed for even heat distribution."
  },
  {
    id: 3,
    name: "Teal Cotton T-Shirts (2-Pack)",
    price: 19.99,
    rating: 4.1,
    category: "Apparel",
    image: "products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    description: "Soft, breathable 100% cotton crewneck shirts for daily wear."
  },
  {
    id: 4,
    name: "Artistic Bowl Set",
    price: 34.99,
    rating: 4.7,
    category: "Home",
    image: "products/artistic-bowl-set-6-piece.jpg",
    description: "Beautifully glazed ceramic bowls, perfect for soups, cereals, and salads."
  },
  {
    id: 5,
    name: "Athletic Socks (6-Pack)",
    price: 14.99,
    rating: 4.5,
    category: "Apparel",
    image: "products/athletic-cotton-socks-6-pairs.jpg",
    description: "Cushioned athletic socks with arch support and moisture-wicking technology."
  },
  {
    id: 6,
    name: "Gray Skateboard Shoes",
    price: 49.99,
    rating: 4.2,
    category: "Footwear",
    image: "products/athletic-skateboard-shoes-gray.jpg",
    description: "Durable suede skate shoes with high-traction vulcanized rubber soles."
  },
  {
    id: 7,
    name: "Gray & Rosewood Towel Set",
    price: 39.99,
    rating: 4.4,
    category: "Home",
    image: "products/bath-towel-set-gray-rosewood.jpg",
    description: "Plush, quick-drying 100% cotton towels in a contrasting color pair."
  },
  {
    id: 8,
    name: "Soft Bathroom Mat",
    price: 12.99,
    rating: 4.0,
    category: "Home",
    image: "products/bathroom-mat.jpg",
    description: "Absorbent micro-fiber bath mat with a non-slip backing."
  },
  {
    id: 9,
    name: "Espresso Maker",
    price: 119.99,
    rating: 4.8,
    category: "Home",
    image: "products/black-and-silver-espresso-maker.jpg",
    description: "Sleek espresso machine with steam wand for custom lattes and cappuccinos."
  },
  {
    id: 10,
    name: "Beige Blackout Curtains",
    price: 29.99,
    rating: 4.5,
    category: "Home",
    image: "products/blackout-curtain-set-beige.jpg",
    description: "Thermal insulated blackout curtain panels for light blocking and privacy."
  },
  {
    id: 11,
    name: "Teal Blackout Curtains",
    price: 29.99,
    rating: 4.6,
    category: "Home",
    image: "products/blackout-curtains-set-teal.jpg",
    description: "Rich teal thermal blackout curtains to block light and control temperature."
  },
  {
    id: 12,
    name: "Countertop Blender",
    price: 45.99,
    rating: 4.2,
    category: "Home",
    image: "products/countertop-push-blender-black.jpg",
    description: "High-powered blender with pulse settings for smoothies and shakes."
  },
  {
    id: 13,
    name: "Pink Zirconia Earrings",
    price: 24.99,
    rating: 4.7,
    category: "Accessories",
    image: "products/crystal-zirconia-stud-earrings-pink.jpg",
    description: "Elegant sterling silver stud earrings set with sparkling pink zirconia."
  },
  {
    id: 14,
    name: "Gray Duvet Cover Set",
    price: 49.99,
    rating: 4.3,
    category: "Home",
    image: "products/duvet-cover-set-gray-queen.jpg",
    description: "Soft queen-sized duvet cover with matching pillow shams."
  },
  {
    id: 15,
    name: "Electric Water Kettle",
    price: 34.99,
    rating: 4.5,
    category: "Home",
    image: "products/electric-steel-hot-water-kettle-white.jpg",
    description: "Stainless steel rapid-boil electric kettle with auto shut-off."
  },
  {
    id: 16,
    name: "White Dinner Plates",
    price: 42.99,
    rating: 4.6,
    category: "Home",
    image: "products/elegant-white-dinner-plate-set.jpg",
    description: "Scratch-resistant ceramic dinner plates for everyday dining."
  },
  {
    id: 17,
    name: "Facial Tissues (8-Pack)",
    price: 15.99,
    rating: 4.1,
    category: "Home",
    image: "products/facial-tissue-2-ply-8-boxes.jpg",
    description: "Soft, durable 2-ply facial tissues in bulk packaging."
  },
  {
    id: 18,
    name: "Glass Food Containers",
    price: 27.99,
    rating: 4.5,
    category: "Home",
    image: "products/glass-screw-lid-food-containers.jpg",
    description: "Airtight glass containers with screw lids for food prep and storage."
  },
  {
    id: 19,
    name: "Composite Basketball",
    price: 24.99,
    rating: 4.4,
    category: "Sports",
    image: "products/intermediate-composite-basketball.jpg",
    description: "Durable composite leather basketball for indoor and outdoor play."
  },
  {
    id: 20,
    name: "Kitchen Paper Towels",
    price: 17.99,
    rating: 4.2,
    category: "Home",
    image: "products/kitchen-paper-towels-8-pack.jpg",
    description: "Absorbent, multi-ply paper towels for kitchen cleanups."
  },
  {
    id: 21,
    name: "Gray Knit Sneakers",
    price: 59.99,
    rating: 4.5,
    category: "Footwear",
    image: "products/knit-athletic-sneakers-gray.jpg",
    description: "Lightweight, breathable knit shoes for workouts and walking."
  },
  {
    id: 22,
    name: "Laundry Detergent Tabs",
    price: 18.99,
    rating: 4.6,
    category: "Home",
    image: "products/laundry-detergent-tabs.jpg",
    description: "Pre-measured detergent pods that dissolve in all water temperatures."
  },
  {
    id: 23,
    name: "Luxury Towel Set",
    price: 49.99,
    rating: 4.8,
    category: "Home",
    image: "products/luxury-towel-set.jpg",
    description: "Ultra-plush premium cotton towels for a spa-like experience."
  },
  {
    id: 24,
    name: "Men's White Sneakers",
    price: 64.99,
    rating: 4.4,
    category: "Footwear",
    image: "products/men-athletic-shoes-white.jpg",
    description: "Comfortable athletic shoes with superior arch support."
  },
  {
    id: 25,
    name: "Men's Flat Sneakers",
    price: 54.99,
    rating: 4.3,
    category: "Footwear",
    image: "products/men-brown-flat-sneakers.jpg",
    description: "Minimalist casual sneakers with a durable rubber sole."
  },
  {
    id: 26,
    name: "Men's Chino Pants",
    price: 39.99,
    rating: 4.2,
    category: "Apparel",
    image: "products/men-chino-pants-beige.jpg",
    description: "Slim-fit stretch chino pants for casual or semi-formal wear."
  },
  {
    id: 27,
    name: "Teal Fleece Hoodie",
    price: 44.99,
    rating: 4.6,
    category: "Apparel",
    image: "products/men-cozy-fleece-hoodie-light-teal.jpg",
    description: "Warm, cozy fleece pullover hoodie with a kangaroo pocket."
  },
  {
    id: 28,
    name: "Men's Gray Polo",
    price: 29.99,
    rating: 4.3,
    category: "Apparel",
    image: "products/men-golf-polo-t-shirt-gray.jpg",
    description: "Quick-dry, athletic polo shirt for golf or casual wear."
  },
  {
    id: 29,
    name: "Navigator Sunglasses",
    price: 21.99,
    rating: 4.5,
    category: "Accessories",
    image: "products/men-navigator-sunglasses-black.jpg",
    description: "Polarized classic aviator sunglasses with a black metal frame."
  },
  {
    id: 30,
    name: "Men's Wool Sweater",
    price: 49.99,
    rating: 4.7,
    category: "Apparel",
    image: "products/men-stretch-wool-sweater-black.jpg",
    description: "Soft, warm wool blend crewneck sweater with comfortable stretch."
  },
  {
    id: 31,
    name: "4-Piece Cooking Set",
    price: 74.99,
    rating: 4.4,
    category: "Home",
    image: "products/non-stick-cooking-set-4-pieces.jpg",
    description: "Essential non-stick pots and frying pans with tempered glass lids."
  },
  {
    id: 32,
    name: "Gold Round Sunglasses",
    price: 19.99,
    rating: 4.2,
    category: "Accessories",
    image: "products/round-sunglasses-gold.jpg",
    description: "Retro-style circular sunglasses with thin gold-toned frames."
  },
  {
    id: 33,
    name: "Leaf Branch Earrings",
    price: 18.99,
    rating: 4.6,
    category: "Accessories",
    image: "products/sky-leaf-branch-earrings.jpg",
    description: "Delicate leaf branch design earrings in a silver finish."
  },
  {
    id: 34,
    name: "Wide-Brim Straw Hat",
    price: 15.99,
    rating: 4.0,
    category: "Accessories",
    image: "products/straw-sunhat.jpg",
    description: "Breathable woven straw hat providing excellent sun protection."
  },
  {
    id: 35,
    name: "Pink Vanity Mirror",
    price: 22.99,
    rating: 4.3,
    category: "Home",
    image: "products/vanity-mirror-pink.jpg",
    description: "Desktop makeup mirror with a stable base and pink trim."
  },
  {
    id: 36,
    name: "Knit Ballet Flats",
    price: 34.99,
    rating: 4.4,
    category: "Footwear",
    image: "products/women-knit-ballet-flat-white.jpg",
    description: "Flexible and lightweight slip-on flats made of woven fabric."
  },
  {
    id: 37,
    name: "Blue Pom-Pom Beanie",
    price: 12.99,
    rating: 4.7,
    category: "Apparel",
    image: "products/women-knit-beanie-pom-pom-blue.jpg",
    description: "Warm cable-knit beanie featuring a fluffy pom-pom top."
  },
  {
    id: 38,
    name: "Gray Oversized Sweater",
    price: 39.99,
    rating: 4.5,
    category: "Apparel",
    image: "products/women-plain-cotton-oversized-sweater-gray.jpg",
    description: "Cozy drop-shoulder knit sweater with a relaxed, loose fit."
  },
  {
    id: 39,
    name: "Pink Lounge Pants",
    price: 24.99,
    rating: 4.4,
    category: "Apparel",
    image: "products/women-relaxed-lounge-pants-pink.jpg",
    description: "Soft, relaxed-fit drawstring pants perfect for lounging."
  },
  {
    id: 40,
    name: "Sandal Block Heels",
    price: 49.99,
    rating: 4.3,
    category: "Footwear",
    image: "products/women-sandal-heels-white-pink.jpg",
    description: "Stylish open-toe block heel sandals with ankle strap."
  },
  {
    id: 41,
    name: "Striped Beach Dress",
    price: 27.99,
    rating: 4.5,
    category: "Apparel",
    image: "products/women-striped-beach-dress.jpg",
    description: "Lightweight, sleeveless summer maxi dress with stripes."
  },
  {
    id: 42,
    name: "Denim Summer Shorts",
    price: 24.99,
    rating: 4.1,
    category: "Apparel",
    image: "products/women-summer-jean-shorts.jpg",
    description: "Classic high-waisted denim shorts with frayed hems."
  }
];
