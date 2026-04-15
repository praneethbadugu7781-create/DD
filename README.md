# 🎂 UXI POS - Premium Dessert Shop POS System

A sophisticated, high-end point-of-sale system UI built for premium dessert shops. Designed with Apple-level refinement, glassmorphism, and a light luxury aesthetic.

## ✨ Features

- **Multi-Order Management** - Hold and resume multiple orders simultaneously
- **Real-time Cart** - Live updates with smooth animations
- **Premium UI** - Glassmorphism effects, soft shadows, elegant typography
- **Payment Integration Ready** - Cash, UPI, Card payment methods
- **Order Queue** - Track active and completed orders
- **Search & Filter** - Categorized menu with real-time search
- **Responsive Design** - Works on desktop and tablet
- **Micro-interactions** - Smooth hover states, button press feedback

## 🎨 Design System

**Color Palette:**
- Primary: Soft Cream (#FFF8F0)
- Secondary: Pastel Pink (#FADADD)
- Accent: Chocolate Brown (#4A2C2A)
- Highlight: Soft Gold (#D4AF37)

**Typography:** Inter / San Francisco system font

**Components:**
- Glassmorphism with backdrop blur
- Rounded corners (12px-20px)
- Soft shadows with layered depth
- Premium spacing and alignment

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open automatically at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── index.jsx          # Reusable UI components
│   ├── TopBar.jsx             # Header with date/time
│   ├── MenuGrid.jsx           # Product menu grid
│   ├── MenuItem.jsx           # Individual menu item card
│   ├── Cart.jsx               # Shopping cart display
│   ├── CartItem.jsx           # Cart item row
│   ├── OrderQueue.jsx         # Order status queue
│   └── FinalizeOrderModal.jsx # Payment confirmation
├── hooks/
│   └── usePOS.js              # POS state management
├── constants/
│   └── menuItems.js           # Product data
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

## 🔧 Key Components

### usePOS Hook
Manages all POS state including:
- Order creation and management
- Cart items and quantities
- Order finalization
- Payment tracking

```javascript
const {
  orders,
  currentOrder,
  addItem,
  updateItemQuantity,
  removeItem,
  holdOrder,
  resumeOrder,
  finalizeOrder,
  showFinalizeModal,
  setShowFinalizeModal,
} = usePOS();
```

### UI Components

**Button** - Variants: primary, secondary, glass, gradient, danger
**Card** - Glass effect card with hover animation
**Badge** - Status badges with multiple color variants
**Modal** - Reusable modal with smooth animations

## 🎯 Usage Examples

### Add Item to Cart
```javascript
addItem(menuItem);
```

### Update Quantity
```javascript
updateItemQuantity(lineId, newQuantity);
```

### Hold Current Order
```javascript
holdOrder();
```

### Finalize Order with Payment
```javascript
finalizeOrder('cash'); // or 'upi', 'card'
```

## 🎬 Animations

- **Framer Motion** for smooth transitions
- Component entry animations (fade, slide-up)
- Hover state scaling and shadows
- Smooth quantity updates
- Order status transitions

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Menu grid automatically adjusts:
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

## 🎨 Customization

### Add New Menu Items
Edit `src/constants/menuItems.js`:

```javascript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 100,
  category: 'Category',
  image: 'https://...',
  description: 'Product description',
}
```

### Modify Colors
Update `tailwind.config.js`:

```javascript
colors: {
  cream: "#FFF8F0",
  "pastel-pink": "#FADADD",
  // Add your custom colors
}
```

## 📊 Order Status Flow

```
Order Created (OPEN)
      ↓
Items Added to Cart
      ↓
Hold/Resume (Multiple Orders)
      ↓
Finalize Order (Select Payment)
      ↓
Order Complete (COMPLETED)
```

## 🚀 Production Deployment

```bash
# Build optimized production bundle
npm run build

# Output in dist/ folder
# Deploy dist/ to your hosting service
```

## 📝 License

Premium Commercial - All Rights Reserved

---

**Made with ❤️ for premium dessert shops**
