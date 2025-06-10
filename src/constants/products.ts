// constants/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  priceKES: number;
  discountPercent?: number;
  shop: {
    name: string;
    contact: string;
    location: string;
  };
  imageUrl: string;
  tags: string[];
  rating: number;
  inStock: boolean;
  createdAt: string;
  discountedPriceKES?: number; // Optional field for discounted price
}

export const products: Product[] = [
  {
    id: "101",
    name: "Targus Classic 15.6'' Laptop Backpack",
    description: "Durable water-resistant backpack for laptops up to 15.6 inches with padded compartments.",
    category: "Laptop Bags / Backpacks",
    priceKES: 3200,
    shop: {
      name: "Urban Tech Hub",
      contact: "0708 123 456",
      location: "Moi Avenue, Nairobi",
    },
    imageUrl: "/images/image1.jpg",
    tags: ["Laptop Bag", "Backpack", "Targus"],
    rating: 4.5,
    inStock: true,
    createdAt: "2025-06-10T09:00:00Z",
  },
  {
    id: "102",
    name: "Neoprene Laptop Sleeve 14 inch",
    description: "Shockproof, scratch-resistant sleeve ideal for most slim laptops.",
    category: "Sleeves & Cases",
    priceKES: 1100,
    shop: {
      name: "City Gadgets",
      contact: "0710 987 654",
      location: "Tom Mboya Street, Nairobi",
    },
    imageUrl: "/images/image2.jpg",
    tags: ["Laptop Sleeve", "Protection", "Neoprene"],
    rating: 4.4,
    inStock: true,
    createdAt: "2025-06-09T10:30:00Z",
  },
  {
    id: "103",
    name: "Samsung Tab A7 Tri-Fold Case",
    description: "Magnetic folding cover with stand feature for Samsung Tab A7.",
    category: "Tablet Covers",
    priceKES: 1350,
    shop: {
      name: "Digital Republic",
      contact: "0799 223 456",
      location: "Luthuli Avenue, Nairobi",
    },
    imageUrl: "/images/image3.jpg",
    tags: ["Tablet Case", "Samsung", "Protective Cover"],
    rating: 4.3,
    inStock: true,
    createdAt: "2025-06-08T12:00:00Z",
  },
  {
    id: "104",
    name: "Tempered Glass Screen Protector - 15.6''",
    description: "Anti-scratch, anti-glare screen protector for 15.6'' laptops.",
    category: "Screen Protectors",
    priceKES: 750,
    shop: {
      name: "CompTech Nairobi",
      contact: "0733 321 987",
      location: "Revlon Plaza, Nairobi CBD",
    },
    imageUrl: "/images/image4.jpg",
    tags: ["Screen Protector", "Laptop", "Tempered Glass"],
    rating: 4.6,
    inStock: true,
    createdAt: "2025-06-07T14:15:00Z",
  },
  {
    id: "105",
    name: "Silicone Keyboard Cover - HP Pavilion",
    description: "Dustproof and waterproof keyboard cover for select HP laptops.",
    category: "Keyboard Covers",
    priceKES: 500,
    shop: {
      name: "SmartCore Technologies",
      contact: "0706 444 333",
      location: "Kimathi House, Nairobi",
    },
    imageUrl: "/images/image5.jpg",
    tags: ["Keyboard Cover", "HP", "Silicone"],
    rating: 4.2,
    inStock: true,
    createdAt: "2025-06-06T11:40:00Z",
  },
  {
    id: "106",
    name: "Laptop Dust Cover (Full Body)",
    description: "Protects laptop from dust, sunlight, and spills.",
    category: "Dust Covers",
    priceKES: 600,
    shop: {
      name: "Byte City",
      contact: "0711 888 222",
      location: "Old Mutual Building, Nairobi",
    },
    imageUrl: "/images/image6.jpg",
    tags: ["Dust Cover", "Laptop", "Protective"],
    rating: 4.1,
    inStock: true,
    createdAt: "2025-06-05T16:50:00Z",
  },
  {
    id: "107",
    name: "HP Pavilion 15.6'' Replacement Screen",
    description: "Compatible screen replacement for HP Pavilion models.",
    category: "Laptop Spare Parts (screens, hinges, keyboards)",
    priceKES: 5500,
    shop: {
      name: "Elite Repairs Kenya",
      contact: "0790 777 888",
      location: "Ngara Road, Nairobi",
    },
    imageUrl: "/images/image7.jpg",
    tags: ["Spare Parts", "Laptop Screen", "HP"],
    rating: 4.4,
    inStock: true,
    createdAt: "2025-06-04T09:45:00Z",
  },
  {
    id: "108",
    name: "Precision Laptop Repair Toolkit (32-in-1)",
    description: "Magnetic screwdriver kit with bits for all laptop models.",
    category: "Repair Toolkits",
    priceKES: 1450,
    shop: {
      name: "Nairobi Tech Zone",
      contact: "0702 909 606",
      location: "Njengi House, Nairobi",
    },
    imageUrl: "/images/image8.jpg",
    tags: ["Repair", "Tool Kit", "Laptop Fix"],
    rating: 4.7,
    inStock: true,
    createdAt: "2025-06-03T10:10:00Z",
  },
  {
    id: "109",
    name: "Thermal Grizzly Kryonaut - 1g",
    description: "High-performance thermal paste for CPUs and GPUs.",
    category: "Thermal Paste",
    priceKES: 900,
    shop: {
      name: "InTech Supplies",
      contact: "0724 111 222",
      location: "Luthuli Lane, Nairobi",
    },
    imageUrl: "/images/image9.jpg",
    tags: ["Thermal Paste", "Cooling", "CPU"],
    rating: 4.8,
    inStock: true,
    createdAt: "2025-06-02T13:05:00Z",
  },
  {
    id: "110",
    name: "Digital Multimeter DT830D",
    description: "Reliable multimeter for testing voltage, resistance, and continuity.",
    category: "Multimeters",
    priceKES: 1200,
    shop: {
      name: "FixPro Electronics",
      contact: "0745 654 321",
      location: "Tom Mboya Street, Nairobi",
    },
    imageUrl: "/images/image10.jpg",
    tags: ["Multimeter", "Repair", "Tools"],
    rating: 4.5,
    inStock: true,
    createdAt: "2025-06-01T15:30:00Z",
  },
  {
    id: "111",
    name: "Laptop Cleaning Kit (3-in-1)",
    description: "Includes brush, spray, and microfiber cloth for safe screen cleaning.",
    category: "Cleaning Kits",
    priceKES: 400,
    shop: {
      name: "CyberTech Accessories",
      contact: "0733 456 000",
      location: "Revlon Plaza, Nairobi",
    },
    imageUrl: "/images/image1.jpg",
    tags: ["Cleaning", "Kit", "Maintenance"],
    rating: 4.6,
    inStock: true,
    createdAt: "2025-05-31T17:00:00Z",
  },
  {
    id: "112",
    name: "Logitech C270 HD Webcam",
    description: "720p HD webcam with built-in microphone and low light correction.",
    category: "Webcams",
    priceKES: 3850,
    shop: {
      name: "CompDock Partners",
      contact: "0712 222 333",
      location: "Moi Avenue, Nairobi",
    },
    imageUrl: "/images/image2.jpg",
    tags: ["Webcam", "Logitech", "HD"],
    rating: 4.7,
    inStock: true,
    createdAt: "2025-05-30T10:20:00Z",
  },
  {
    id: "113",
    name: "Orico 4-Port USB 3.0 Hub",
    description: "High-speed data transfer USB hub with sleek design.",
    category: "USB Hubs / Docking Stations",
    priceKES: 1750,
    shop: {
      name: "Urban Tech Hub",
      contact: "0708 123 456",
      location: "Moi Avenue, Nairobi",
    },
    imageUrl: "/images/image3.jpg",
    tags: ["USB Hub", "Orico", "Expansion"],
    rating: 4.6,
    inStock: true,
    createdAt: "2025-05-29T11:10:00Z",
  },
  {
    id: "114",
    name: "Adjustable Laptop Stand - Aluminum",
    description: "Ergonomic design with anti-slip base, ideal for workstations.",
    category: "Stands (Laptop/Monitor)",
    priceKES: 2900,
    shop: {
      name: "City Gadgets",
      contact: "0710 987 654",
      location: "Tom Mboya Street, Nairobi",
    },
    imageUrl: "/images/image4.jpg",
    tags: ["Laptop Stand", "Adjustable", "Ergonomics"],
    rating: 4.8,
    inStock: true,
    createdAt: "2025-05-28T09:45:00Z",
  },
  {
    id: "115",
    name: "Anti-slip RGB Mousepad - Large",
    description: "Smooth surface, LED RGB edge, USB powered for gaming or work.",
    category: "Mousepads",
    priceKES: 950,
    shop: {
      name: "Digital Republic",
      contact: "0799 223 456",
      location: "Luthuli Avenue",
    },
    imageUrl: "/images/image5.jpg",
    tags: ["Mousepad", "RGB", "Gaming"],
    rating: 4.5,
    inStock: true,
    createdAt: "2025-05-27T14:30:00Z",
  },
  {
    id: "116",
    name: "DeepCool Multi Fan Laptop Cooling Pad",
    description: "USB-powered cooling pad with 4 quiet fans and adjustable height.",
    category: "Cooling Pads",
    priceKES: 2450,
    shop: {
      name: "FixPro Electronics",
      contact: "0745 654 321",
      location: "Tom Mboya Street, Nairobi",
    },
    imageUrl: "/images/image6.jpg",
    tags: ["Cooling", "Laptop", "Fan Pad"],
    rating: 4.7,
    inStock: true,
    createdAt: "2025-05-26T13:50:00Z",
  },
  {
    id: "117",
    name: "Smart Band M6 - Fitness Tracker",
    description: "Track heart rate, sleep, steps, and receive notifications.",
    category: "Smart Watches & Accessories",
    priceKES: 3800,
    shop: {
      name: "CompTech Nairobi",
      contact: "0733 321 987",
      location: "Revlon Plaza, Nairobi CBD",
    },
    imageUrl: "/images/image7.jpg",
    tags: ["Smartwatch", "Fitness", "Bluetooth"],
    rating: 4.3,
    inStock: true,
    createdAt: "2025-05-25T12:00:00Z",
  },
  {
    id: "118",
    name: "USB Bluetooth 5.0 Adapter",
    description: "Enable Bluetooth on desktops/laptops. Plug and play.",
    category: "Bluetooth Adapters",
    priceKES: 750,
    shop: {
      name: "Urban Tech Hub",
      contact: "0708 123 456",
      location: "Moi Avenue, Nairobi",
    },
    imageUrl: "/images/image8.jpg",
    tags: ["Bluetooth", "Adapter", "Wireless"],
    rating: 4.4,
    inStock: true,
    createdAt: "2025-05-24T08:30:00Z",
  },
  {
    id: "119",
    name: "USB Smart Card Reader (ID/RFID)",
    description: "Compatible with national IDs, smartcards, and secure login systems.",
    category: "RFID/Smart Card Readers",
    priceKES: 2200,
    shop: {
      name: "Byte City",
      contact: "0711 888 222",
      location: "Old Mutual Building, Nairobi",
    },
    imageUrl: "/images/image9.jpg",
    tags: ["RFID", "Card Reader", "Smart ID"],
    rating: 4.6,
    inStock: true,
    createdAt: "2025-05-23T17:45:00Z",
  },
  {
    "id": "201",
    "name": "HP Executive 17.3'' Laptop Backpack",
    "description": "Spacious, business-oriented backpack with padded compartments and anti-theft zippers.",
    "category": "Laptop Bags / Backpacks",
    "priceKES": 4300,
    "shop": {
      "name": "TechSavvy Traders",
      "contact": "0791 345 678",
      "location": "Kenyatta Avenue, Nairobi"
    },
    "imageUrl": "/images/image3.jpg",
    "tags": ["Laptop Bag", "HP", "Business Backpack"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-10T12:30:00Z"
  },
  {
    "id": "202",
    "name": "PU Leather Laptop Sleeve 13 inch",
    "description": "Elegant leather-look sleeve with microfiber interior and magnetic closure.",
    "category": "Sleeves & Cases",
    "priceKES": 1800,
    "shop": {
      "name": "Gizmo Mart",
      "contact": "0722 888 100",
      "location": "Moi Avenue, Nairobi"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["Laptop Sleeve", "Leather", "13 inch"],
    "rating": 4.3,
    "inStock": true,
    "createdAt": "2025-06-09T11:00:00Z"
  },
  {
    "id": "203",
    "name": "iPad 10.2'' Smart Magnetic Cover",
    "description": "Tri-fold stand, auto sleep/wake cover with soft microfiber lining.",
    "category": "Tablet Covers",
    "priceKES": 1550,
    "shop": {
      "name": "iCentre Kenya",
      "contact": "0700 900 600",
      "location": "Luthuli Lane, Nairobi"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Tablet Case", "iPad", "Smart Cover"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-08T16:00:00Z"
  },
  {
    "id": "204",
    "name": "Matte Screen Protector for MacBook 13''",
    "description": "Anti-glare matte finish protector with fingerprint resistance.",
    "category": "Screen Protectors",
    "priceKES": 950,
    "shop": {
      "name": "ScreenGuard Nairobi",
      "contact": "0718 232 323",
      "location": "Moi Avenue, Nairobi"
    },
    "imageUrl": "/images/image10.jpg",
    "tags": ["Screen Protector", "MacBook", "Anti-glare"],
    "rating": 4.2,
    "inStock": true,
    "createdAt": "2025-06-07T17:00:00Z"
  },
  {
    "id": "205",
    "name": "Universal Transparent Keyboard Skin",
    "description": "Flexible, ultra-thin keyboard cover suitable for most laptops.",
    "category": "Keyboard Covers",
    "priceKES": 400,
    "shop": {
      "name": "CompEdge",
      "contact": "0733 222 111",
      "location": "Kimathi Street, Nairobi"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Keyboard Cover", "Universal", "Silicone"],
    "rating": 4.1,
    "inStock": true,
    "createdAt": "2025-06-06T12:15:00Z"
  },
  {
    "id": "206",
    "name": "Transparent Laptop Dust Cover Set",
    "description": "Full set includes keyboard, screen and outer body cover.",
    "category": "Dust Covers",
    "priceKES": 750,
    "shop": {
      "name": "Techie Supply House",
      "contact": "0707 654 456",
      "location": "Hazina Towers, Nairobi"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["Dust Cover", "Full Set", "Laptop"],
    "rating": 4.0,
    "inStock": true,
    "createdAt": "2025-06-05T15:30:00Z"
  },
  {
    "id": "207",
    "name": "Dell Inspiron Replacement Hinges (Pair)",
    "description": "OEM-quality hinges compatible with 15.6'' Dell Inspiron laptops.",
    "category": "Laptop Spare Parts (screens, hinges, keyboards)",
    "priceKES": 2100,
    "shop": {
      "name": "TechFix Africa",
      "contact": "0714 456 789",
      "location": "Ngong Road, Nairobi"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["Laptop Hinges", "Dell", "Spare Parts"],
    "rating": 4.3,
    "inStock": true,
    "createdAt": "2025-06-04T11:20:00Z"
  },
  {
    "id": "208",
    "name": "ProFix Mini Screwdriver Set (45-in-1)",
    "description": "Multi-bit precision set for electronics repair with magnetic tips.",
    "category": "Repair Toolkits",
    "priceKES": 1650,
    "shop": {
      "name": "Tool Zone KE",
      "contact": "0792 800 123",
      "location": "Accra Road, Nairobi"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["Toolkit", "Screwdrivers", "Repair"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-03T09:00:00Z"
  },
  {
    "id": "209",
    "name": "Arctic MX-4 Thermal Paste - 4g",
    "description": "Easy to apply, long-lasting compound for CPU/GPU cooling.",
    "category": "Thermal Paste",
    "priceKES": 1100,
    "shop": {
      "name": "Gadget Lab KE",
      "contact": "0716 333 456",
      "location": "Luthuli Avenue, Nairobi"
    },
    "imageUrl": "/images/image2.jpg",
    "tags": ["Thermal Paste", "Cooling", "Arctic"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-02T14:15:00Z"
  },
  {
    "id": "210",
    "name": "UNI-T UT33D+ Digital Multimeter",
    "description": "Measures AC/DC voltage, current, resistance, with LCD display.",
    "category": "Multimeters",
    "priceKES": 1350,
    "shop": {
      "name": "VoltEdge Electronics",
      "contact": "0720 100 222",
      "location": "Moi Lane, Nairobi"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["Multimeter", "UNI-T", "Voltage"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-01T13:20:00Z"
  },
  {
    "id": "211",
    "name": "Deluxe 5-in-1 Laptop Cleaning Kit",
    "description": "Includes cleaning gel, brush, spray, microfiber cloth, blower.",
    "category": "Cleaning Kits",
    "priceKES": 550,
    "shop": {
      "name": "ScreenCare Nairobi",
      "contact": "0740 222 345",
      "location": "Koinange Street, Nairobi"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["Cleaning", "Laptop Care", "Kit"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-05-31T11:10:00Z"
  },
  {
    "id": "212",
    "name": "KONKA 1080p Webcam with Tripod",
    "description": "Plug-and-play full HD webcam with noise-reducing mic and tripod stand.",
    "category": "Webcams",
    "priceKES": 3950,
    "shop": {
      "name": "Gadget World",
      "contact": "0736 567 789",
      "location": "Moi Avenue, Nairobi"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["Webcam", "KONKA", "1080p"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-05-30T12:00:00Z"
  },
  {
    "id": "213",
    "name": "UGREEN USB C Docking Station (7-in-1)",
    "description": "Expand your laptop with HDMI, USB, card reader and charging pass-through.",
    "category": "USB Hubs / Docking Stations",
    "priceKES": 4600,
    "shop": {
      "name": "DockPoint KE",
      "contact": "0709 456 789",
      "location": "Revlon Plaza, Nairobi"
    },
    "imageUrl": "/images/image3.jpg",
    "tags": ["Dock", "USB-C", "UGREEN"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-05-29T10:00:00Z"
  },
  {
    "id": "214",
    "name": "Xiaomi Foldable Laptop Stand",
    "description": "Lightweight aluminum stand with 6 height levels and ventilation.",
    "category": "Stands (Laptop/Monitor)",
    "priceKES": 1850,
    "shop": {
      "name": "Mi Store Kenya",
      "contact": "0715 112 112",
      "location": "Tom Mboya Street, Nairobi"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Laptop Stand", "Portable", "Aluminum"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-05-28T14:00:00Z"
  },
  {
    "id": "215",
    "name": "SteelSeries QcK Gaming Mousepad",
    "description": "Micro-woven cloth for maximum control, non-slip rubber base.",
    "category": "Mousepads",
    "priceKES": 1350,
    "shop": {
      "name": "eSportZone KE",
      "contact": "0700 323 101",
      "location": "Luthuli Lane, Nairobi"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["Mousepad", "Gaming", "SteelSeries"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-05-27T11:30:00Z"
  },
  {
    "id": "216",
    "name": "Cooler Master Ergostand IV Cooling Pad",
    "description": "High airflow with 4 adjustable levels, supports up to 17'' laptops.",
    "category": "Cooling Pads",
    "priceKES": 3850,
    "shop": {
      "name": "ProGadget Nairobi",
      "contact": "0746 909 111",
      "location": "Kimathi Street, Nairobi"
    },
    "imageUrl": "/images/image2.jpg",
    "tags": ["Cooling", "Cooler Master", "Stand"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-05-26T09:40:00Z"
  },
  {
    "id": "217",
    "name": "Amazfit Bip U Pro Smartwatch",
    "description": "1.43” HD screen, SpO2 monitor, GPS, Alexa built-in.",
    "category": "Smart Watches & Accessories",
    "priceKES": 7200,
    "shop": {
      "name": "SmartWear KE",
      "contact": "0721 787 123",
      "location": "Luthuli Avenue, Nairobi"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["Smartwatch", "Fitness", "Amazfit"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-05-25T10:10:00Z"
  },
  {
    "id": "218",
    "name": "TP-Link UB500 Nano Bluetooth Adapter",
    "description": "Bluetooth 5.0 dongle with enhanced range and audio transmission.",
    "category": "Bluetooth Adapters",
    "priceKES": 950,
    "shop": {
      "name": "LinkNet KE",
      "contact": "0723 998 456",
      "location": "Moi Lane, Nairobi"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Bluetooth", "TP-Link", "Wireless"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-05-24T13:00:00Z"
  },
  {
    "id": "219",
    "name": "ACS ACR38 Smart Card Reader",
    "description": "USB card reader supports EMV and e-ID cards, widely compatible.",
    "category": "RFID/Smart Card Readers",
    "priceKES": 2450,
    "shop": {
      "name": "SecureChip Africa",
      "contact": "0709 666 999",
      "location": "Ngara, Nairobi"
    },
    "imageUrl": "/images/image10.jpg",
    "tags": ["Smart Card", "Reader", "Secure"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-05-23T09:00:00Z"
  },
  {
    "id": "220",
    "name": "Nomad 18'' Rolling Laptop Bag",
    "description": "Travel-friendly rolling bag with 18'' laptop compartment and rugged wheels.",
    "category": "Laptop Bags / Backpacks",
    "priceKES": 5500,
    "shop": {
      "name": "TravelTech Nairobi",
      "contact": "0719 222 333",
      "location": "Jomo Kenyatta Ave, Nairobi"
    },
    "imageUrl": "/images/image2.jpg",
    "tags": ["Rolling Bag", "18\"", "Travel"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T08:00:00Z"
  },
  {
    "id": "221",
    "name": "Neoprene Stand Sleeve 13''",
    "description": "Protective sleeve with pocket for stand and cables, fits 13'' laptops.",
    "category": "Sleeves & Cases",
    "priceKES": 1250,
    "shop": {
      "name": "Stand & Go Supplies",
      "contact": "0723 555 666",
      "location": "Moi Lane, Nairobi"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["Neoprene", "Stand Sleeve"],
    "rating": 4.3,
    "inStock": true,
    "createdAt": "2025-06-11T08:30:00Z"
  },
  {
    "id": "222",
    "name": "Folio Cover for Galaxy Tab S7",
    "description": "Tri-fold magnetic folio cover with pen holder for Galaxy Tab S7.",
    "category": "Tablet Covers",
    "priceKES": 1800,
    "shop": {
      "name": "Galaxy Gear Kenya",
      "contact": "0791 111 222",
      "location": "Luthuli Street, Nairobi"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["Folio", "Samsung", "Tab S7"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-06-11T09:00:00Z"
  },
  {
    "id": "223",
    "name": "11'' iPad Mini Glass Screen Protector",
    "description": "2.5D tempered glass protector with oleophobic coating.",
    "category": "Screen Protectors",
    "priceKES": 650,
    "shop": {
      "name": "TinyScreen Nairobi",
      "contact": "0701 333 444",
      "location": "Moi Avenue, Nairobi"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["iPad Mini", "Glass Protector"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T09:30:00Z"
  },
  {
    "id": "224",
    "name": "Backlit Universal Keyboard Cover",
    "description": "Glow-in-the-dark silicone protector designed to fit most laptop models.",
    "category": "Keyboard Covers",
    "priceKES": 650,
    "shop": {
      "name": "GlowTech Supplies",
      "contact": "0732 444 555",
      "location": "Revlon Plaza"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["Backlit Key", "Universal"],
    "rating": 4.2,
    "inStock": true,
    "createdAt": "2025-06-11T10:00:00Z"
  },
  {
    "id": "225",
    "name": "Hardshell Laptop Dust Cover",
    "description": "Rigid protective cover shells for MacBook Air and Pro (13).",
    "category": "Dust Covers",
    "priceKES": 900,
    "shop": {
      "name": "ProtectPro Nairobi",
      "contact": "0741 555 666",
      "location": "Hazina Towers"
    },
    "imageUrl": "/images/image10.jpg",
    "tags": ["Hardshell", "Dust Cover"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-06-11T11:00:00Z"
  },
  {
    "id": "226",
    "name": "Lenovo IdeaPad Screen Replacement 14''",
    "description": "OEM replacement screen for Lenovo IdeaPad 14-series.",
    "category": "Laptop Spare Parts (screens, hinges, keyboards)",
    "priceKES": 4800,
    "shop": {
      "name": "Lenovo Parts Kenya",
      "contact": "0702 777 888",
      "location": "Ngara Road"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Lenovo", "Screen", "OEM"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T11:30:00Z"
  },
  {
    "id": "227",
    "name": "Mini Repair Toolkit (24 in 1)",
    "description": "Compact toolkit for quick repairs, includes tweezers and bits.",
    "category": "Repair Toolkits",
    "priceKES": 800,
    "shop": {
      "name": "FixQuick Nairobi",
      "contact": "0765 666 777",
      "location": "Njengi House"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Toolkit", "Compact"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-11T12:00:00Z"
  },
  {
    "id": "228",
    "name": "Noctua NT-H1 3.5g Thermal Paste",
    "description": "High-grade paste for CPU/GPU, easy spread and low thermal resistance.",
    "category": "Thermal Paste",
    "priceKES": 1350,
    "shop": {
      "name": "CoolTech Nairobi",
      "contact": "0710 999 000",
      "location": "Luthuli Lane"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["Noctua", "Thermal Paste"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T12:30:00Z"
  },
  {
    "id": "229",
    "name": "Fluke 177 Digital Multimeter",
    "description": "True RMS handheld multimeter, highly accurate for professionals.",
    "category": "Multimeters",
    "priceKES": 6500,
    "shop": {
      "name": "ProMeasure Nairobi",
      "contact": "0728 222 333",
      "location": "Moi Lane"
    },
    "imageUrl": "/images/image3.jpg",
    "tags": ["Fluke", "Professional", "True RMS"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-06-11T13:00:00Z"
  },
  {
    "id": "230",
    "name": "Ultra Clean Laptop Kit (Multi-Device)",
    "description": "All‑in‑one cleaning kit for laptops, screens, keyboards with alcohol-free spray.",
    "category": "Cleaning Kits",
    "priceKES": 650,
    "shop": {
      "name": "CleanSweep Nairobi",
      "contact": "0739 444 555",
      "location": "Koinange Street"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["Cleaning", "Alcohol-Free"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T13:30:00Z"
  },
  {
    "id": "231",
    "name": "A4Tech PK-920F Webcam",
    "description": "1080p resolution with built‑in stereo mic and auto light correction.",
    "category": "Webcams",
    "priceKES": 2750,
    "shop": {
      "name": "CamTech Nairobi",
      "contact": "0745 777 888",
      "location": "Moi Avenue"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["1080p", "Auto Light"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-06-11T14:00:00Z"
  },
  {
    "id": "232",
    "name": "Anker 7-in-1 USB-C Hub",
    "description": "Compact hub with HDMI, USB-A, SD card reader and power delivery.",
    "category": "USB Hubs / Docking Stations",
    "priceKES": 3200,
    "shop": {
      "name": "Anker Store Nairobi",
      "contact": "0729 888 999",
      "location": "Revlon Plaza"
    },
    "imageUrl": "/images/image10.jpg",
    "tags": ["Anker", "USB-C", "Hub"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T14:30:00Z"
  },
  {
    "id": "233",
    "name": "Rain Design mStand360 Monitor Stand",
    "description": "Aluminum 360° rotating stand compatible with laptops and monitors.",
    "category": "Stands (Laptop/Monitor)",
    "priceKES": 5200,
    "shop": {
      "name": "StandPro Nairobi",
      "contact": "0704 333 444",
      "location": "Tom Mboya Street"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Stand", "Rotating", "Aluminum"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T15:00:00Z"
  },
  {
    "id": "234",
    "name": "Razer Goliathus Extended Chroma Mousepad",
    "description": "RGB gaming mousepad, cloth surface with non-slip rubber base.",
    "category": "Mousepads",
    "priceKES": 2100,
    "shop": {
      "name": "RazerCenter Nairobi",
      "contact": "0734 111 222",
      "location": "Luthuli Lane"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Razer", "RGB", "Gaming"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-06-11T15:30:00Z"
  },
  {
    "id": "235",
    "name": "Klim Wind RGB Laptop Cooling Pad",
    "description": "Adjustable RGB fans with height-adjustable legs and USB hub.",
    "category": "Cooling Pads",
    "priceKES": 2650,
    "shop": {
      "name": "CoolMaster Nairobi",
      "contact": "0712 555 666",
      "location": "Kimathi Street"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["RGB", "Cooling", "Klim"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T16:00:00Z"
  },
  {
    "id": "236",
    "name": "Fitbit Versa 4 Smartwatch",
    "description": "Health-focused smartwatch with GPS, heart rate, and stress tracking.",
    "category": "Smart Watches & Accessories",
    "priceKES": 10500,
    "shop": {
      "name": "Fitbit Kenya",
      "contact": "0725 777 888",
      "location": "Luthuli Avenue"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["Fitbit", "Smartwatch", "Health"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T16:30:00Z"
  },
  {
    "id": "237",
    "name": "ASUS USB-BT500 Bluetooth Adapter",
    "description": "Bluetooth 5.0 USB adapter supporting Windows and Linux.",
    "category": "Bluetooth Adapters",
    "priceKES": 850,
    "shop": {
      "name": "ASUS Showroom Nairobi",
      "contact": "0743 999 000",
      "location": "Moi Lane"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["ASUS", "Bluetooth", "USB"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-11T17:00:00Z"
  },
  {
    "id": "238",
    "name": "Identiv SCR3310v2 USB Smart Card Reader",
    "description": "Compact e-ID and EMV smart card reader, plug & play.",
    "category": "RFID/Smart Card Readers",
    "priceKES": 1950,
    "shop": {
      "name": "SecureID Nairobi",
      "contact": "0702 444 555",
      "location": "Ngara Road"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["Identiv", "Smart Reader", "EMV"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T17:30:00Z"
  },
  {
    "id": "239",
    "name": "Thule Subterra Backpack 23L",
    "description": "Durable, water-resistant backpack with 15'' laptop compartment and multiple pockets.",
    "category": "Laptop Bags / Backpacks",
    "priceKES": 7900,
    "shop": {
      "name": "Thule Nairobi",
      "contact": "0721 888 999",
      "location": "Village Market"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Thule", "Backpack", "Water-Resistant"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T18:00:00Z"
  },
  {
    "id": "240",
    "name": "Tucano Second Skin Sleeve 15''",
    "description": "Stretchable neoprene sleeve for MacBooks and slim laptops.",
    "category": "Sleeves & Cases",
    "priceKES": 1550,
    "shop": {
      "name": "iTech Nairobi",
      "contact": "0711 777 123",
      "location": "Sarit Centre"
    },
    "imageUrl": "/images/image2.jpg",
    "tags": ["Tucano", "Neoprene", "Slim Fit"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T18:10:00Z"
  },
  {
    "id": "241",
    "name": "ESR Rebound Magnetic iPad Case",
    "description": "Auto sleep/wake cover with Apple Pencil holder, fits iPad Air 5.",
    "category": "Tablet Covers",
    "priceKES": 1950,
    "shop": {
      "name": "TabZone Nairobi",
      "contact": "0733 888 234",
      "location": "Two Rivers Mall"
    },
    "imageUrl": "/images/image3.jpg",
    "tags": ["iPad", "ESR", "Magnetic Cover"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T18:20:00Z"
  },
  {
    "id": "242",
    "name": "OnePlus 11 Screen Guard (Matte)",
    "description": "Matte finish glass screen protector with fingerprint unlock support.",
    "category": "Screen Protectors",
    "priceKES": 750,
    "shop": {
      "name": "MobileGlass Nairobi",
      "contact": "0799 666 888",
      "location": "The Junction Mall"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Matte", "OnePlus", "Glass"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-06-11T18:30:00Z"
  },
  {
    "id": "243",
    "name": "Transparent Keyboard Skin MacBook Pro 16''",
    "description": "Ultra-thin TPU cover with US layout for 2021 MacBook Pro.",
    "category": "Keyboard Covers",
    "priceKES": 550,
    "shop": {
      "name": "KeyGuard Nairobi",
      "contact": "0744 333 221",
      "location": "Yaya Centre"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["MacBook", "TPU", "Ultra-thin"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-11T18:40:00Z"
  },
  {
    "id": "244",
    "name": "Acer Aspire Dust Cover (Set)",
    "description": "Protective dust cover set for keyboard, screen, and ports.",
    "category": "Dust Covers",
    "priceKES": 900,
    "shop": {
      "name": "DustShield Kenya",
      "contact": "0789 222 555",
      "location": "Hurlingham"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["Acer", "Dust Protection", "Set"],
    "rating": 4.3,
    "inStock": true,
    "createdAt": "2025-06-11T18:50:00Z"
  },
  {
    "id": "245",
    "name": "Dell Inspiron 15 Palmrest & Keyboard Set",
    "description": "Complete palmrest with keyboard replacement kit for Inspiron 15 series.",
    "category": "Laptop Spare Parts (screens, hinges, keyboards)",
    "priceKES": 4800,
    "shop": {
      "name": "Dell Spares Nairobi",
      "contact": "0720 456 789",
      "location": "Moi Avenue"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["Dell", "Palmrest", "Keyboard Set"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T19:00:00Z"
  },
  {
    "id": "246",
    "name": "iFixit Pro Tech Toolkit",
    "description": "Premium toolkit with 64-bit driver kit, spudgers, tweezers and more.",
    "category": "Repair Toolkits",
    "priceKES": 6700,
    "shop": {
      "name": "FixPro Nairobi",
      "contact": "0732 111 222",
      "location": "Koinange Street"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["iFixit", "Professional", "64-bit"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-06-11T19:10:00Z"
  },
  {
    "id": "247",
    "name": "Thermal Grizzly Kryonaut 1g",
    "description": "Top-tier thermal paste for overclockers and gaming rigs.",
    "category": "Thermal Paste",
    "priceKES": 1350,
    "shop": {
      "name": "PC Heat Solutions",
      "contact": "0711 999 888",
      "location": "Computer Pride Centre"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["Grizzly", "Overclocking", "Performance"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T19:20:00Z"
  },
  {
    "id": "248",
    "name": "Mastech MS8229 Multimeter",
    "description": "Digital multimeter with sound level, light, humidity, and temperature sensors.",
    "category": "Multimeters",
    "priceKES": 5800,
    "shop": {
      "name": "TechMeasure Kenya",
      "contact": "0790 888 555",
      "location": "Ngong Road"
    },
    "imageUrl": "/images/image10.jpg",
    "tags": ["Mastech", "Multifunction", "Digital"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-11T19:30:00Z"
  },
  {
    "id": "249",
    "name": "Magic Cleaning Gel",
    "description": "Reusable dust cleaning slime for keyboards, vents, and car dashboards.",
    "category": "Cleaning Kits",
    "priceKES": 400,
    "shop": {
      "name": "CleanBits Nairobi",
      "contact": "0788 123 444",
      "location": "Tom Mboya Street"
    },
    "imageUrl": "/images/image1.jpg",
    "tags": ["Gel", "Reusable", "Slime"],
    "rating": 4.4,
    "inStock": true,
    "createdAt": "2025-06-11T19:40:00Z"
  },
  {
    "id": "250",
    "name": "Logitech C920e HD Webcam",
    "description": "Business webcam with 1080p resolution and dual mics.",
    "category": "Webcams",
    "priceKES": 9900,
    "shop": {
      "name": "Logitech Kenya",
      "contact": "0721 234 567",
      "location": "Luthuli Avenue"
    },
    "imageUrl": "/images/image2.jpg",
    "tags": ["Logitech", "1080p", "Business"],
    "rating": 4.8,
    "inStock": true,
    "createdAt": "2025-06-11T19:50:00Z"
  },
  {
    "id": "251",
    "name": "UGREEN USB-C Multifunction Hub",
    "description": "Supports HDMI, USB 3.0, RJ45, microSD and PD charging.",
    "category": "USB Hubs / Docking Stations",
    "priceKES": 4200,
    "shop": {
      "name": "UGREEN Nairobi",
      "contact": "0799 666 111",
      "location": "Sarova Stanley"
    },
    "imageUrl": "/images/image3.jpg",
    "tags": ["UGREEN", "RJ45", "USB-C"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T20:00:00Z"
  },
  {
    "id": "252",
    "name": "ErgoFold Laptop Stand",
    "description": "Foldable aluminum laptop stand with adjustable height and angle.",
    "category": "Stands (Laptop/Monitor)",
    "priceKES": 2950,
    "shop": {
      "name": "ErgoTech Nairobi",
      "contact": "0723 888 999",
      "location": "Ngong Lane"
    },
    "imageUrl": "/images/image4.jpg",
    "tags": ["Foldable", "Aluminum", "Ergonomic"],
    "rating": 4.6,
    "inStock": true,
    "createdAt": "2025-06-11T20:10:00Z"
  },
  {
    "id": "253",
    "name": "SteelSeries QcK Gaming Mousepad XL",
    "description": "Large surface with micro-woven cloth for precision movement.",
    "category": "Mousepads",
    "priceKES": 2100,
    "shop": {
      "name": "GameEdge Nairobi",
      "contact": "0701 567 432",
      "location": "Prestige Plaza"
    },
    "imageUrl": "/images/image5.jpg",
    "tags": ["SteelSeries", "Micro-woven", "XL"],
    "rating": 4.9,
    "inStock": true,
    "createdAt": "2025-06-11T20:20:00Z"
  },
  {
    "id": "254",
    "name": "TopMate C11 RGB Laptop Cooling Pad",
    "description": "Six adjustable fans with RGB lighting and LCD speed control.",
    "category": "Cooling Pads",
    "priceKES": 3850,
    "shop": {
      "name": "LaptopAir Kenya",
      "contact": "0714 321 987",
      "location": "T-Mall Nairobi"
    },
    "imageUrl": "/images/image6.jpg",
    "tags": ["TopMate", "RGB Fans", "Cooling"],
    "rating": 4.7,
    "inStock": true,
    "createdAt": "2025-06-11T20:30:00Z"
  },
  {
    "id": "255",
    "name": "Huawei Band 9",
    "description": "Fitness smart band with AMOLED display and SpO2 sensor.",
    "category": "Smart Watches & Accessories",
    "priceKES": 7600,
    "shop": {
      "name": "Huawei Kenya",
      "contact": "0739 432 567",
      "location": "Sarit Centre"
    },
    "imageUrl": "/images/image7.jpg",
    "tags": ["Huawei", "Smartband", "SpO2"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T20:40:00Z"
  },
  {
    "id": "256",
    "name": "TP-Link UB400 Bluetooth 4.0 Nano Adapter",
    "description": "Compact nano adapter for PC, supports Bluetooth peripherals.",
    "category": "Bluetooth Adapters",
    "priceKES": 650,
    "shop": {
      "name": "TP-Link Nairobi",
      "contact": "0717 234 111",
      "location": "Ngara Lane"
    },
    "imageUrl": "/images/image8.jpg",
    "tags": ["TP-Link", "Nano", "Bluetooth 4.0"],
    "rating": 4.3,
    "inStock": true,
    "createdAt": "2025-06-11T20:50:00Z"
  },
  {
    "id": "257",
    "name": "ACS ACR38 Smart Card Reader",
    "description": "Compact reader compatible with smart IDs, SIM cards and EMV cards.",
    "category": "RFID/Smart Card Readers",
    "priceKES": 2250,
    "shop": {
      "name": "CardTech Nairobi",
      "contact": "0755 123 456",
      "location": "Luthuli Avenue"
    },
    "imageUrl": "/images/image9.jpg",
    "tags": ["ACS", "Smart Card", "Reader"],
    "rating": 4.5,
    "inStock": true,
    "createdAt": "2025-06-11T21:00:00Z"
  }
];
export const categories = Array.from(
  new Set(products.map((product) => product.category))
);