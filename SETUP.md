# 🚀 UXI POS - Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
  - Download: https://nodejs.org/
  - Verify: `node --version` & `npm --version`

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

## Step 2: Run Development Server

```bash
npm run dev
```

The application will:
- Start on http://localhost:3000
- Automatically open in your default browser
- Hot reload on file changes

## Step 3: Access the Application

Open http://localhost:3000 in your browser. You should see a premium, elegant POS interface with:

- **Left Panel**: Menu grid with dessert items
- **Right Panel**: Shopping cart with order queue
- **Top Bar**: Live clock, order count, profile icon

## 🎯 How to Use

### Adding Items to Cart

1. Browse the menu on the left side
2. Use search to find items quickly
3. Filter by category (Desserts, Brownies, Shakes, etc.)
4. Click the **+** button on any item to add to cart
5. Cart updates automatically on the right

### Managing Quantities

1. In the cart, use the **-** and **+** buttons to adjust quantities
2. Or directly type quantity in the input field
3. Cart total updates in real-time

### Holding Orders

1. Add items to cart
2. Click **"Hold Order"** button
3. A new order is created automatically
4. You can manage multiple orders simultaneously
5. Click on order cards in the queue to resume editing

### Finalizing Payment

1. Click **"Finalize"** button on current order
2. Select payment method:
   - 💰 **Cash**
   - 📱 **UPI**
   - 💳 **Card**
3. Click **"Confirm Payment"**
4. Order is completed and removed from active queue

### Viewing Order History

- Completed orders appear in the "Completed" section
- Shows order total and completion status
- Recent orders are kept visible for reference

## 📁 File Structure Overview

```
/c/DD/
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
├── README.md                  # Project documentation
├── SETUP.md                   # This file
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main App component
    ├── index.css              # Global styles
    ├── config.js              # Configuration
    ├── constants/
    │   └── menuItems.js       # Menu data
    ├── hooks/
    │   └── usePOS.js          # State management
    ├── services/
    │   └── api.js             # API integration (future)
    └── components/
        ├── common/
        │   └── index.jsx      # Reusable UI components
        ├── TopBar.jsx         # Header
        ├── MenuGrid.jsx       # Menu
        ├── MenuItem.jsx       # Menu item card
        ├── Cart.jsx           # Cart display
        ├── CartItem.jsx       # Cart item
        ├── OrderQueue.jsx     # Order queue
        └── FinalizeOrderModal.jsx # Payment modal
```

## 🎨 Customization Guide

### Change Menu Items

Edit `src/constants/menuItems.js`:

```javascript
export const MENU_ITEMS = [
  {
    id: 'unique-id',
    name: 'Product Name',
    price: 120,
    category: 'Category',
    image: 'https://image-url.jpg',
    description: 'Product details',
  },
  // Add more items...
];
```

### Modify Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cream: "#FFF8F0",           // Primary background
  "pastel-pink": "#FADADD",   // Secondary
  "chocolate": "#4A2C2A",     // Accent text
  "soft-gold": "#D4AF37",     // Highlight
}
```

### Update Shop Details

Edit `src/config.js`:

```javascript
export const CONFIG = {
  shop: {
    name: 'Your Shop Name',
    tagline: 'Your Tagline',
  },
  currency: {
    symbol: '₹',
    code: 'INR',
  },
  // ... more config
};
```

## 🔧 Development Tips

### Hot Module Reload (HMR)

Changes are automatically reflected in the browser. No manual refresh needed!

### Console Debugging

Open browser DevTools (F12) to see:
- React component hierarchy
- Tailwind utility usage
- Animation performance

### Performance Optimization

The app includes:
- Lazy animations for smooth 60fps
- Optimized re-renders with React hooks
- CSS-in-JS with Tailwind for minimal bundle

## 📦 Build for Production

```bash
npm run build
```

Output directory: `dist/`

This creates an optimized production bundle that can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

### Preview Production Build

```bash
npm run preview
```

This runs the production bundle locally for testing.

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# macOS/Linux
npm run dev -- --port 3001

# Windows
npm run dev -- --port 3001
```

### Tailwind Classes Not Applying

1. Save the file again to trigger HMR
2. Clear browser cache (Ctrl+Shift+Delete)
3. Verify tailwind.config.js includes your new files

### Animations Not Working

1. Check Framer Motion is installed: `npm list framer-motion`
2. Verify motion imports: `import { motion } from 'framer-motion'`

### Images Not Loading

1. Check image URLs are accessible
2. Use HTTPS URLs for external images
3. Consider using local images in `public/` folder

## 📚 Additional Resources

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev
- Vite Docs: https://vitejs.dev/

## 💡 Next Steps

### To Add Backend Integration

1. Create a Node.js/Express server
2. Update `src/services/api.js`
3. Call API endpoints in hooks
4. Update `src/config.js` with API base URL

### To Add Features

- **Receipt Printing**: Add receipt UI and print functionality
- **Discount System**: Add discount input to payment modal
- **Analytics**: Track sales and popular items
- **Multi-user**: Add different staff roles
- **Database**: Store orders in persistent database

## 🎯 Success Checklist

- ✅ Node.js and npm installed
- ✅ Dependencies installed (`npm install`)
- ✅ Dev server running (`npm run dev`)
- ✅ App visible at localhost:3000
- ✅ Can add items to cart
- ✅ Can finalize orders
- ✅ Animations working smoothly

## 📞 Support

For issues or questions:
1. Check this guide again
2. Review console errors (DevTools)
3. Check GitHub issues for similar problems
4. Review code comments in components

---

**Happy selling! 🎂✨**
