// Quick reference for common tasks in UXI POS

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ANIMATION PATTERNS
 */

// Fade in effect
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide up effect
const slideUpVariant = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Scale on hover
const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

/**
 * STATE MANAGEMENT PATTERNS
 */

// Using usePOS hook
import { usePOS } from './hooks/usePOS';

function MyComponent() {
  const { addItem, currentOrder, updateItemQuantity } = usePOS();

  // Add item
  const handleAddItem = (item) => {
    addItem(item);
  };

  // Update quantity
  const handleUpdateQty = (lineId, qty) => {
    updateItemQuantity(lineId, qty);
  };

  return <div>{/* Component */}</div>;
}

/**
 * TAILWIND UTILITIES REFERENCE
 */

// Colors in the design system
const colors = {
  primary: 'bg-cream',           // Main background
  secondary: 'bg-pastel-pink',   // Soft accents
  accent: 'text-chocolate',      // Text/accents
  highlight: 'text-soft-gold',   // Premium highlights
};

// Glass effect
const glassClass = 'glass'; // bg-white/60 backdrop-blur-md border border-white/30

// Shadow utilities
const shadows = {
  light: 'shadow-sm-glass',       // 0 4px 15px
  medium: 'premium-shadow',        // 0 8px 32px
  large: 'premium-shadow-lg',      // 0 12px 40px
};

// Rounded corners
const rounded = {
  small: 'rounded-lg',             // 8px
  medium: 'rounded-xl',            // 12px
  large: 'rounded-2xl',            // 16px
  full: 'rounded-3xl',             // 24px
};

/**
 * COMPONENT TEMPLATES
 */

// Reusable Button
function QuickButton({ onClick, children, variant = 'primary' }) {
  return (
    <motion.button
      {...hoverScale}
      onClick={onClick}
      className={`
        px-4 py-2.5
        ${variant === 'primary' ? 'bg-soft-gold' : 'glass'}
        rounded-xl
        font-semibold
        shadow-sm-glass
        transition-all
      `}
    >
      {children}
    </motion.button>
  );
}

// Reusable Card
function QuickCard({ children, onClick }) {
  return (
    <motion.div
      {...hoverScale}
      onClick={onClick}
      className="glass rounded-2xl p-4 shadow-sm-glass hover:shadow-glass"
    >
      {children}
    </motion.div>
  );
}

/**
 * COMMON FORMULAS
 */

// Calculate cart total
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Format currency
const formatPrice = (price, decimals = 0) => {
  return `₹${price.toFixed(decimals)}`;
};

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9).toUpperCase();

/**
 * STYLING PATTERNS
 */

// Conditional styling
const conditionalStyle = (isActive) => `
  ${isActive ? 'bg-soft-gold text-chocolate' : 'glass text-chocolate/70'}
  transition-all duration-200
`;

// Dark text on light background
const textStyle = {
  primary: 'text-chocolate font-semibold',
  secondary: 'text-chocolate/70 text-sm',
  muted: 'text-chocolate/50 text-xs',
};

/**
 * PERFORMANCE TIPS
 */

// Use useCallback for frequently called functions
import { useCallback } from 'react';

function OptimizedComponent({ items }) {
  const handleCheck = useCallback((id) => {
    // Do something with id
  }, []);

  return <div>{/* Component */}</div>;
}

// Memoize expensive components
import React from 'react';

const MemoizedItem = React.memo(({ item, onAdd }) => {
  return <div onClick={() => onAdd(item)}>{item.name}</div>;
});

/**
 * RESPONSIVE PATTERNS
 */

// Mobile-first breakpoints
const responsive = {
  mobile: 'sm:',      // >= 640px
  tablet: 'lg:',      // >= 1024px
  desktop: 'xl:',     // >= 1280px
};

// Example grid
const gridExample = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;

/**
 * KEYBOARD SHORTCUTS (Can be implemented)
 */

const shortcuts = {
  'Ctrl+S': 'Save/Finalize',
  'Ctrl+H': 'Hold Order',
  'Ctrl+/': 'Search',
  'Ctrl+A': 'Add Item',
};

/**
 * API INTEGRATION TEMPLATE
 */

async function fetchAndDisplay() {
  try {
    // const orders = await orderService.getAllOrders();
    // setOrders(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    // Show error notification
  }
}

export default {
  fadeInVariant,
  slideUpVariant,
  hoverScale,
  calculateTotal,
  formatPrice,
  generateId,
  conditionalStyle,
  textStyle,
};
