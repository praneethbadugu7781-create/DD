# 🎯 UXI POS - Component Architecture & Design System

## Component Hierarchy

```
App.jsx
├── TopBar
│   └── Date/Time display, Active orders badge, Profile
├── Main Content Area
│   ├── Left Panel: MenuGrid
│   │   ├── Search Input
│   │   ├── Category Filter
│   │   └── MenuItem (Grid - Dynamic)
│   │       ├── Product Image
│   │       ├── Category Badge
│   │       ├── Name & Description
│   │       ├── Price Display
│   │       └── Add Button
│   │
│   └── Right Panel
│       ├── Cart
│       │   ├── Header (Item Count)
│       │   ├── Items List
│       │   │   └── CartItem (Animated List)
│       │   │       ├── Quantity Controls (-, Input, +)
│       │   │       ├── Item Total
│       │   │       └── Delete Button
│       │   ├── Divider
│       │   ├── Pricing Summary
│       │   └── Action Buttons (Hold, Finalize)
│       │
│       └── OrderQueue
│           ├── Active Orders
│           │   └── Order Card (Multiple)
│           │       ├── Order ID
│           │       ├── Status Badge
│           │       ├── Item Count
│           │       └── Total
│           └── Completed Orders
│               └── Order Card (Read-only)
│
└── FinalizeOrderModal
    ├── Order Total Display
    ├── Payment Method Selection (Cash, UPI, Card)
    ├── Confirmation Info
    └── Action Buttons (Cancel, Confirm)
```

## UI Component Library

### Button Component
```javascript
<Button
  variant="primary"        // primary, secondary, glass, gradient, danger
  size="md"               // sm, md, lg
  disabled={false}
  onClick={handleClick}
>
  Label
</Button>
```

**Variants:**
- `primary` → Soft gold background
- `secondary` → Pastel pink background
- `glass` → Glassmorphic effect
- `gradient` → Gold to pink gradient
- `danger` → Red tinted

### Card Component
```javascript
<Card onClick={handleClick} className="custom-class">
  Content here
</Card>
```

**Features:**
- Hover animation (y: -2)
- Glass effect by default
- Smooth shadow transition

### Badge Component
```javascript
<Badge
  text="OPEN"
  variant="info"          // default, success, warning, info, gold
/>
```

### Modal Component
```javascript
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
>
  Content here
</Modal>
```

## Color System

| Name | Hex | Usage | CSS Class |
|------|-----|-------|-----------|
| **Cream** | #FFF8F0 | Background | `bg-cream` |
| **Light Cream** | #FFFBF7 | Alt Background | `bg-light-cream` |
| **Pastel Pink** | #FADADD | Secondary UI | `bg-pastel-pink` |
| **Chocolate** | #4A2C2A | Text/Accent | `text-chocolate` |
| **Soft Gold** | #D4AF37 | Highlights/CTA | `bg-soft-gold` |
| **Border Light** | #F5E6D3 | Dividers | `border-border-light` |

## Typography

```css
/* Font */
font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

/* Sizes */
text-xs   → 12px    (Labels, hints)
text-sm   → 14px    (Body, descriptions)
text-base → 16px    (Paragraph)
text-lg   → 18px    (Subheading)
text-xl   → 20px    (Heading)
text-2xl  → 24px    (Main heading)

/* Weights */
font-semibold → 600 (Buttons, emphasis)
font-bold     → 700 (Headings)
```

## Animation System

### Using Framer Motion

```javascript
import { motion, AnimatePresence } from 'framer-motion';

// Simple fade
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>

// List animation
<AnimatePresence>
  {items.map(item => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      {item.name}
    </motion.div>
  ))}
</AnimatePresence>
```

## Shadow System

```css
/* Glass Effect */
shadow-glass        → 0 8px 32px rgba(31, 38, 135, 0.07)
shadow-glass-hover  → 0 12px 40px rgba(31, 38, 135, 0.12)
shadow-sm-glass     → 0 4px 15px rgba(31, 38, 135, 0.05)
```

## Spacing Scale

```css
/* Consistent spacing */
p-0   → 0
p-1   → 0.25rem (4px)
p-2   → 0.5rem  (8px)
p-3   → 0.75rem (12px)
p-4   → 1rem    (16px)  ← Default
p-6   → 1.5rem  (24px)  ← Large
p-8   → 2rem    (32px)
```

## Responsive Breakpoints

```javascript
// Mobile First Approach
<div className="
  grid
  grid-cols-1        // Mobile: 1 column
  sm:grid-cols-2     // Tablet: 2 columns (640px+)
  lg:grid-cols-3     // Desktop: 3 columns (1024px+)
">
```

## State Management Pattern

Using `usePOS` hook:

```javascript
const {
  orders,                 // All orders array
  currentOrder,           // Currently active order
  currentOrderId,         // Current order ID
  addItem,                // Add item to cart
  updateItemQuantity,     // Update item qty
  removeItem,             // Remove item
  holdOrder,              // Create new order
  resumeOrder,            // Switch to order
  finalizeOrder,          // Complete order
  showFinalizeModal,      // Modal state
  setShowFinalizeModal,   // Toggle modal
} = usePOS();
```

## Order Data Structure

```javascript
{
  id: "ABC123D",                    // Unique ID
  items: [
    {
      id: "choco-cake",            // Menu item ID
      name: "Chocolate Eclair",
      price: 120,
      quantity: 2,
      lineId: "LINE-XYZ789",       // Unique line ID
    }
  ],
  status: "OPEN",                   // OPEN, PREPARING, READY, COMPLETED
  total: 240,                       // Calculated total
  paymentMethod: "cash",            // From finalization
  createdAt: Date,                  // Timestamp
  completedAt: Date,                // When finished
}
```

## Best Practices

### ✅ DO:
- Use Tailwind utility classes for styling
- Wrap animations in `motion` component
- Keep components small and focused
- Use hooks for state management
- Add proper key props to lists
- Memoize expensive components

### ❌ DON'T:
- Mix inline CSS with Tailwind
- Create deeply nested components
- Forget AnimatePresence for exit animations
- Use hardcoded values (use config instead)
- Block main thread with heavy calculations
- Ignore accessibility (alt text, labels)

## File Organization

```
src/
├── components/          # All React components
│   ├── common/         # Reusable UI components
│   ├── ItemName.jsx    # One component per file
│   └── ItemName.jsx
├── hooks/              # Custom React hooks
├── constants/          # Data and constants
├── services/           # API and utilities
├── config.js           # Configuration
├── App.jsx             # Main app
└── main.jsx            # Entry point
```

## Performance Checklist

- ✅ Lazy load images with `img` tags
- ✅ Use `AnimatePresence` for unmounting animations
- ✅ Memoize callback props with `useCallback`
- ✅ Avoid unnecessary state updates
- ✅ Use `key` prop properly in lists
- ✅ Split large components

## Accessibility Notes

- Buttons have proper `onClick` handlers
- Images should have `alt` text
- Form inputs labeled properly
- Color not only indicator of status
- Keyboard navigation support

---

**Last Updated:** 2026-04-15
