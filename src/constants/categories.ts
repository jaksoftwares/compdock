// constants/categories.ts
export type Category = {
  id: string;
  name: string;
  children?: Category[];
};

export const categories: Category[] = [
  {
    id: "computing",
    name: "Computing",
    children: [
      
      {
        id: "laptops",
        name: "Laptops",
        children: [
          { id: "ultrabooks", name: "Ultrabooks" },
          { id: "gaming-laptops", name: "Gaming Laptops" },
          { id: "business-laptops", name: "Business Laptops" }, 
          { id: "traditional-laptops", name: "Traditional Laptops" },
          { id: "refurbished-laptops", name: "Refurbished Laptops" },
          { id: "workstation-laptops", name: "Workstation Laptops" }, 
        ],
      },
      
      {
        id: "desktops",
        name: "Desktops",
        children: [
          { id: "all-in-one", name: "All-in-One PCs" },
          { id: "towers", name: "Tower PCs" },
          { id: "mini-pcs", name: "Mini PCs" },
          { id: "workstation-pcs", name: "Workstation PCs" }, // Added
          { id: "gaming-desktops", name: "Gaming Desktops" }, // Added
        ],
      },
      
      {
        id: "servers",
        name: "Servers",
        children: [
          { id: "rack-servers", name: "Rack Servers" },
          { id: "tower-servers", name: "Tower Servers" },
          { id: "blade-servers", name: "Blade Servers" },
          { id: "server-accessories", name: "Server Accessories" },
        ],
      },
      
      {
        id: "laptop-accessories",
        name: "Laptop Accessories",
        children: [
          { id: "batteries", name: "Batteries" },
          { id: "chargers", name: "Chargers & Adapters" },
          { id: "cooling", name: "Cooling Pads & External Fans" },
          { id: "screens", name: "Replacement Screens" },
          { id: "security", name: "Security Locks" },
          { id: "docking-stations", name: "Docking Stations" }, // Added
          { id: "keyboard-covers", name: "Keyboard Covers" }, // Added
          { id: "palm-rests", name: "Palm Rests" }, // Added
        ],
      },
      // Storage (restructured and expanded)
      {
        id: "storage",
        name: "Storage Devices",
        children: [
          { 
            id: "internal-storage", 
            name: "Internal Storage",
            children: [
              { id: "internal-hdd", name: "Internal HDDs" },
              { id: "internal-ssd", name: "Internal SSDs" },
              { id: "nvme-ssd", name: "NVMe SSDs" }, // Added
              { id: "sshd", name: "Hybrid SSHDs" }, // Added
            ]
          },
          { 
            id: "external-storage", 
            name: "External Storage",
            children: [
              { id: "external-hdd", name: "External HDDs" },
              { id: "external-ssd", name: "External SSDs" },
              { id: "nas", name: "NAS Devices" },
              { id: "das", name: "DAS Devices" },
            ]
          },
          { id: "flash-drives", name: "USB Flash Drives" },
          { id: "memory-cards", name: "Memory Cards" },
          { id: "optical-drives", name: "Optical Drives" },
        ],
      },
      // Input Devices (expanded)
      {
        id: "input-devices",
        name: "Input Devices",
        children: [
          { 
            id: "keyboards", 
            name: "Keyboards",
            children: [
              { id: "mechanical", name: "Mechanical Keyboards" },
              { id: "membrane", name: "Membrane Keyboards" },
              { id: "wireless-keyboards", name: "Wireless Keyboards" },
            ]
          },
          { 
            id: "mice", 
            name: "Mice",
            children: [
              { id: "gaming-mice", name: "Gaming Mice" },
              { id: "wireless-mice", name: "Wireless Mice" },
              { id: "ergonomic-mice", name: "Ergonomic Mice" },
            ]
          },
          { id: "combos", name: "Keyboard & Mouse Combos" },
          { id: "graphic-tablets", name: "Graphic Tablets" }, // Added
          { id: "game-controllers", name: "Game Controllers" }, // Added
          { id: "presentation-remotes", name: "Presentation Remotes" }, // Added
          { id: "barcode-scanners", name: "Barcode Scanners" }, // Added
        ],
      },
      // New: Display category
      {
        id: "displays",
        name: "Displays",
        children: [
          { id: "monitors", name: "Computer Monitors" },
          { id: "touchscreens", name: "Touchscreen Displays" }, // Added
          { id: "digital-signage", name: "Digital Signage" }, // Added
        ],
      },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    children: [
      {
        id: "network-devices",
        name: "Network Devices",
        children: [
          { id: "routers", name: "Routers" },
          { id: "modems", name: "Modems" },
          { id: "switches", name: "Switches" },
          { id: "access-points", name: "Wireless Access Points" }, // Added
          { id: "firewalls", name: "Network Firewalls" }, // Added
          { id: "nas", name: "NAS Devices" }, // Added
          { id: "media-converters", name: "Media Converters" }, // Added
        ],
      },
      {
        id: "network-adapters",
        name: "Network Adapters",
        children: [
          { id: "wifi-adapters", name: "Wi-Fi Adapters" }, // Added
          { id: "ethernet-cards", name: "Ethernet Cards" },
          { id: "bluetooth-adapters", name: "Bluetooth Adapters" }, // Added
        ],
      },
      {
        id: "network-infrastructure",
        name: "Infrastructure",
        children: [
          { id: "cables", name: "Network Cables" }, // Expanded
          { id: "patch-panels", name: "Patch Panels" }, // Added
          { id: "racks", name: "Server Racks" }, // Added
          { id: "cable-management", name: "Cable Management" }, // Added
          { id: "powerline-adapters", name: "Powerline Adapters" }, // Added
        ],
      },
      { id: "wifi-extenders", name: "Wi-Fi Range Extenders" },
      { id: "network-security", name: "Network Security" }, // Added
    ],
  },
  {
    id: "components",
    name: "Computer Components",
    children: [
      { 
        id: "processors", 
        name: "Processors",
        children: [
          { id: "desktop-cpu", name: "Desktop CPUs" },
          { id: "laptop-cpu", name: "Laptop CPUs" },
          { id: "server-cpu", name: "Server CPUs" },
        ]
      },
      { id: "motherboards", name: "Motherboards" },
      {
        id: "memory",
        name: "Memory",
        children: [
          { id: "desktop-ram", name: "Desktop RAM" },
          { id: "laptop-ram", name: "Laptop RAM" },
          { id: "server-ram", name: "Server RAM" },
          { id: "ecc-memory", name: "ECC Memory" }, // Added
        ],
      },
      {
        id: "graphics",
        name: "Graphics Cards",
        children: [
          { id: "gaming-gpu", name: "Gaming GPUs" },
          { id: "workstation-gpu", name: "Workstation GPUs" }, // Added
        ],
      },
      {
        id: "cooling",
        name: "Cooling Solutions", // Expanded
        children: [
          { id: "cpu-coolers", name: "CPU Coolers" },
          { id: "case-fans", name: "Case Fans" },
          { id: "liquid-cooling", name: "Liquid Cooling" },
          { id: "thermal-compound", name: "Thermal Paste/Compound" },
        ],
      },
      { id: "power-supplies", name: "Power Supplies" },
      {
        id: "cases",
        name: "PC Cases",
        children: [
          { id: "atx-cases", name: "ATX Cases" },
          { id: "mini-itx", name: "Mini-ITX Cases" },
          { id: "server-chassis", name: "Server Chassis" },
        ],
      },
      {
        id: "expansion-cards",
        name: "Expansion Cards", // Added
        children: [
          { id: "sound-cards", name: "Sound Cards" },
          { id: "usb-cards", name: "USB Expansion Cards" },
          { id: "capture-cards", name: "Capture Cards" },
        ],
      },
    ],
  },
  {
    id: "peripherals",
    name: "Peripherals",
    children: [
      {
        id: "printers-scanners",
        name: "Printers & Scanners", // Expanded
        children: [
          { id: "inkjet", name: "Inkjet Printers" },
          { id: "laser", name: "Laser Printers" },
          { id: "multifunction", name: "Multifunction Printers" },
          { id: "dot-matrix", name: "Dot Matrix Printers" }, // Added
          { id: "label-printers", name: "Label Printers" }, // Added
          { id: "document-scanners", name: "Document Scanners" },
          { id: "film-scanners", name: "Film Scanners" }, // Added
        ],
      },
      {
        id: "display-peripherals",
        name: "Display Accessories", // Added
        children: [
          { id: "monitor-stands", name: "Monitor Stands" },
          { id: "monitor-arms", name: "Monitor Arms" },
          { id: "privacy-filters", name: "Privacy Filters" },
          { id: "color-calibrators", name: "Color Calibrators" }, // Added
        ],
      },
      { id: "webcams", name: "Webcams" },
      {
        id: "projectors",
        name: "Projectors",
        children: [
          { id: "home-projectors", name: "Home/Office Projectors" },
          { id: "portable-projectors", name: "Portable Projectors" },
        ],
      },
      {
        id: "kvm",
        name: "KVM Equipment", // Added
        children: [
          { id: "kvm-switches", name: "KVM Switches" },
          { id: "kvm-extenders", name: "KVM Extenders" },
        ],
      },
    ],
  },
  {
    id: "mobile-devices",
    name: "Mobile & Wearables", // Renamed and expanded
    children: [
      {
        id: "smartphones",
        name: "Smartphones",
        children: [
          { id: "android", name: "Android Phones" },
          { id: "ios", name: "iOS Phones" },
          { id: "business-phones", name: "Business Phones" },
        ],
      },
      { id: "tablets", name: "Tablets" },
      {
        id: "wearables",
        name: "Wearables", // Expanded
        children: [
          { id: "smartwatches", name: "Smartwatches" },
          { id: "fitness-trackers", name: "Fitness Trackers" },
          { id: "smart-glasses", name: "Smart Glasses" }, // Added
          { id: "vr-headsets", name: "VR Headsets" }, // Added
        ],
      },
      {
        id: "mobile-accessories",
        name: "Mobile Accessories", // Expanded
        children: [
          { id: "phone-cases", name: "Phone Cases" },
          { id: "screen-protectors", name: "Screen Protectors" },
          { id: "mobile-chargers", name: "Chargers & Power Banks" },
          { id: "mobile-holders", name: "Holders & Mounts" },
          { id: "stylus-pens", name: "Stylus Pens" }, // Added
          { id: "mobile-sound", name: "Mobile Audio" }, // Added
        ],
      },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    children: [
      {
        id: "headphones",
        name: "Headphones",
        children: [
          { id: "over-ear", name: "Over-Ear" },
          { id: "on-ear", name: "On-Ear" },
          { id: "noise-cancelling", name: "Noise Cancelling" },
        ],
      },
      {
        id: "earbuds",
        name: "Earbuds",
        children: [
          { id: "true-wireless", name: "True Wireless" },
          { id: "neckbands", name: "Neckband Style" },
        ],
      },
      {
        id: "speakers",
        name: "Speakers",
        children: [
          { id: "bluetooth-speakers", name: "Bluetooth Speakers" },
          { id: "computer-speakers", name: "Computer Speakers" },
          { id: "soundbars", name: "Soundbars" }, // Added
        ],
      },
      {
        id: "pro-audio",
        name: "Professional Audio", // Added
        children: [
          { id: "microphones", name: "Microphones" },
          { id: "audio-interfaces", name: "Audio Interfaces" },
          { id: "mixers", name: "Audio Mixers" }, // Added
          { id: "studio-monitors", name: "Studio Monitors" }, // Added
        ],
      },
      {
        id: "audio-accessories",
        name: "Accessories", // Added
        children: [
          { id: "headphone-stands", name: "Headphone Stands" },
          { id: "cables-adapters", name: "Cables & Adapters" },
          { id: "dac-amps", name: "DACs & Amplifiers" }, // Added
        ],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    children: [
      {
        id: "bags-cases",
        name: "Bags & Cases",
        children: [
          { id: "laptop-bags", name: "Laptop Bags & Backpacks" },
          { id: "tablet-cases", name: "Tablet Cases" },
          { id: "hard-cases", name: "Hard Protective Cases" }, // Added
          { id: "sleeves", name: "Sleeves" },
        ],
      },
      {
        id: "cables-adapters",
        name: "Cables & Adapters", // Expanded
        children: [
          { id: "usb-cables", name: "USB Cables" },
          { id: "video-cables", name: "Video Cables" },
          { id: "network-cables", name: "Network Cables" },
          { id: "power-cables", name: "Power Cables" },
          { id: "adapters", name: "Adapters & Converters" },
          { id: "dongles", name: "Dongles & Hubs" }, // Added
        ],
      },
      {
        id: "power",
        name: "Power Solutions", // Expanded
        children: [
          { id: "ups", name: "UPS Systems" }, // Added
          { id: "surge-protectors", name: "Surge Protectors" },
          { id: "battery-backups", name: "Portable Power Banks" }, // Added
        ],
      },
      {
        id: "ergonomics",
        name: "Ergonomics", // Added
        children: [
          { id: "monitor-stands", name: "Monitor Stands" },
          { id: "laptop-stands", name: "Laptop Stands" },
          { id: "keyboard-trays", name: "Keyboard Trays" },
          { id: "wrist-rests", name: "Wrist Rests" },
        ],
      },
      {
        id: "maintenance",
        name: "Maintenance", // Expanded
        children: [
          { id: "cleaning-kits", name: "Cleaning Kits" },
          { id: "compressed-air", name: "Compressed Air" }, // Added
          { id: "toolkits", name: "Repair Toolkits" },
          { id: "thermal-paste", name: "Thermal Paste" }, // Added
        ],
      },
      {
        id: "security",
        name: "Security", // Added
        children: [
          { id: "cable-locks", name: "Cable Locks" },
          { id: "privacy-screens", name: "Privacy Screens" },
          { id: "webcam-covers", name: "Webcam Covers" },
          { id: "biometric-devices", name: "Biometric Devices" }, // Added
        ],
      },
    ],
  },
  {
    id: "software",
    name: "Software & Services", // Renamed and expanded
    children: [
      {
        id: "operating-systems",
        name: "Operating Systems",
        children: [
          { id: "windows", name: "Windows" },
          { id: "macos", name: "macOS" },
          { id: "linux", name: "Linux Distributions" }, // Added
        ],
      },
      {
        id: "productivity",
        name: "Productivity",
        children: [
          { id: "office-suites", name: "Office Suites" },
          { id: "pdf-tools", name: "PDF Tools" }, // Added
          { id: "project-management", name: "Project Management" }, // Added
        ],
      },
      {
        id: "security-software",
        name: "Security Software",
        children: [
          { id: "antivirus", name: "Antivirus" },
          { id: "vpn", name: "VPN Services" }, // Added
          { id: "encryption", name: "Encryption Tools" }, // Added
        ],
      },
      {
        id: "creative",
        name: "Creative Software",
        children: [
          { id: "graphic-design", name: "Graphic Design" },
          { id: "video-editing", name: "Video Editing" },
          { id: "cad", name: "CAD Software" }, // Added
        ],
      },
      {
        id: "development",
        name: "Development Tools", // Added
        children: [
          { id: "ides", name: "IDEs" },
          { id: "database-tools", name: "Database Tools" },
        ],
      },
      {
        id: "cloud-services",
        name: "Cloud Services", // Added
        children: [
          { id: "storage", name: "Cloud Storage" },
          { id: "backup", name: "Backup Solutions" },
        ],
      },
    ],
  },
  // New top-level categories
  {
    id: "gaming",
    name: "Gaming",
    children: [
      {
        id: "gaming-hardware",
        name: "Gaming Hardware",
        children: [
          { id: "gaming-pcs", name: "Gaming PCs" },
          { id: "gaming-laptops", name: "Gaming Laptops" },
          { id: "gaming-consoles", name: "Gaming Consoles" }, // Added
        ],
      },
      {
        id: "gaming-peripherals",
        name: "Gaming Peripherals",
        children: [
          { id: "gaming-keyboards", name: "Gaming Keyboards" },
          { id: "gaming-mice", name: "Gaming Mice" },
          { id: "gaming-headsets", name: "Gaming Headsets" },
          { id: "racing-wheels", name: "Racing Wheels" }, // Added
          { id: "game-controllers", name: "Controllers" },
        ],
      },
      {
        id: "gaming-accessories",
        name: "Gaming Accessories",
        children: [
          { id: "mousepads", name: "Gaming Mousepads" },
          { id: "gaming-chairs", name: "Gaming Chairs" }, // Added
          { id: "vr-accessories", name: "VR Accessories" }, // Added
        ],
      },
    ],
  },
  {
    id: "cctv-security",
    name: "CCTV & Security", // New category
    children: [
      { id: "security-cameras", name: "Security Cameras" },
      { id: "dvr-nvr", name: "DVR/NVR Systems" },
      { id: "surveillance-accessories", name: "Accessories" },
      { id: "access-control", name: "Access Control Systems" }, // Added
    ],
  },
  {
    id: "pos-retail",
    name: "POS & Retail", // New category
    children: [
      { id: "pos-systems", name: "POS Systems" },
      { id: "barcode-printers", name: "Barcode Printers" },
      { id: "cash-drawers", name: "Cash Drawers" }, // Added
      { id: "receipt-printers", name: "Receipt Printers" }, // Added
    ],
  },
];