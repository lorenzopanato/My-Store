const produtos = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
    },
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
      image: "images/products/6-piece-white-dinner-plate-set.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating: {
        stars: 4,
        count: 37
      },
      priceCents: 2067,
      keywords: [
        "plates",
        "kitchen",
        "dining"
      ]
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      image: "images/products/6-piece-non-stick-baking-set.webp",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: 4.5,
        count: 175
      },
      priceCents: 3499,
      keywords: [
        "kitchen",
        "cookware"
      ]
    },
    {
      id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      name: "Plain Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 317
      },
      priceCents: 2400,
      keywords: [
        "hoodies",
        "sweaters",
        "apparel"
      ]
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      image: "images/products/luxury-tower-set-6-piece.jpg",
      name: "Luxury Towel Set - Graphite Gray",
      rating: {
        stars: 4.5,
        count: 144
      },
      priceCents: 3599,
      keywords: [
        "bathroom",
        "washroom",
        "restroom",
        "towels",
        "bath towels"
      ]
    },
    {
      id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
      image: "images/products/blackout-curtains-black.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: 4.5,
        count: 363
      },
      priceCents: 3099,
      keywords: [
        "bedroom",
        "home"
      ]
    },
    {
      id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
      image: "images/products/cotton-bath-towels-teal.webp",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: 4.5,
        count: 93
      },
      priceCents: 2110,
      keywords: [
        "bathroom",
        "home",
        "towels"
      ]
    },
    {
      id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
      image: "images/products/knit-athletic-sneakers-pink.webp",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "womens"
      ]
    },
    {
      id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
      image: "images/products/countertop-blender-64-oz.jpg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: 4,
        count: 3
      },
      priceCents: 10747,
      keywords: [
        "food blenders",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
      image: "images/products/floral-mixing-bowl-set.jpg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: 5,
        count: 679
      },
      priceCents: 3899,
      keywords: [
        "mixing bowls",
        "baking",
        "cookware",
        "kitchen"
      ]
    },
    {
      id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
      image: "images/products/kitchen-paper-towels-30-pack.jpg",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: 4.5,
        count: 1045
      },
      priceCents: 5799,
      keywords: [
        "kitchen",
        "kitchen towels",
        "tissues"
      ]
    },
    {
      id: "bc2847e9-5323-403f-b7cf-57fde044a955",
      image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157
      },
      priceCents: 2400,
      keywords: [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
    }
  ];