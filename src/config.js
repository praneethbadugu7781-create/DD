// Configuration file for UXI POS
export const CONFIG = {
  // Shop Details
  shop: {
    name: 'UXI POS',
    tagline: 'Premium Dessert Shop',
  },

  // Currency
  currency: {
    symbol: '₹',
    code: 'INR',
  },

  // Payment Methods
  paymentMethods: [
    { id: 'cash', name: 'Cash' },
    { id: 'upi', name: 'UPI' },
    { id: 'card', name: 'Card' },
  ],

  // Order Status
  orderStatus: {
    OPEN: 'Open',
    PREPARING: 'Preparing',
    READY: 'Ready',
    COMPLETED: 'Completed',
  },

  // UI Settings
  ui: {
    // Decimal places for prices
    priceDecimals: 0,
    // Animation duration in ms
    animationDuration: 300,
    // Max items in queue to show
    maxQueueItems: 10,
  },

  // API Endpoints (for future backend integration)
  api: {
    base: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
    endpoints: {
      orders: '/orders',
      items: '/items',
      payments: '/payments',
    },
  },
};

export default CONFIG;
