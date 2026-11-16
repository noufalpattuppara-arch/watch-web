// ÉLVOR - Standalone Luxury Watch E-Commerce Application Bundle
// ------------------------------------------
// File: js/data/products.js
// ------------------------------------------
// VOUVRY GENÈVE - Luxury Watch Catalog Data
// Inspired by Swiss Haute Horlogerie & Tissot Reference Design

const PRODUCTS = [
  {
    id: "rado-hyperchrome-r32185153",
    name: "HYPERCHROME",
    model: "SKU: r32185153",
    category: "Men",
    brand: "Rado",
    style: "Bronze Tachymeter Chronograph Watch",
    specs: "Rado • 45 mm • High-Tech Bronze Ceramic • Swiss Chronograph",
    price: 1212100,
    priceFormatted: "MRP ₹ 1,212,100.00",
    badge: "HYPERCHROME",
    image: "assets/images/vouvry-bronze-chronograph.webp",
    gallery: [
      "assets/images/vouvry-bronze-chronograph.webp",
      "assets/images/watch-gold-classic.svg",
      "assets/images/vouvry-classic-steel-roman.webp"
    ],
    description: "The Rado HYPERCHROME Chronograph (SKU: r32185153) is crafted in cupro-aluminium bronze and high-tech matte ceramic. Features a warm chocolate sunray dial with triple sub-dial precision counters, high-contrast gold hands, a ceramic tachymeter bezel calibrated to 600 units, and an integrated bronze link bracelet.",
    details: {
      caseSize: "45.00 mm",
      caseThickness: "13.00 mm",
      caseMaterial: "Cupro-Aluminium Bronze PVD & High-Tech Ceramic Bezel",
      crystal: "Domed Scratch-resistant Sapphire Crystal with Double Anti-reflective Coating",
      dialColor: "Sunray Chocolate Brown with Rose Gold Applied Indices",
      movement: "Swiss Precision Chronograph Automatic Calibre (28,800 vph)",
      powerReserve: "45 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Solid 3-Link Bronze PVD Bracelet with Titanium 3-Fold Clasp",
      weight: "152 g",
      origin: "Swiss Made",
      warranty: "5-Year International Rado Warranty"
    }
  },
  {
    id: "rolex-gmt-master-bruce-wayne",
    name: "Rolex GMT-Master II \"Bruce Wayne\"",
    model: "Ref: 126710GRNR",
    category: "Rolex",
    style: "Oyster Steel GMT Master Watch",
    specs: "40 mm • Oystersteel • Black & Grey Cerachrom Bezel",
    price: 1980774,
    priceFormatted: "₹ 19,80,774.00",
    badge: "Bruce Wayne",
    image: "assets/images/vouvry-gmt-master-steel.webp",
    gallery: [
      "assets/images/vouvry-gmt-master-steel.webp",
      "assets/images/watch-steel-diver.svg",
      "assets/images/watch-gold-classic.svg"
    ],
    description: "The Rolex GMT-Master II 'Bruce Wayne' (Ref: 126710GRNR) features a bidirectional rotatable bezel with a 24-hour graduated two-tone Cerachrom insert in black and grey ceramic. Driven by the Calibre 3285 movement with Parachrom hairspring, it offers dual time-zone tracking, an arrow-tipped green 24-hour GMT hand, date magnifier at 3 o'clock, and an Oystersteel bracelet with an Oysterlock safety clasp.",
    details: {
      caseSize: "40.00 mm",
      caseThickness: "12.10 mm",
      caseMaterial: "Oystersteel (904L Superalloy Corrosion-resistant Steel)",
      crystal: "Scratch-resistant Sapphire with Cyclops Lens Over Date",
      dialColor: "Gloss Black Lacquer with Chromalight Luminous Blue Glow Markers",
      movement: "Rolex Calibre 3285 Perpetual (Superlative Chronometer Officially Certified)",
      powerReserve: "Approximately 70 Hours Continuous Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft) with Triplock Screw-Down Crown",
      strap: "Solid 3-Link Oystersteel Bracelet with Folding Oysterlock Safety Clasp & Easylink 5mm Comfort Extension",
      weight: "142 g",
      origin: "Swiss Made (Geneva)",
      warranty: "5-Year International Rolex Warranty"
    }
  },
  {
    id: "rado-captain-cook-chronograph-300m",
    name: "Rado Captain Cook Chronograph 300M",
    model: "Ref. R32145318",
    category: "STANDARD",
    brand: "Rado",
    style: "Emerald Diver Chronograph Watch",
    specs: "43 mm • Swiss Automatic Chronograph • 300m Diver",
    price: 185000,
    priceFormatted: "₹ 1,85,000.00",
    badge: "Captain Cook",
    image: "assets/images/vouvry-emerald-diver-chrono.jpg",
    gallery: [
      "assets/images/vouvry-emerald-diver-chrono.jpg",
      "assets/images/watch-steel-diver.svg",
      "assets/images/vouvry-astronomic-quantieme-black.webp"
    ],
    description: "The Rado Captain Cook Chronograph 300M (Ref. R32145318) is an elite Swiss deep-sea diver chronograph. Features an inward-sloping high-tech ceramic bezel in racing emerald green, sunray green dial with broad-arrow luminous hands, twin chronograph registers, screw-down security pushers, and a certified 300m (1000ft) water-resistant case.",
    details: {
      caseSize: "43.00 mm",
      caseThickness: "14.50 mm",
      caseMaterial: "Marine-Grade 316L Stainless Steel & High-Tech Ceramic Bezel",
      crystal: "Box-shaped Scratch-resistant Sapphire Crystal with Anti-reflective Coating",
      dialColor: "Sunray Emerald Green with Super-LumiNova BGW9 Applied Markers",
      movement: "Swiss Automatic Chronograph Calibre R0828 (28,800 vph)",
      powerReserve: "59 Hours Power Reserve",
      waterResistance: "30 bar (300 m / 1,000 ft) with Screw-Down Crown & Pushers",
      strap: "Solid 3-Link Steel Bracelet with Diver's Extension & Butterfly Clasp",
      weight: "160 g",
      origin: "Swiss Made",
      warranty: "5-Year International Rado Warranty"
    }
  },
  {
    id: "seiko-5-sports-edo-purple-hdb003k1",
    name: "Seiko 5 Sports SKX Series in Edo Purple",
    model: "SKU: hdb003k1",
    category: "Seiko",
    brand: "Seiko",
    style: "Edo Purple Diver Automatic Watch",
    specs: "38 mm • Automatic Calibre 4R36 • Edo Purple Dial",
    price: 195000,
    priceFormatted: "₹ 1,95,000.00",
    badge: "5 Sports",
    image: "assets/images/seiko-5-sports-edo-purple.webp",
    gallery: [
      "assets/images/seiko-5-sports-edo-purple.webp",
      "assets/images/watch-steel-diver.svg",
      "assets/images/vouvry-classic-steel-roman.webp"
    ],
    description: "The Seiko 5 Sports SKX Series in Edo Purple (SKU: hdb003k1) celebrates historic Japanese artisanal culture with modern mechanical dive styling. Features a radiant Edo Purple sunray dial, gold-toned 'Automatic' calligraphy, iconic day-date display at 3 o'clock, high-legibility Lumibrite indices, unidirectional rotating bezel, and an ergonomic 4 o'clock crown with a solid stainless steel bracelet.",
    details: {
      caseSize: "38.00 mm",
      caseThickness: "12.10 mm",
      caseMaterial: "Solid 316L Stainless Steel with Unidirectional Rotating Diver Bezel",
      crystal: "Hardlex Crystal",
      dialColor: "Sunray Edo Purple with Lumibrite Luminous Indices & Hands",
      movement: "Seiko Automatic Calibre 4R36 (Manual Winding & Hacking)",
      powerReserve: "Approximately 41 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Stainless Steel 3-Link Bracelet with Three-Fold Clasp & Secure Lock",
      weight: "140 g",
      origin: "Japan Precision Horology",
      warranty: "3-Year International Seiko Warranty"
    }
  },
  {
    id: "tissot-classic-dream-t129",
    name: "Tissot Classic Dream",
    model: "Ref. T129.410.11.013.00",
    category: "Classic",
    brand: "Tissot",
    style: "Silver Roman Classic Watch",
    specs: "42 mm • Swiss Quartz Calibre • White Roman Dial",
    price: 88800,
    priceFormatted: "₹ 88,800.00",
    badge: "Classic Dream",
    image: "assets/images/vouvry-classic-steel-roman.webp",
    gallery: [
      "assets/images/vouvry-classic-steel-roman.webp",
      "assets/images/watch-classic-roman.svg",
      "assets/images/vouvry-bronze-chronograph.webp"
    ],
    description: "The Tissot Classic Dream (Model/Reference T129.410.11.013.00) embodies timeless sophistication. Featuring an opalescent white dial adorned with classic Roman numerals, faceted dauphine hands, date aperture at 3 o'clock, and an exquisitely articulated 5-link 316L stainless steel bracelet.",
    details: {
      caseSize: "42.00 mm",
      caseThickness: "8.10 mm",
      caseMaterial: "316L Stainless Steel Case",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "White with Black Roman Numerals",
      movement: "Swiss Precision Quartz Calibre ETA F06.115",
      powerReserve: "EOL (Battery End-of-Life Indicator)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Stainless Steel 5-Link Bracelet with Butterfly Clasp & Push-Buttons",
      weight: "135 g",
      origin: "Swiss Made",
      warranty: "2-Year International Tissot Warranty"
    }
  },
  {
    id: "versace-v-galaxy-moonphase-ve0k00525",
    name: "Versace V-Galaxy Moonphase Multifunction",
    model: "Ref. VE0K00525",
    category: "Men",
    brand: "Versace",
    style: "Gunmetal Aventurine Moonphase Watch",
    specs: "43 mm • Gunmetal IP Stainless Steel • Moonphase & Full Calendar",
    price: 154995,
    priceFormatted: "₹ 1,54,995.00",
    badge: "V-Galaxy Moonphase",
    image: "assets/images/versace-v-galaxy-moonphase.png",
    gallery: [
      "assets/images/versace-v-galaxy-moonphase.png",
      "assets/images/versace-v-galaxy-moonphase.jpg"
    ],
    description: "The Versace V-Galaxy Moonphase (Ref. VE0K00525) is an exceptional Italian haute couture timepiece crafted in gunmetal grey IP stainless steel. Features a mesmerizing glittering black aventurine starfield dial adorned with the iconic 3D golden Medusa head at 12 o'clock, day and date subsidiary dials, pointer month calendar on the engraved bezel, and an authentic astronomical moonphase aperture at 6 o'clock.",
    details: {
      caseSize: "43.00 mm",
      caseThickness: "12.00 mm",
      caseMaterial: "Solid 316L Stainless Steel with Gunmetal Grey IP Finish & Engraved Month Bezel",
      crystal: "Scratch-resistant Anti-reflective Sapphire Crystal",
      dialColor: "Glittering Black Aventurine Starfield Dial with 3D Gold Medusa & Luminous Accents",
      movement: "Swiss Precision Multifunction Calibre Ronda 706B.1 (Moonphase, Day, Date & Month)",
      powerReserve: "Long-Life Swiss Battery Power (approx. 45 Months)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Integrated Gunmetal Grey IP Stainless Steel 3-Link Bracelet with Butterfly Deployment Clasp",
      weight: "172 g",
      origin: "Swiss Made",
      warranty: "2-Year International Versace Warranty"
    }
  },
  {
    id: "tissot-classic-dream-leather-t129",
    name: "Tissot Classic Dream Leather Watch",
    model: "Ref. T129.410.16.013.00",
    category: "Classic",
    brand: "Tissot",
    style: "Silver Roman Alligator Leather Watch",
    specs: "42 mm • Swiss Quartz Calibre • White Roman Dial & Alligator Leather",
    price: 30500,
    priceFormatted: "₹ 30,500.00",
    badge: "Classic Dream",
    image: "assets/images/tissot-classic-dream-leather-trans.png",
    gallery: [
      "assets/images/tissot-classic-dream-leather-trans.png",
      "assets/images/tissot-classic-dream-leather.png"
    ],
    description: "The Tissot Classic Dream Leather Watch (Ref. T129.410.16.013.00) embodies pure Swiss horological refinement. Featuring a minimalist porcelain-white dial adorned with classic black Roman numerals, faceted dauphine hands, a discrete date aperture at 3 o'clock, and an exquisite mahogany brown alligator-grain embossed leather strap with a quick-release system.",
    details: {
      caseSize: "42.00 mm",
      caseThickness: "8.10 mm",
      caseMaterial: "Solid 316L Stainless Steel Case",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "White with Classic Black Roman Numerals & Date Display",
      movement: "Swiss Precision Quartz Calibre ETA F06.115 (EOL Battery End-of-Life Indicator)",
      powerReserve: "Long-Life Swiss Battery Power (approx. 68 Months)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Embossed Mahogany Brown Alligator-Grain Leather Strap with Standard Steel Buckle",
      weight: "130 g",
      origin: "Swiss Made",
      warranty: "2-Year International Tissot Warranty"
    }
  },
  {
    id: "seiko-mod-daytona-ice-blue-diamond",
    name: "Seiko Mod Daytona Ice Blue Diamond Chronograph",
    model: "Ref. SKX-MOD-ICEBLUE-DIA",
    category: "Seiko",
    brand: "Seiko",
    style: "Ice Blue Pavé Diamond Baguette Chronograph",
    specs: "40 mm • Seiko VK63 Meca-Quartz • Baguette Diamond Bezel & Pavé Dial",
    price: 24999,
    priceFormatted: "₹ 24,999.00",
    badge: "Bespoke Diamond",
    image: "assets/images/seiko-mod-daytona-ice-blue-diamond.png",
    gallery: [
      "assets/images/seiko-mod-daytona-ice-blue-diamond.png",
      "assets/images/seiko-mod-daytona-ice-blue-diamond.jpg"
    ],
    description: "The Seiko Mod Daytona Ice Blue Diamond Chronograph (Ref. SKX-MOD-ICEBLUE-DIA) is an extraordinary custom haute joaillerie timepiece. Powered by the reliable Seiko VK63 Meca-Quartz chronograph movement with sweeping mechanical seconds. Featuring an iced-out full pavé diamond dial, triple ice blue snailed chronograph counters, blued steel hands, a dazzling factory-cut baguette diamond bezel, and a solid 316L stainless steel Oyster bracelet with polished center links.",
    details: {
      caseSize: "40.00 mm",
      caseThickness: "12.20 mm",
      caseMaterial: "Solid 316L Stainless Steel with Baguette Diamond Gem-Set Bezel",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "Full Pavé Diamond Dial with Triple Ice Blue Counters & Blued Steel Hands",
      movement: "Seiko Calibre VK63 Meca-Quartz (Sweeping 1/5th Sec Chronograph)",
      powerReserve: "High-Performance Battery (approx. 3 Years)",
      waterResistance: "5 bar (50 m / 165 ft) with Screw-Down Crown & Pushers",
      strap: "Solid 316L Stainless Steel Oyster 3-Link Bracelet with Polished Center Links",
      weight: "148 g",
      origin: "Custom Japanese Horology",
      warranty: "2-Year International Warranty"
    }
  },
  {
    id: "lacoste-boston-chronograph-2011346",
    name: "Lacoste Boston Chronograph",
    model: "Ref. 2011346",
    category: "Lacoste",
    brand: "Lacoste",
    style: "Emerald Green Tachymeter Chronograph Watch",
    specs: "42 mm • Forest Green Sunray Dial • Tachymeter Bezel",
    price: 15600,
    priceFormatted: "₹ 15,600.00",
    badge: "Boston Series",
    image: "assets/images/lacoste-boston-green-chronograph.png",
    gallery: [
      "assets/images/lacoste-boston-green-chronograph.png",
      "assets/images/lacoste-boston-green-chronograph.webp",
      "assets/images/lacoste-boston-green-chronograph.jpg"
    ],
    description: "The Lacoste Boston Chronograph (Ref. 2011346) exudes athletic refinement with contemporary urban flair. Featuring an eye-catching brushed forest green dial adorned with the signature white Lacoste crocodile emblem, triple multi-function sub-dials, date window, an outer forest green tachymeter scale bezel, and a sculpted 3-link stainless steel bracelet with push-button deployment.",
    details: {
      caseSize: "42.00 mm",
      caseThickness: "10.50 mm",
      caseMaterial: "Solid 316L Stainless Steel Case with Forest Green Tachymeter Bezel",
      crystal: "Hardened Scratch-resistant Mineral Crystal",
      dialColor: "Sunray Forest Green with Applied Polished Silver Indices & White Crocodile",
      movement: "Precision Multi-Function Quartz Chronograph",
      powerReserve: "Long-Life Battery (approx. 3 Years)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Stainless Steel 3-Link Bracelet with Push-Button Deployment Clasp",
      weight: "140 g",
      origin: "Lacoste Timepieces",
      warranty: "2-Year International Lacoste Warranty"
    }
  },
  {
    id: "rado-diastar-original-skeleton-automatic",
    name: "Rado DiaStar Original Skeleton Automatic",
    model: "Ref. R12162153",
    category: "Men",
    brand: "Rado",
    style: "Ceramos Hardmetal Skeleton Automatic Watch",
    specs: "38 mm • Ceramos™ Hardmetal • Open-Heart Skeleton & 80h Power Reserve",
    price: 238700,
    priceFormatted: "₹ 2,38,700.00",
    badge: "DiaStar Original",
    image: "assets/images/rado-diastar-original-skeleton.png",
    gallery: [
      "assets/images/rado-diastar-original-skeleton.png",
      "assets/images/rado-diastar-original-skeleton.jpg",
      "assets/images/rado-diastar-original-skeleton.webp"
    ],
    description: "The Rado DiaStar Original Skeleton (Ref. R12162153) celebrates six decades of revolutionary scratch-proof design. Forged with a mirror-polished Ceramos™ hardmetal bezel and a 316L stainless steel monobloc case. Showcasing an anthracite open-worked skeleton dial revealing the Swiss Automatic Calibre R808 with gold-toned train wheels, an antimagnetic Nivachron™ hairspring, 80-hour extended power reserve, faceted sapphire crystal, and an iconic articulated H-link stainless steel bracelet.",
    details: {
      caseSize: "38.00 mm x 45.00 mm",
      caseThickness: "11.90 mm",
      caseMaterial: "Polished Ceramos™ Hardmetal Bezel & 316L Stainless Steel Case",
      crystal: "Faceted Scratch-resistant Sapphire Crystal with Anti-reflective Coating",
      dialColor: "Anthracite Open-Heart Skeleton with Yellow Gold-Plated Indices & Moving Anchor",
      movement: "Swiss Automatic Calibre R808 Skeleton (Nivachron™ Antimagnetic Hairspring)",
      powerReserve: "80 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Solid Stainless Steel H-Link Bracelet with Triple-Fold Titanium Deployment Clasp",
      weight: "148 g",
      origin: "Swiss Made",
      warranty: "5-Year International Rado Warranty"
    }
  },
  {
    id: "seiko-prospex-speedtimer-ssc947p1",
    name: "Seiko Prospex Speedtimer Solar Chronograph",
    model: "SKU: ssc947p1",
    category: "Men",
    brand: "Seiko",
    style: "Pepsi Tachymeter Solar Chronograph Watch",
    specs: "41.4 mm • Solar Chronograph Calibre V192 • Pepsi Tachymeter",
    price: 3440700,
    priceFormatted: "MRP ₹ 34,40,700.00",
    badge: "PROSPEX",
    image: "assets/images/seiko-prospex-ssc947p1.png",
    gallery: [
      "assets/images/seiko-prospex-ssc947p1.png",
      "assets/images/seiko-prospex-ssc947p1.jpg",
      "assets/images/seiko-prospex-ssc947p1.webp"
    ],
    description: "The Seiko Prospex Speedtimer (SKU: ssc947p1) pays tribute to the legendary 1969 Speedtimer. Powered by Seiko's Solar Calibre V192, featuring an iconic golden-yellow sunray dial, triple black chronograph registers, Pepsi blue and red tachymeter bezel, Lumibrite hands and markers, and an articulated 3-link stainless steel bracelet.",
    details: {
      caseSize: "41.40 mm",
      caseThickness: "13.00 mm",
      caseMaterial: "Solid 316L Stainless Steel Case & Pepsi Blue/Red Tachymeter Bezel",
      crystal: "Curved Scratch-Resistant Sapphire Crystal with Anti-Reflective Coating",
      dialColor: "Sunray Golden Yellow with Triple Black Sub-dials & Lumibrite Markers",
      movement: "Seiko Solar Quartz Chronograph Calibre V192 (Powered by Any Light Source)",
      powerReserve: "Approx. 6 Months on Full Solar Charge (with Power Reserve Indicator)",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Solid Stainless Steel 3-Link Bracelet with Three-Fold Clasp & Push Button Release",
      weight: "164 g",
      origin: "Japan Precision Horology",
      warranty: "3-Year International Seiko Warranty"
    }
  },
  {
    id: "rolex-cosmograph-daytona-126506-0002",
    name: "Rolex Cosmograph Daytona 126506-0002",
    model: "Ref. 126506-0002",
    category: "Rolex",
    brand: "Rolex",
    style: "Platinum Ice Blue Chronograph Watch",
    specs: "40 mm • Solid 950 Platinum • Ice Blue Dial & Chestnut Brown Bezel",
    price: 35471600,
    priceFormatted: "₹ 3,54,71,600.00",
    badge: "Oyster Platinum",
    image: "assets/images/rolex-daytona-platinum-126506.png",
    gallery: [
      "assets/images/rolex-daytona-platinum-126506.png",
      "assets/images/rolex-daytona-platinum-126506.jpg",
      "assets/images/rolex-daytona-platinum-126506.webp"
    ],
    description: "The Rolex Cosmograph Daytona (Ref. 126506-0002) is the pinnacle of horological prestige, sculpted in solid 950 platinum with an unmistakable ice blue dial—a hallmark reserved exclusively for Rolex platinum timepieces. Features a monobloc chestnut brown Cerachrom ceramic tachymetric bezel with platinum PVD numerals, three snailed counters, and powered by the cutting-edge Rolex Calibre 4131 perpetual chronograph movement with Chronergy escapement and an articulated solid platinum Oyster bracelet.",
    details: {
      caseSize: "40.00 mm",
      caseThickness: "11.90 mm",
      caseMaterial: "Solid 950 Platinum with Monobloc Chestnut Brown Cerachrom Bezel in Ceramic",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "Ice Blue Sunray with Chestnut Brown Snailed Chronograph Counters & Chromalight Lume",
      movement: "Rolex Calibre 4131 Perpetual Mechanical Chronograph (Superlative Chronometer Officially Certified)",
      powerReserve: "Approximately 72 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft) with Triplock Triple Waterproofness System",
      strap: "Solid 950 Platinum Oyster 3-Link Bracelet with Folding Oysterlock Safety Clasp & Easylink 5mm Extension",
      weight: "283 g",
      origin: "Swiss Made (Geneva)",
      warranty: "5-Year International Rolex Warranty"
    }
  }
];

const NEW_ARRIVALS = [
  {
    id: "rolex-cosmograph-daytona-126506-0002-new",
    name: "Rolex Cosmograph Daytona 126506-0002",
    model: "Ref. 126506-0002",
    category: "Rolex",
    brand: "Rolex",
    specs: "40 mm • Solid 950 Platinum • Ice Blue Dial & Chestnut Brown Bezel",
    price: 35471600,
    priceFormatted: "₹ 3,54,71,600.00",
    date: "November 16, 2026",
    badge: "Oyster Platinum",
    image: "assets/images/rolex-daytona-platinum-126506.png",
    gallery: [
      "assets/images/rolex-daytona-platinum-126506.png",
      "assets/images/rolex-daytona-platinum-126506.jpg",
      "assets/images/rolex-daytona-platinum-126506.webp"
    ],
    description: "The Rolex Cosmograph Daytona (Ref. 126506-0002) is the pinnacle of horological prestige, sculpted in solid 950 platinum with an unmistakable ice blue dial—a hallmark reserved exclusively for Rolex platinum timepieces. Features a monobloc chestnut brown Cerachrom ceramic tachymetric bezel with platinum PVD numerals, three snailed counters, and powered by the cutting-edge Rolex Calibre 4131 perpetual chronograph movement with Chronergy escapement and an articulated solid platinum Oyster bracelet.",
    details: {
      caseSize: "40.00 mm",
      caseThickness: "11.90 mm",
      caseMaterial: "Solid 950 Platinum with Monobloc Chestnut Brown Cerachrom Bezel in Ceramic",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "Ice Blue Sunray with Chestnut Brown Snailed Chronograph Counters & Chromalight Lume",
      movement: "Rolex Calibre 4131 Perpetual Mechanical Chronograph (Superlative Chronometer Officially Certified)",
      powerReserve: "Approximately 72 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft) with Triplock Triple Waterproofness System",
      strap: "Solid 950 Platinum Oyster 3-Link Bracelet with Folding Oysterlock Safety Clasp & Easylink 5mm Extension",
      weight: "283 g",
      origin: "Swiss Made (Geneva)",
      warranty: "5-Year International Rolex Warranty"
    }
  },
  {
    id: "seiko-prospex-speedtimer-ssc947p1-new",
    name: "Seiko Prospex Speedtimer Solar Chronograph",
    model: "SKU: ssc947p1",
    category: "Men",
    brand: "Seiko",
    specs: "41.4 mm • Solar Chronograph Calibre V192 • Pepsi Tachymeter",
    price: 3440700,
    priceFormatted: "MRP ₹ 34,40,700.00",
    date: "November 16, 2026",
    badge: "PROSPEX",
    image: "assets/images/seiko-prospex-ssc947p1.png",
    gallery: [
      "assets/images/seiko-prospex-ssc947p1.png",
      "assets/images/seiko-prospex-ssc947p1.jpg",
      "assets/images/seiko-prospex-ssc947p1.webp"
    ],
    description: "The Seiko Prospex Speedtimer (SKU: ssc947p1) pays tribute to the legendary 1969 Speedtimer. Powered by Seiko's Solar Calibre V192, featuring an iconic golden-yellow sunray dial, triple black chronograph registers, Pepsi blue and red tachymeter bezel, Lumibrite hands and markers, and an articulated 3-link stainless steel bracelet.",
    details: {
      caseSize: "41.40 mm",
      caseThickness: "13.00 mm",
      caseMaterial: "Solid 316L Stainless Steel Case & Pepsi Blue/Red Tachymeter Bezel",
      crystal: "Curved Scratch-Resistant Sapphire Crystal with Anti-Reflective Coating",
      dialColor: "Sunray Golden Yellow with Triple Black Sub-dials & Lumibrite Markers",
      movement: "Seiko Solar Quartz Chronograph Calibre V192 (Powered by Any Light Source)",
      powerReserve: "Approx. 6 Months on Full Solar Charge (with Power Reserve Indicator)",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Solid Stainless Steel 3-Link Bracelet with Three-Fold Clasp & Push Button Release",
      weight: "164 g",
      origin: "Japan Precision Horology",
      warranty: "3-Year International Seiko Warranty"
    }
  },
  {
    id: "rado-diastar-original-skeleton-new",
    name: "Rado DiaStar Original Skeleton Automatic",
    model: "Ref. R12162153",
    category: "Rado",
    brand: "Rado",
    specs: "38 mm • Ceramos™ Hardmetal • Open-Heart Skeleton & 80h Power Reserve",
    price: 238700,
    priceFormatted: "₹ 2,38,700.00",
    date: "November 16, 2026",
    badge: "DiaStar Original",
    image: "assets/images/rado-diastar-original-skeleton.png",
    gallery: [
      "assets/images/rado-diastar-original-skeleton.png",
      "assets/images/rado-diastar-original-skeleton.jpg",
      "assets/images/rado-diastar-original-skeleton.webp"
    ],
    description: "The Rado DiaStar Original Skeleton (Ref. R12162153) celebrates six decades of revolutionary scratch-proof design. Forged with a mirror-polished Ceramos™ hardmetal bezel and a 316L stainless steel monobloc case. Showcasing an anthracite open-worked skeleton dial revealing the Swiss Automatic Calibre R808 with gold-toned train wheels, an antimagnetic Nivachron™ hairspring, 80-hour extended power reserve, faceted sapphire crystal, and an iconic articulated H-link stainless steel bracelet.",
    details: {
      caseSize: "38.00 mm x 45.00 mm",
      caseThickness: "11.90 mm",
      caseMaterial: "Polished Ceramos™ Hardmetal Bezel & 316L Stainless Steel Case",
      crystal: "Faceted Scratch-resistant Sapphire Crystal with Anti-reflective Coating",
      dialColor: "Anthracite Open-Heart Skeleton with Yellow Gold-Plated Indices & Moving Anchor",
      movement: "Swiss Automatic Calibre R808 Skeleton (Nivachron™ Antimagnetic Hairspring)",
      powerReserve: "80 Hours Power Reserve",
      waterResistance: "10 bar (100 m / 330 ft)",
      strap: "Solid Stainless Steel H-Link Bracelet with Triple-Fold Titanium Deployment Clasp",
      weight: "148 g",
      origin: "Swiss Made",
      warranty: "5-Year International Rado Warranty"
    }
  },
  {
    id: "lacoste-boston-chronograph-2011346-new",
    name: "Lacoste Boston Chronograph",
    model: "Ref. 2011346",
    category: "Lacoste",
    brand: "Lacoste",
    specs: "42 mm • Forest Green Sunray Dial • Tachymeter Bezel",
    price: 15600,
    priceFormatted: "₹ 15,600.00",
    date: "November 16, 2026",
    badge: "Boston Series",
    image: "assets/images/lacoste-boston-green-chronograph.png",
    gallery: [
      "assets/images/lacoste-boston-green-chronograph.png",
      "assets/images/lacoste-boston-green-chronograph.webp",
      "assets/images/lacoste-boston-green-chronograph.jpg"
    ],
    description: "The Lacoste Boston Chronograph (Ref. 2011346) exudes athletic refinement with contemporary urban flair. Featuring an eye-catching brushed forest green dial adorned with the signature white Lacoste crocodile emblem, triple multi-function sub-dials, date window, an outer forest green tachymeter scale bezel, and a sculpted 3-link stainless steel bracelet with push-button deployment.",
    details: {
      caseSize: "42.00 mm",
      caseThickness: "10.50 mm",
      caseMaterial: "Solid 316L Stainless Steel Case with Forest Green Tachymeter Bezel",
      crystal: "Hardened Scratch-resistant Mineral Crystal",
      dialColor: "Sunray Forest Green with Applied Polished Silver Indices & White Crocodile",
      movement: "Precision Multi-Function Quartz Chronograph",
      powerReserve: "Long-Life Battery (approx. 3 Years)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Stainless Steel 3-Link Bracelet with Push-Button Deployment Clasp",
      weight: "140 g",
      origin: "Lacoste Timepieces",
      warranty: "2-Year International Lacoste Warranty"
    }
  },
  {
    id: "seiko-mod-daytona-ice-blue-diamond-new",
    name: "Seiko Mod Daytona Ice Blue Diamond Chronograph",
    model: "Ref. SKX-MOD-ICEBLUE-DIA",
    category: "Seiko",
    brand: "Seiko",
    specs: "40 mm • Seiko VK63 Meca-Quartz • Baguette Diamond Bezel & Pavé Dial",
    price: 24999,
    priceFormatted: "₹ 24,999.00",
    date: "November 16, 2026",
    badge: "Bespoke Diamond",
    image: "assets/images/seiko-mod-daytona-ice-blue-diamond.png",
    gallery: [
      "assets/images/seiko-mod-daytona-ice-blue-diamond.png",
      "assets/images/seiko-mod-daytona-ice-blue-diamond.jpg"
    ],
    description: "The Seiko Mod Daytona Ice Blue Diamond Chronograph (Ref. SKX-MOD-ICEBLUE-DIA) is an extraordinary custom haute joaillerie timepiece. Powered by the reliable Seiko VK63 Meca-Quartz chronograph movement with sweeping mechanical seconds. Featuring an iced-out full pavé diamond dial, triple ice blue snailed chronograph counters, blued steel hands, a dazzling factory-cut baguette diamond bezel, and a solid 316L stainless steel Oyster bracelet with polished center links.",
    details: {
      caseSize: "40.00 mm",
      caseThickness: "12.20 mm",
      caseMaterial: "Solid 316L Stainless Steel with Baguette Diamond Gem-Set Bezel",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "Full Pavé Diamond Dial with Triple Ice Blue Counters & Blued Steel Hands",
      movement: "Seiko Calibre VK63 Meca-Quartz (Sweeping 1/5th Sec Chronograph)",
      powerReserve: "High-Performance Battery (approx. 3 Years)",
      waterResistance: "5 bar (50 m / 165 ft) with Screw-Down Crown & Pushers",
      strap: "Solid 316L Stainless Steel Oyster 3-Link Bracelet with Polished Center Links",
      weight: "148 g",
      origin: "Custom Japanese Horology",
      warranty: "2-Year International Warranty"
    }
  },
  {
    id: "tissot-classic-dream-leather-t129-new",
    name: "Tissot Classic Dream Leather Watch",
    model: "Ref. T129.410.16.013.00",
    category: "Classic",
    brand: "Tissot",
    specs: "42 mm • Swiss Quartz Calibre • White Roman Dial & Alligator Leather",
    price: 30500,
    priceFormatted: "₹ 30,500.00",
    date: "November 16, 2026",
    badge: "Classic Dream",
    image: "assets/images/tissot-classic-dream-leather-trans.png",
    gallery: [
      "assets/images/tissot-classic-dream-leather-trans.png",
      "assets/images/tissot-classic-dream-leather.png"
    ],
    description: "The Tissot Classic Dream Leather Watch (Ref. T129.410.16.013.00) embodies pure Swiss horological refinement. Featuring a minimalist porcelain-white dial adorned with classic black Roman numerals, faceted dauphine hands, a discrete date aperture at 3 o'clock, and an exquisite mahogany brown alligator-grain embossed leather strap with a quick-release system.",
    details: {
      caseSize: "42.00 mm",
      caseThickness: "8.10 mm",
      caseMaterial: "Solid 316L Stainless Steel Case",
      crystal: "Scratch-resistant Sapphire Crystal",
      dialColor: "White with Classic Black Roman Numerals & Date Display",
      movement: "Swiss Precision Quartz Calibre ETA F06.115 (EOL Battery End-of-Life Indicator)",
      powerReserve: "Long-Life Swiss Battery Power (approx. 68 Months)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Embossed Mahogany Brown Alligator-Grain Leather Strap with Standard Steel Buckle",
      weight: "130 g",
      origin: "Swiss Made",
      warranty: "2-Year International Tissot Warranty"
    }
  },
  {
    id: "versace-v-galaxy-moonphase-ve0k00525-new",
    name: "Versace V-Galaxy Moonphase Multifunction",
    model: "Ref. VE0K00525",
    category: "Men",
    brand: "Versace",
    specs: "43 mm • Gunmetal IP Stainless Steel • Moonphase & Full Calendar",
    price: 154995,
    priceFormatted: "₹ 1,54,995.00",
    date: "November 16, 2026",
    badge: "V-Galaxy Moonphase",
    image: "assets/images/versace-v-galaxy-moonphase.png",
    gallery: [
      "assets/images/versace-v-galaxy-moonphase.png",
      "assets/images/versace-v-galaxy-moonphase.jpg"
    ],
    description: "The Versace V-Galaxy Moonphase (Ref. VE0K00525) is an exceptional Italian haute couture timepiece crafted in gunmetal grey IP stainless steel. Features a mesmerizing glittering black aventurine starfield dial adorned with the iconic 3D golden Medusa head at 12 o'clock, day and date subsidiary dials, pointer month calendar on the engraved bezel, and an authentic astronomical moonphase aperture at 6 o'clock.",
    details: {
      caseSize: "43.00 mm",
      caseThickness: "12.00 mm",
      caseMaterial: "Solid 316L Stainless Steel with Gunmetal Grey IP Finish & Engraved Month Bezel",
      crystal: "Scratch-resistant Anti-reflective Sapphire Crystal",
      dialColor: "Glittering Black Aventurine Starfield Dial with 3D Gold Medusa & Luminous Accents",
      movement: "Swiss Precision Multifunction Calibre Ronda 706B.1 (Moonphase, Day, Date & Month)",
      powerReserve: "Long-Life Swiss Battery Power (approx. 45 Months)",
      waterResistance: "5 bar (50 m / 165 ft)",
      strap: "Integrated Gunmetal Grey IP Stainless Steel 3-Link Bracelet with Butterfly Deployment Clasp",
      weight: "172 g",
      origin: "Swiss Made",
      warranty: "2-Year International Versace Warranty"
    }
  }
];

const BRAND_STATS = [
  { value: "1888", label: "Founded in Le Locle", sublabel: "Swiss Horological Heritage" },
  { value: "300+", label: "Hand-Assembled Components", sublabel: "Micro-mechanical Precision" },
  { value: "80h", label: "Power Reserve", sublabel: "Nivachron Anti-magnetic Spring" },
  { value: "300m", label: "Water Resistance Tested", sublabel: "Deep Oceanic Certification" },
  { value: "100%", label: "Swiss Made Certified", sublabel: "Official Federal Standard" }
];

const COMMITMENTS = [
  {
    icon: "truck",
    title: "Free Delivery",
    desc: "Complimentary insured express delivery on all orders across India & worldwide"
  },
  {
    icon: "shield",
    title: "Swiss Made Watches",
    desc: "Every timepiece is crafted and rigorously inspected in Geneva, Switzerland"
  },
  {
    icon: "lock",
    title: "Safe & Secure Payments",
    desc: "Bank-grade 256-bit encrypted checkout with EMI and concierge wire options"
  },
  {
    icon: "rotate-ccw",
    title: "Easy 30-Day Returns",
    desc: "Complimentary boutique return service and hassle-free exchange policy"
  }
];


// ------------------------------------------
// File: js/components/Navbar.js
// ------------------------------------------
// VOUVRY GENÈVE - Premium Navigation Bar
function Navbar({ 
  wishlistCount, 
  cartCount, 
  onOpenWishlist, 
  onOpenCart, 
  onOpenSearch, 
  isScrolled,
  activeSection 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Men", href: "#men" },
    { label: "Collection", href: "#collection" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'nav-glass-scrolled py-3 shadow-2xl' : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Top Left */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group py-0.5"
            aria-label="ÉLVOR - The Power of Elegance"
          >
            <img 
              src="assets/images/elvor-logo-transparent.png" 
              alt="ÉLVOR - The Power of Elegance" 
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]" 
            />
          </a>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 relative py-1 ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DA291C] animate-pulse"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Utility Action Icons - Top Right */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-white">
            
            {/* Search Icon */}
            <button 
              onClick={onOpenSearch}
              className="p-1.5 text-neutral-300 hover:text-white transition-colors"
              title="Search Timepieces"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Currency Selector (India / INR) */}
            <div className="hidden sm:flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-neutral-300 border border-neutral-700/80 px-2.5 py-1 rounded-sm bg-black/40">
              <span className="text-sm">🇮🇳</span>
              <span className="text-neutral-200">₹ INR</span>
            </div>

            {/* Wishlist Heart with Counter */}
            <button 
              onClick={onOpenWishlist}
              className="relative p-1.5 text-neutral-300 hover:text-[#DA291C] transition-colors"
              title="View Wishlist"
            >
              <svg className="w-5 h-5" fill={wishlistCount > 0 ? "#DA291C" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DA291C] text-white text-[0.62rem] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-heart-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag with Counter */}
            <button 
              onClick={onOpenCart}
              className="relative p-1.5 text-neutral-300 hover:text-white transition-colors"
              title="Shopping Bag"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[0.62rem] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-300 hover:text-white transition-colors focus:outline-none"
              title="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-neutral-800 px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold tracking-[0.2em] uppercase text-neutral-200 hover:text-white transition-colors flex items-center justify-between border-b border-neutral-800/60 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>Currency &amp; Region</span>
              <span className="text-white font-bold">🇮🇳 India (₹ INR)</span>
            </div>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-luxury-primary text-center w-full mt-2"
            >
              Book Private Fitting
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


// ------------------------------------------
// File: js/components/Hero.js
// ------------------------------------------
// VOUVRY GENÈVE - Fullscreen Cinematic Hero Section
function Hero({ onExploreClick, onDiscoverClick }) {
  const videoRef = React.useRef(null);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-16">
      
      {/* Background Cinematic Watch Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="assets/images/hero-watch.svg"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        >
          <source src="assets/videos/hero-watch.mp4" type="video/mp4" />
          <source src="assets/videos/hero-watch.mov" type="video/quicktime" />
          {/* Fallback image */}
          <img
            src="assets/images/hero-watch.svg"
            alt="Swiss Haute Horlogerie Timepiece"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </video>
        
        {/* Cinematic Vignette Overlays & Radial Dark Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none"></div>
      </div>



      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Brand Logo Showcase */}
          <div className="mb-8">
            <img 
              src="assets/images/elvor-logo-transparent.png" 
              alt="ÉLVOR - The Power of Elegance" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(212,175,55,0.35)]" 
            />
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight sm:tracking-tight leading-[0.95] mb-6">
            TIME DEFINES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              YOUR STYLE.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl font-light text-neutral-300 tracking-[0.14em] uppercase mb-10 max-w-xl">
            Precision. Elegance. Timeless Craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            
            {/* Primary CTA */}
            <button
              onClick={onExploreClick}
              className="btn-luxury-primary group"
            >
              <span>Explore Collection</span>
              <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onDiscoverClick}
              className="btn-luxury-outline group"
            >
              <span>Discover More</span>
              <svg className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/FeaturedCollection.js
// ------------------------------------------
// VOUVRY GENÈVE - Featured Watch Collection
// Directly inspired by Reference Screenshot 6 (clean studio background, forward-facing timepieces)

function FeaturedCollection({ 
  products, 
  wishlist, 
  onToggleWishlist, 
  onSelectProduct,
  onAddToCart 
}) {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Rolex", "Seiko", "Lacoste", "STANDARD", "Men", "Chronograph", "Classic"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => 
        p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(activeCategory.toLowerCase())) ||
        (p.style && p.style.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  // Local SVG fallback lookup
  const getFallbackImage = (style) => {
    if (style.includes("DiaStar") || style.includes("Skeleton") || style.includes("Hardmetal")) return "assets/images/watch-black-skeleton.svg";
    if (style.includes("Moser") || style.includes("Tourbillon") || style.includes("Jade")) return "assets/images/watch-gold-classic.svg";
    if (style.includes("Daytona") || style.includes("Platinum")) return "assets/images/watch-silver-chrono.svg";
    if (style.includes("GMT")) return "assets/images/watch-steel-diver.svg";
    if (style.includes("Emerald") || style.includes("Diver") || style.includes("Purple") || style.includes("Seiko") || style.includes("Edo")) return "assets/images/watch-steel-diver.svg";
    if (style.includes("Bronze")) return "assets/images/watch-gold-classic.svg";
    if (style.includes("Leather")) return "assets/images/watch-classic-leather.svg";
    if (style.includes("Roman")) return "assets/images/watch-classic-roman.svg";
    if (style.includes("Silver")) return "assets/images/watch-silver-chrono.svg";
    if (style.includes("Black")) return "assets/images/watch-black-skeleton.svg";
    if (style.includes("Gold")) return "assets/images/watch-gold-classic.svg";
    return "assets/images/watch-steel-diver.svg";
  };

  return (
    <section id="collection" className="py-24 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#DA291C]"></span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-neutral-500">
                Swiss Masterpieces
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
              FEATURED WATCHES
            </h2>
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-neutral-500 uppercase mt-1">
              Precision Swiss Chronographs &amp; Automatic Timepieces
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center space-x-2 sm:space-x-4 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold tracking-[0.16em] uppercase px-3 py-1.5 transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-transparent text-neutral-600 border-transparent hover:border-neutral-300 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Watch Luxury Showcase Grid (3x2 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const fallbackImg = getFallbackImage(product.style);

            return (
              <div 
                key={product.id}
                className="watch-card group flex flex-col justify-between bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200/80 transition-all duration-400 p-6 relative"
              >
                {/* Action Buttons: Share & Wishlist (Top Right) */}
                <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (navigator.share) {
                        navigator.share({ title: product.name, text: `${product.name} - ${product.priceFormatted}`, url: window.location.href }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert(`Link copied for ${product.name}`);
                      }
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/80 text-neutral-400 hover:text-black hover:bg-white shadow-sm transition-all"
                    title="Share timepiece"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isWishlisted 
                        ? 'bg-red-50 text-[#DA291C]' 
                        : 'bg-white/80 text-neutral-400 hover:text-black hover:bg-white shadow-sm'
                    }`}
                    title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <svg 
                      className={`w-5 h-5 transition-transform ${isWishlisted ? 'scale-110 animate-heart-pulse' : 'hover:scale-110'}`} 
                      fill={isWishlisted ? "#DA291C" : "none"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.8" 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2 py-0.5 bg-neutral-900 text-white">
                    {product.badge}
                  </span>
                </div>

                {/* Watch Studio Image Container */}
                <div 
                  className="w-full h-72 sm:h-80 flex items-center justify-center p-4 cursor-pointer overflow-hidden my-4 relative"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="watch-img w-full h-full object-contain filter drop-shadow-xl"
                    onError={(e) => {
                      if (!e.currentTarget.getAttribute('data-fallback')) {
                        e.currentTarget.setAttribute('data-fallback', 'true');
                        e.currentTarget.src = fallbackImg;
                      }
                    }}
                  />
                  
                  {/* Subtle Quick Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-white/95 text-black px-3.5 py-1.5 shadow-md">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Product Metadata (Directly styled like Tissot Screenshot 6) */}
                <div className="pt-4 border-t border-neutral-200/60">
                  
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-neutral-400">
                      {product.category}
                    </span>
                    <span className="text-[0.62rem] font-mono text-neutral-400">
                      {product.model}
                    </span>
                  </div>

                  {/* Watch Name */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-extrabold text-base tracking-[0.05em] uppercase text-neutral-900 hover:text-neutral-600 cursor-pointer transition-colors line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {/* Watch Specs (e.g., 41 mm • Quartz Chronograph) */}
                  <p className="text-xs text-neutral-500 font-medium tracking-wide mt-1 line-clamp-1">
                    {product.specs}
                  </p>

                  {/* Price in Indian Rupees */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <p className="text-base font-black text-neutral-900 tracking-tight">
                      {product.priceFormatted}
                    </p>
                    <span className="text-[0.62rem] uppercase tracking-wider text-neutral-400">
                      Incl. Taxes
                    </span>
                  </div>

                  {/* Action Buttons: View Details & Quick Add */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-center py-2 px-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="text-center py-2 px-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center space-x-1"
                    >
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimalist Slider Indicator Bar (Recreating Reference 6 bottom bar) */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-neutral-900 tracking-widest text-[0.7rem] uppercase">
              SHOWING {filteredProducts.length} OF {products.length} EXCLUSIVE TIMEPIECES
            </span>
            <span className="h-3 w-[1px] bg-neutral-300"></span>
            <span className="hidden sm:inline tracking-wider">
              Swiss Made in Geneva, Switzerland
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="h-[2px] w-12 bg-neutral-900 inline-block"></span>
            <span className="h-[2px] w-6 bg-neutral-300 inline-block"></span>
          </div>
        </div>

      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/MensCollection.js
// ------------------------------------------
// VOUVRY GENÈVE - Men's Collection Full-Width Luxury Editorial Banner
// Inspired by Reference Screenshots 1 & 4 (Ambassador wearing watch + Split editorial layout)

function MensCollection({ onExploreClick, onSelectProduct, products }) {
  const menTeaser = products[0] || {};
  const skeletonTeaser = products[1] || {};

  return (
    <section id="men" className="relative bg-neutral-950 text-white overflow-hidden py-20 lg:py-28">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MEN'S COLLECTION SPLIT BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Subtitle, & Watch Teaser Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            <div>
              <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span>●</span>
                <span>Ambassador Edition</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                MEN'S WATCHES
              </h2>
              
              <p className="text-lg sm:text-xl font-light text-neutral-300 tracking-[0.14em] uppercase mt-4">
                Designed for those who lead with confidence.
              </p>

              <p className="text-sm text-neutral-400 font-light leading-relaxed mt-4 max-w-lg">
                Forged from solid 316L stainless steel, high-tech ceramic, and scratchproof sapphire crystal, our men’s timepieces combine high-torque chronographs with Le Locle heritage. Engineered for relentless performance and impeccable distinction.
              </p>
            </div>

            {/* Two Integrated Watch Teasers */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Teaser 1 */}
              <div 
                onClick={() => onSelectProduct(menTeaser)}
                className="bg-neutral-900/90 border border-neutral-800 p-4 hover:border-neutral-600 cursor-pointer transition-all duration-300 group"
              >
                <div className="h-36 flex items-center justify-center p-2">
                  <img 
                    src={menTeaser.image || "assets/images/vouvry-classic-steel-roman.webp"} 
                    alt={menTeaser.name} 
                    className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = "assets/images/watch-classic-roman.svg"; }}
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800">
                  <p className="text-[0.62rem] font-bold tracking-widest text-[#DA291C] uppercase">Classic Dream</p>
                  <p className="text-xs font-bold text-white uppercase truncate">{menTeaser.name || "Tissot Classic Dream"}</p>
                  <p className="text-xs font-semibold text-neutral-300 mt-1">{menTeaser.priceFormatted || "₹ 88,800.00"}</p>
                </div>
              </div>

              {/* Teaser 2 */}
              <div 
                onClick={() => onSelectProduct(skeletonTeaser)}
                className="bg-neutral-900/90 border border-neutral-800 p-4 hover:border-neutral-600 cursor-pointer transition-all duration-300 group"
              >
                <div className="h-36 flex items-center justify-center p-2">
                  <img 
                    src={skeletonTeaser.image || "assets/images/vouvry-bronze-chronograph.webp"} 
                    alt={skeletonTeaser.name} 
                    className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = "assets/images/watch-gold-classic.svg"; }}
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800">
                  <p className="text-[0.62rem] font-bold tracking-widest text-[#DA291C] uppercase">Bronze Edition</p>
                  <p className="text-xs font-bold text-white uppercase truncate">{skeletonTeaser.name || "HYPERCHROME"}</p>
                  <p className="text-xs font-semibold text-neutral-300 mt-1">{skeletonTeaser.priceFormatted || "MRP ₹ 1,212,100.00"}</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="btn-luxury-primary w-full sm:w-auto text-center"
              >
                <span>Explore Men's Collection</span>
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column: Full-Height Ambassador Editorial Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-neutral-800 group shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="ÉLVOR Ambassador wearing luxury chronograph"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                onError={(e) => {
                  e.currentTarget.src = "assets/images/model-editorial.svg";
                }}
              />

              {/* Editorial Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/BrandStory.js
// ------------------------------------------
// VOUVRY GENÈVE - Brand Story / About Section

function BrandStory({ onContactClick }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0c0d10] text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Horological Atelier Photography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative group overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
              <div className="w-full h-[440px] sm:h-[500px] flex items-center justify-center p-6 sm:p-10 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 relative">
                <img
                  src="assets/images/girard-perregaux-laureato-green.webp"
                  alt="Girard-Perregaux Laureato Automatic 42mm"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl z-10"
                  onError={(e) => {
                    e.currentTarget.src = "assets/images/hero-watch.svg";
                  }}
                />
              </div>
              
              {/* Floating Horology Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between z-20">
                <div>
                  <p className="text-sm font-bold text-white uppercase">
                    Girard-Perregaux Laureato
                  </p>
                  <p className="text-base font-black text-white tracking-tight mt-1">
                    ₹ 11,66,319.25
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 font-mono block">
                    Calibre GP01800
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-wider text-neutral-500 mt-0.5 block">
                    Incl. Taxes
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Supporting Macro Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-neutral-900/60 border border-neutral-800">
                <p className="text-[#DA291C] text-xs font-bold tracking-widest uppercase">Materials</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">316L &amp; 904L Steel</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  High-corrosion resistance forged alloys with hand-satin brushing and mirror anglage.
                </p>
              </div>

              <div className="p-5 bg-neutral-900/60 border border-neutral-800">
                <p className="text-[#DA291C] text-xs font-bold tracking-widest uppercase">Escapement</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">Nivachron Balance</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Titanium-based alloy spring impervious to magnetic fields and thermal variations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Heritage Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            <div>
              <div className="inline-flex items-center space-x-2.5 text-xs font-bold tracking-[0.25em] text-[#DA291C] uppercase mb-3">
                <span className="w-4 h-[1px] bg-[#DA291C]"></span>
                <span>The ÉLVOR Philosophy</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.02]">
                CRAFTED FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                  EVERY SECOND.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-light tracking-[0.08em] mt-6 leading-relaxed">
                Founded in 1888 in the cradle of Swiss horology, ÉLVOR was born from a singular obsession: to create watches that embody the pinnacle of micro-mechanical precision and the power of elegance.
              </p>

              <div className="space-y-4 text-sm text-neutral-400 font-light leading-relaxed mt-6">
                <p>
                  Every timepiece that leaves our Geneva atelier passes through the rigorous hands of master artisans. From the delicate perlage on our mainplates to the chamfered bridges and anti-reflective sapphire crystals, nothing is left to chance.
                </p>
                <p>
                  We believe luxury is not merely an ornament—it is an enduring promise of reliability, precision engineering, and understated power that accompanies the wearer through life's most defining milestones.
                </p>
              </div>
            </div>

            {/* Heritage Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
              {BRAND_STATS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase text-neutral-300 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[0.65rem] text-neutral-500 mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="btn-luxury-outline"
              >
                <span>Schedule Private Atelier Tour</span>
                <span className="ml-3">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/NewArrivals.js
// ------------------------------------------
// VOUVRY GENÈVE - New Arrivals Modern Product Carousel
// Inspired by Reference Screenshot 3 ("Our Magazine" centered novelty showcase with minimal arrows)


function NewArrivals({ onSelectProduct, onAddToCart }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalSlides = NEW_ARRIVALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentItem = NEW_ARRIVALS[currentIndex];

  return (
    <section id="new-arrivals" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,35,0.4)_0%,rgba(0,0,0,0.95)_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header (Echoing Reference 3 "Our Magazine") */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span>●</span>
            <span>Novelties &amp; Limited Editions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            NEW ARRIVALS
          </h2>
          
          <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-[0.16em] uppercase mt-2">
            Discover ÉLVOR's Latest Complications and Modern Icons
          </p>
        </div>

        {/* Carousel Showcase Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-neutral-950/80 border border-neutral-800 rounded-none overflow-hidden p-6 sm:p-12 transition-all duration-500 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Watch Studio Product Imagery */}
              <div className="md:col-span-7 flex items-center justify-center relative p-4 group">
                
                {/* Subtle Radial Glow */}
                <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                <div 
                  className="w-full h-72 sm:h-96 flex items-center justify-center cursor-pointer overflow-hidden relative"
                  onClick={() => onSelectProduct(currentItem)}
                >
                  <img
                    key={currentItem.id}
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-700 transform group-hover:scale-105 animate-fadeIn"
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-black-skeleton.svg";
                    }}
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 bg-[#DA291C] text-white">
                    {currentItem.badge}
                  </span>
                </div>
              </div>

              {/* Watch Story & Novelty Details (Reference 3 caption style) */}
              <div className="md:col-span-5 flex flex-col justify-center space-y-4 text-left">
                
                {/* Release Date */}
                <div className="flex items-center space-x-2 text-[0.65rem] font-semibold text-neutral-400 tracking-widest uppercase">
                  <span>RELEASE DATE:</span>
                  <span className="text-neutral-200">{currentItem.date}</span>
                </div>

                {/* Model Title */}
                <h3 
                  onClick={() => onSelectProduct(currentItem)}
                  className="text-xl sm:text-2xl font-black uppercase text-white hover:text-neutral-300 cursor-pointer tracking-wide transition-colors leading-tight"
                >
                  {currentItem.name}
                </h3>

                {/* Specification */}
                <p className="text-xs text-[#DA291C] font-semibold tracking-wider uppercase">
                  {currentItem.specs}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Price */}
                <div className="pt-2">
                  <p className="text-2xl font-black text-white tracking-tight">
                    {currentItem.priceFormatted}
                  </p>
                  <p className="text-[0.62rem] text-neutral-500 uppercase tracking-widest mt-0.5">
                    Official Swiss Boutique Price (Inclusive of all duties)
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => onSelectProduct(currentItem)}
                    className="btn-luxury-primary text-center py-2.5 px-5 text-xs"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onAddToCart(currentItem)}
                    className="btn-luxury-outline text-center py-2.5 px-5 text-xs"
                  >
                    Add to Bag
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Minimalist Carousel Arrows (< and > directly from Screenshot 3) */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 z-20 group"
            title="Previous Novelty"
          >
            <span className="text-xl font-light group-hover:-translate-x-0.5 transition-transform">‹</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 z-20 group"
            title="Next Novelty"
          >
            <span className="text-xl font-light group-hover:translate-x-0.5 transition-transform">›</span>
          </button>

          {/* Carousel Pagination Progress Dots */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {NEW_ARRIVALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 h-1 bg-white'
                    : 'w-2 h-1 bg-neutral-700 hover:bg-neutral-500'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3 text-xs text-neutral-500 font-mono tracking-widest">
            0{currentIndex + 1} / 0{totalSlides}
          </div>

        </div>

      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/BrandExperience.js
// ------------------------------------------
// VOUVRY GENÈVE - Brand Experience Promotional Banner (Removed per user request)
function BrandExperience() {
  return null;
}


// ------------------------------------------
// File: js/components/ContactSection.js
// ------------------------------------------
// VOUVRY GENÈVE - Contact & VIP Concierge Section
function ContactSection({ onShowToast }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private Boutique Appointment',
    message: ''
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details of your inquiry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('Please complete all required fields correctly', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Concierge inquiry received. Our VIP specialist will contact you shortly.', 'success');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Private Boutique Appointment',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900 text-white relative border-t border-neutral-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span>●</span>
            <span>Client Services &amp; Appointments</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            VIP CONCIERGE &amp; CONTACT
          </h2>
          
          <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-[0.16em] uppercase mt-2">
            Schedule a Private Boutique Viewing or Inquire About a Timepiece
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Boutique Information & Concierge */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-3">
                Flagship Boutiques
              </h3>

              {/* Geneva Headquarters */}
              <div className="space-y-1">
                <p className="text-xs font-bold tracking-widest text-[#DA291C] uppercase">
                  Geneva Flagship Atelier
                </p>
                <p className="text-sm font-semibold text-white">
                  Rue du Rhône 42, 1204 Genève, Switzerland
                </p>
                <p className="text-xs text-neutral-400">
                  Tel: +41 22 819 1888 • atelier@elvor-watches.com
                </p>
              </div>

              {/* Mumbai Flagship */}
              <div className="space-y-1 pt-2">
                <p className="text-xs font-bold tracking-widest text-[#DA291C] uppercase">
                  Mumbai Luxury Salon
                </p>
                <p className="text-sm font-semibold text-white">
                  Palladium Mall, Senapati Bapat Marg, Lower Parel, Mumbai 400013
                </p>
                <p className="text-xs text-neutral-400">
                  Tel: +91 (0) 22 6844 1888 • concierge.in@elvor-watches.com
                </p>
              </div>

              {/* Concierge Hours */}
              <div className="pt-2 border-t border-neutral-800/80">
                <p className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                  Boutique &amp; Fitting Hours
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Monday to Saturday: 10:00 AM – 8:30 PM IST <br />
                  Sunday: By VIP Private Appointment Only
                </p>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-6 border-t border-neutral-800">
              <p className="text-xs font-bold tracking-[0.2em] text-neutral-300 uppercase mb-4">
                Connect With ÉLVOR
              </p>
              
              <div className="flex items-center space-x-4">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Concierge Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 sm:p-12 relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-neutral-900 border border-neutral-700 text-[#DA291C] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  Appointment Request Confirmed
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Your private concierge request has been prioritized. Our boutique director will contact you within 2 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="btn-luxury-outline text-xs"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                  Inquire with Our Concierge
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full bg-neutral-900 border ${
                      errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full bg-neutral-900 border ${
                        errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                      } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-neutral-800 border border-r-0 border-neutral-700 text-xs font-semibold text-neutral-300">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className={`w-full bg-neutral-900 border ${
                          errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                        } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Inquiry Reason
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Private Boutique Appointment">Private Boutique Appointment (Mumbai / Geneva)</option>
                    <option value="Product Availability & Order">Product Availability &amp; Order</option>
                    <option value="Custom Hand Engraving">Bespoke Engraving &amp; Personalization</option>
                    <option value="Official Service & Overhaul">Swiss Horological Service &amp; Overhaul</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Message / Preferred Date *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify the watch model of interest or preferred fitting appointment date..."
                    className={`w-full bg-neutral-900 border ${
                      errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury-primary w-full text-center py-3.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting to Concierge...</span>
                      </span>
                    ) : (
                      <span>Request VIP Appointment</span>
                    )}
                  </button>
                </div>

                <p className="text-[0.62rem] text-neutral-500 text-center uppercase tracking-widest mt-2">
                  Complimentary Champagne Reception &amp; Private Salon Viewing Included
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}


// ------------------------------------------
// File: js/components/Footer.js
// ------------------------------------------
// VOUVRY GENÈVE - Premium Black Footer
// Directly replicating the architecture, typography, and commitments from Reference Screenshot 2

function Footer({ onNavClick }) {
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [showCountryModal, setShowCountryModal] = React.useState(false);

  return (
    <footer className="bg-black text-white relative pt-20 pb-0 border-t border-neutral-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Structured Columns (Directly from Reference Screenshot 2) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Brand
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#men" onClick={(e) => onNavClick(e, '#men')} className="hover:text-white transition-colors">Men</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Chronographs</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#new-arrivals" onClick={(e) => onNavClick(e, '#new-arrivals')} className="hover:text-white transition-colors">Selection</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Straps &amp; Bracelets</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Heritage News</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Find a boutique</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Customer service</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Stop fake &amp; Counterfeit</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Register your watch</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Corporate gifting</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Watch Finder</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Conditions of sales</a></li>
              <li><a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy notice</a></li>
              <li><a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookie notice</a></li>
              <li><a href="#settings" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookie settings</a></li>
              <li><a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of use</a></li>
            </ul>
          </div>

          {/* Column 4: Help and contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Help and contacts
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Need help?</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Request a return</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Track an order</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Careers in Geneva</a></li>
            </ul>
          </div>

          {/* Column 5: Our Commitments (Directly from Reference Screenshot 2 with Icons) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Our commitments
            </h4>
            
            <div className="space-y-3.5 text-xs text-neutral-300">
              
              {/* Commitment 1: Free Delivery */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="font-light">Free delivery in India &amp; global</span>
              </div>

              {/* Commitment 2: Swiss Made watches (Red Cross Icon) */}
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#DA291C] flex items-center justify-center text-white font-black text-[0.65rem] flex-shrink-0">
                  +
                </div>
                <span className="font-medium text-white">Swiss made watches</span>
              </div>

              {/* Commitment 3: Safe & secure payments */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-light">Safe &amp; secure payments</span>
              </div>

              {/* Commitment 4: Easy returns */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-light">Easy 30-day returns</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Utility Row (Reference Screenshot 2) */}
        <div className="pt-8 pb-10 border-t border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-neutral-400 gap-4">
          
          {/* Country Selector */}
          <button
            onClick={() => setShowCountryModal(true)}
            className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
          >
            <span className="text-base">🇮🇳</span>
            <span className="font-semibold text-white">India</span>
            <span className="text-neutral-500">|</span>
            <span className="underline underline-offset-4">Change country &gt;</span>
          </button>

          {/* Social Media Trigger */}
          <button 
            onClick={() => setShowSocialModal(!showSocialModal)}
            className="text-neutral-300 hover:text-white font-medium transition-colors"
          >
            + Follow us on social media
          </button>

          {/* Copyright notice */}
          <div className="text-neutral-500 font-mono text-[0.7rem]">
            ÉLVOR © 2026. The Power of Elegance. All Rights Reserved.
          </div>

        </div>

        {/* Social Media Quick Bar if Toggled */}
        {showSocialModal && (
          <div className="py-4 border-t border-neutral-900 flex items-center space-x-6 animate-fadeIn">
            <span className="text-xs uppercase tracking-widest text-neutral-500">Official Channels:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">LinkedIn</a>
          </div>
        )}

      </div>

      {/* GIANT MONUMENTAL BRAND LOGO */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-10 mb-4 py-8 border-t border-neutral-900/60 bg-gradient-to-b from-transparent via-neutral-950/40 to-transparent">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-center">
          <img 
            src="assets/images/elvor-logo-transparent.png" 
            alt="ÉLVOR - The Power of Elegance" 
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-auto object-contain filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.22)] opacity-95" 
          />
        </div>
      </div>

      {/* Country Modal Popup */}
      {showCountryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-neutral-950 border border-neutral-800 p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowCountryModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold uppercase text-white mb-4">Select Region &amp; Currency</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 bg-neutral-900 border border-neutral-700 flex items-center justify-between text-white"
              >
                <span>🇮🇳 India (INR - ₹)</span>
                <span className="text-[#DA291C]">Active</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇨🇭 Switzerland (CHF - CHF)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇺🇸 United States (USD - $)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇦🇪 United Arab Emirates (AED - AED)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇬🇧 United Kingdom (GBP - £)</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}


// ------------------------------------------
// File: js/components/ProductModal.js
// ------------------------------------------
// VOUVRY GENÈVE - Luxury Product Quick View & Technical Details Modal
function ProductModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  onBookAppointment 
}) {
  if (!isOpen || !product) return null;

  const [activeImage, setActiveImage] = React.useState(product.image);
  const [quantity, setQuantity] = React.useState(1);
  const [isZoomed, setIsZoomed] = React.useState(false);

  React.useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    setIsZoomed(false);
  }, [product]);

  const galleryImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  const details = product.details || {
    caseSize: "41.00 mm",
    caseThickness: "11.20 mm",
    caseMaterial: "316L Stainless Steel",
    crystal: "Sapphire Crystal with Anti-reflective Treatment",
    movement: "Swiss Calibre Haute Horlogerie",
    powerReserve: "80 Hours Power Reserve",
    waterResistance: "10 bar (100 m / 330 ft)",
    strap: "Integrated 316L Stainless Steel Bracelet",
    origin: "Swiss Made (Genève)"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white text-black w-full max-w-5xl my-8 overflow-hidden shadow-2xl border border-neutral-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-[#DA291C]"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-600">
              {product.category || "Swiss Haute Horlogerie"} • {product.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors"
            title="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery & Macro Zoom */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-neutral-50/60 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-between">
            
            {/* Main Stage Image */}
            <div 
              className="relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={activeImage}
                alt={product.name}
                className={`w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
                onError={(e) => {
                  e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                }}
              />

              <div className="absolute bottom-2 right-2 text-[0.62rem] uppercase tracking-widest text-neutral-400 bg-white/80 px-2 py-0.5 border border-neutral-200">
                {isZoomed ? "Zoom Active" : "Hover to Zoom"}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center justify-center space-x-3 mt-6 pt-4 border-t border-neutral-200">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 p-1 border transition-all ${
                    activeImage === img ? 'border-neutral-900 bg-white shadow-md' : 'border-neutral-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Swiss Origin Seal */}
            <div className="mt-6 flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-200/80">
              <span className="font-bold text-neutral-800 tracking-wider uppercase">
                🇨🇭 Swiss Made Official Certified
              </span>
              <span>5-Year International Warranty</span>
            </div>

          </div>

          {/* Right Column: Watch Details, Specs & Actions */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Badge */}
              <span className="inline-block text-[0.62rem] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 bg-[#DA291C] text-white mb-2">
                {product.badge || "New Release"}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
                {product.name}
              </h2>

              {/* Sub-specs */}
              <p className="text-xs font-semibold text-neutral-500 tracking-wider uppercase mt-1">
                {product.specs}
              </p>

              {/* Price */}
              <div className="mt-4 pb-4 border-b border-neutral-200">
                <p className="text-3xl font-black text-neutral-900 tracking-tight">
                  {product.priceFormatted}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Inclusive of all Indian import duties, Swiss transit insurance &amp; GST.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-xs mb-3">
                  Technical Specifications
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-[0.72rem]">
                  <div className="text-neutral-500">Case Diameter:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseSize}</div>

                  <div className="text-neutral-500">Thickness:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseThickness}</div>

                  <div className="text-neutral-500">Case Material:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseMaterial}</div>

                  <div className="text-neutral-500">Crystal Glass:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.crystal}</div>

                  <div className="text-neutral-500">Movement / Calibre:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.movement}</div>

                  <div className="text-neutral-500">Power Reserve:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.powerReserve}</div>

                  <div className="text-neutral-500">Water Resistance:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.waterResistance}</div>

                  <div className="text-neutral-500">Strap / Clasp:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.strap}</div>
                </div>
              </div>
            </div>

            {/* Purchase & Action Controls */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              
              {/* Quantity & Wishlist Row */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-neutral-300">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 border text-xs font-bold uppercase tracking-wider transition-colors ${
                    isWishlisted 
                      ? 'border-[#DA291C] text-[#DA291C] bg-red-50' 
                      : 'border-neutral-300 text-neutral-700 hover:border-black'
                  }`}
                >
                  <span>♥</span>
                  <span>{isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}</span>
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className="btn-luxury-dark w-full text-center py-3.5"
              >
                Add {quantity} to Shopping Bag • ₹ {(product.price * quantity).toLocaleString('en-IN')}.00
              </button>

              {/* Book Boutique Fitting */}
              <button
                onClick={() => {
                  onClose();
                  onBookAppointment();
                }}
                className="w-full text-center py-2.5 text-xs font-bold tracking-widest uppercase text-neutral-600 hover:text-black transition-colors"
              >
                Schedule Private Boutique Viewing in Mumbai / Geneva →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


// ------------------------------------------
// File: js/components/WishlistDrawer.js
// ------------------------------------------
// VOUVRY GENÈVE - Wishlist Slide-out Drawer
function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveFromWishlist, 
  onAddToCart,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-neutral-950 text-white h-full shadow-2xl border-l border-neutral-800 flex flex-col justify-between z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#DA291C] font-bold text-lg">♥</span>
            <h3 className="font-bold text-sm tracking-[0.2em] uppercase text-white">
              Your Wishlist ({wishlistItems.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-4xl text-neutral-600 block">♡</span>
              <p className="text-sm font-light text-neutral-400 uppercase tracking-widest">
                Your wishlist is empty
              </p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our Swiss horological collection and save your preferred timepieces.
              </p>
              <button
                onClick={onClose}
                className="btn-luxury-outline text-xs mt-4"
              >
                Explore Watches
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div 
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 p-4 flex items-center space-x-4 group"
              >
                {/* Watch Thumbnail */}
                <div 
                  className="w-20 h-20 bg-neutral-950 p-2 border border-neutral-800 flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProduct(item);
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[0.6rem] font-bold text-[#DA291C] tracking-widest uppercase block">
                    {item.category}
                  </span>
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectProduct(item);
                    }}
                    className="text-xs font-bold text-white uppercase truncate cursor-pointer hover:text-neutral-300"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                    {item.priceFormatted}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="text-[0.65rem] font-bold tracking-widest uppercase text-white hover:text-[#DA291C] transition-colors"
                    >
                      + Move to Bag
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      className="text-[0.65rem] font-medium tracking-widest uppercase text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistItems.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-3">
            <button
              onClick={() => {
                wishlistItems.forEach(item => onAddToCart(item));
                onClose();
              }}
              className="btn-luxury-primary w-full text-center py-3 text-xs"
            >
              Add All to Shopping Bag
            </button>
            <p className="text-[0.62rem] text-neutral-500 text-center tracking-widest uppercase">
              Swiss Insured Shipping Available Across India
            </p>
          </div>
        )}

      </div>
    </div>
  );
}


// ------------------------------------------
// File: js/components/CartDrawer.js
// ------------------------------------------
// VOUVRY GENÈVE - Shopping Bag Drawer
function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedSubtotal = `₹ ${subtotal.toLocaleString('en-IN')}.00`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-neutral-950 text-white h-full shadow-2xl border-l border-neutral-800 flex flex-col justify-between z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="font-bold text-sm tracking-[0.2em] uppercase text-white">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-4xl text-neutral-600 block">👜</span>
              <p className="text-sm font-light text-neutral-400 uppercase tracking-widest">
                Your bag is empty
              </p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Discover our exceptional Swiss timepieces and add them to your collection.
              </p>
              <button
                onClick={onClose}
                className="btn-luxury-outline text-xs mt-4"
              >
                Discover Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 p-4 flex items-center space-x-4"
              >
                {/* Watch Thumbnail */}
                <div 
                  className="w-20 h-20 bg-neutral-950 p-2 border border-neutral-800 flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProduct(item);
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain filter drop-shadow hover:scale-105 transition-transform" 
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectProduct(item);
                    }}
                    className="text-xs font-bold text-white uppercase truncate cursor-pointer hover:text-neutral-300"
                  >
                    {item.name}
                  </h4>
                  <p className="text-[0.65rem] text-neutral-400 font-mono mt-0.5">{item.model}</p>
                  <p className="text-xs font-bold text-white mt-1">
                    ₹ {(item.price * item.quantity).toLocaleString('en-IN')}.00
                  </p>

                  {/* Quantity & Delete */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800">
                    <div className="flex items-center space-x-2 border border-neutral-700 bg-neutral-950 px-2 py-0.5 text-xs">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-neutral-400 hover:text-white px-1"
                      >
                        -
                      </button>
                      <span className="font-bold text-white px-1">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-neutral-400 hover:text-white px-1"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[0.65rem] text-neutral-500 hover:text-red-400 uppercase tracking-widest"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
            
            {/* Free Shipping Announcement */}
            <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[0.68rem] text-neutral-300 flex items-center space-x-2">
              <span className="text-[#DA291C]">✓</span>
              <span>Complimentary insured express delivery included across India.</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400 uppercase tracking-wider text-xs">Estimated Total</span>
              <span className="font-extrabold text-lg text-white">{formattedSubtotal}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="btn-luxury-primary w-full text-center py-3.5"
            >
              Proceed to Luxury Checkout
            </button>

            <p className="text-[0.6rem] text-neutral-500 text-center tracking-widest uppercase">
              256-bit Encrypted Swiss Horological Concierge Checkout
            </p>

          </div>
        )}

      </div>
    </div>
  );
}


// ------------------------------------------
// File: js/components/Toast.js
// ------------------------------------------
// VOUVRY GENÈVE - Floating Luxury Notification Toast
function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-8 right-6 z-50 max-w-sm w-full bg-neutral-950 border border-neutral-800 text-white p-4 shadow-2xl toast-enter flex items-start space-x-3">
      {/* Icon */}
      <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#DA291C] font-bold">
        {toast.type === 'error' ? '✕' : '✓'}
      </div>

      {/* Message */}
      <div className="flex-1 text-xs font-medium leading-relaxed text-neutral-200">
        {toast.message}
      </div>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="text-neutral-500 hover:text-white text-xs transition-colors"
      >
        ✕
      </button>
    </div>
  );
}


// ------------------------------------------
// File: js/app.js
// ------------------------------------------
// VOUVRY GENÈVE - Main Application Orchestrator

function App() {
  // State Management
  const [wishlist, setWishlist] = React.useState(() => {
    try {
      const saved = localStorage.getItem('vouvry_wishlist');
      return saved ? JSON.parse(saved) : ['vouvry-tradition-roman-40'];
    } catch (e) {
      return ['vouvry-tradition-roman-40'];
    }
  });

  const [cart, setCart] = React.useState(() => {
    try {
      const saved = localStorage.getItem('vouvry_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [toast, setToast] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);

  // Sync to local storage
  React.useEffect(() => {
    try {
      localStorage.setItem('vouvry_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  React.useEffect(() => {
    try {
      localStorage.setItem('vouvry_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Scroll listener for glassmorphism navbar & section highlight
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'men', 'collection', 'new-arrivals', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Wishlist Toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.name}" from your wishlist`, 'info');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Added "${product.name}" to your wishlist`, 'success');
        return [...prev, product.id];
      }
    });
  };

  // Cart Add
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`Updated "${product.name}" quantity in bag (${existing.quantity + qty})`, 'success');
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        showToast(`Added "${product.name}" to your shopping bag`, 'success');
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const updateCartQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Timepiece removed from bag', 'info');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutSuccess(true);
    setCart([]);
  };

  // Smooth Scroll handler
  const scrollTo = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filtered search results across catalog & novelties
  const allWatches = [...PRODUCTS, ...NEW_ARRIVALS];
  const searchResults = searchQuery.trim()
    ? allWatches.filter((w) =>
        w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (w.specs && w.specs.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  // Wishlist items full object lookup
  const wishlistFullItems = allWatches.filter((w) => wishlist.includes(w.id));

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DA291C] selection:text-white">
      
      {/* Premium Header Navigation */}
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />

      {/* 1. Fullscreen Cinematic Hero Section */}
      <Hero
        onExploreClick={() => scrollTo('#collection')}
        onDiscoverClick={() => scrollTo('#about')}
      />

      {/* 2. Featured Watch Collection (4-Watch Grid inspired by Reference Screenshot 6) */}
      <FeaturedCollection
        products={PRODUCTS}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={addToCart}
      />

      {/* 3. Men's Collection Full-Width Luxury Editorial Banner (Reference 1 & 4) */}
      <MensCollection
        products={PRODUCTS}
        onExploreClick={() => scrollTo('#collection')}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 4. Brand Story / About Atelier Section */}
      <BrandStory
        onContactClick={() => scrollTo('#contact')}
      />

      {/* 5. New Arrivals Modern Product Carousel (Reference 3 & 4) */}
      <NewArrivals
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={addToCart}
      />

      {/* 6. VIP Concierge & Contact Section */}
      <ContactSection
        onShowToast={showToast}
      />

      {/* 8. Iconic Jet-Black Swiss Luxury Footer (Reference 2) */}
      <Footer
        onNavClick={(e, href) => {
          e.preventDefault();
          scrollTo(href);
        }}
      />

      {/* Quick View Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onBookAppointment={() => {
          setSelectedProduct(null);
          scrollTo('#contact');
        }}
      />

      {/* Wishlist Slide-out Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistFullItems}
        onRemoveFromWishlist={(id) => {
          setWishlist((prev) => prev.filter((item) => item !== id));
          showToast('Timepiece removed from wishlist', 'info');
        }}
        onAddToCart={(p) => {
          addToCart(p);
        }}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
        }}
      />

      {/* Shopping Bag Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
        }}
      />

      {/* Global Interactive Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-4 sm:p-10">
          <div className="bg-neutral-950 border border-neutral-800 text-white w-full max-w-3xl mt-12 p-6 sm:p-8 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#DA291C] mb-2">
              Timepiece Search
            </h3>

            <div className="relative mb-6">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by collection, chronograph, automatic, gold, 41mm..."
                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3.5 text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-sm"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto space-y-3">
              {searchQuery.trim() === '' ? (
                <div className="text-xs text-neutral-500 py-6">
                  <p className="uppercase tracking-widest font-semibold text-neutral-400 mb-2">Popular Searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Chronomaster', 'Skeleton Valjoux', 'Monarch 18K', 'Nautilus Diver', 'PRX Special Edition'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-10 text-neutral-400 text-sm">
                  No timepieces found matching "{searchQuery}".
                </div>
              ) : (
                searchResults.map((watch) => (
                  <div
                    key={watch.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setSelectedProduct(watch);
                    }}
                    className="flex items-center space-x-4 p-3 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 cursor-pointer transition-colors"
                  >
                    <div className="w-14 h-14 bg-neutral-950 p-1 flex-shrink-0">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'assets/images/watch-silver-chrono.svg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.62rem] font-bold text-[#DA291C] tracking-widest uppercase">
                        {watch.category}
                      </p>
                      <h4 className="text-xs font-bold text-white uppercase truncate">{watch.name}</h4>
                      <p className="text-xs text-neutral-400">{watch.specs}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">{watch.priceFormatted}</p>
                      <span className="text-[0.62rem] text-neutral-500 uppercase tracking-widest">View →</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success Confirmation Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-neutral-950 border border-neutral-800 text-white max-w-lg w-full p-8 text-center space-y-6 animate-fadeIn shadow-2xl">
            <div className="flex justify-center mb-2">
              <img 
                src="assets/images/elvor-logo-transparent.png" 
                alt="ÉLVOR" 
                className="h-11 w-auto object-contain mx-auto" 
              />
            </div>
            <div className="w-14 h-14 bg-[#DA291C]/20 text-[#DA291C] border border-[#DA291C]/50 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-wide">
              Luxury Order Confirmed
            </h3>
            <p className="text-xs font-mono text-neutral-400">
              Reference: <span className="text-white font-bold">ELVOR-2026-8849</span>
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Thank you for choosing ÉLVOR. Your handcrafted timepiece is being prepared by our horological specialists. Our VIP courier will contact you with secure transit tracking credentials.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCheckoutSuccess(false)}
                className="btn-luxury-primary w-full text-center py-3 text-xs"
              >
                Return to ÉLVOR Atelier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Floating Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}


// ------------------------------------------
// Application Mount Point
// ------------------------------------------
(function() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App));
  }
})();
