import axios from 'axios';
import CONFIG from '../config';

// Note: Install axios when ready to integrate with backend
// npm install axios

const apiClient = axios.create({
  baseURL: CONFIG.api.base,
  timeout: 10000,
});

// Add request interceptor for auth tokens (future implementation)
apiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const orderService = {
  // Get all orders
  getAllOrders: () => apiClient.get(CONFIG.api.endpoints.orders),

  // Get single order
  getOrder: (orderId) => apiClient.get(`${CONFIG.api.endpoints.orders}/${orderId}`),

  // Create order
  createOrder: (orderData) => apiClient.post(CONFIG.api.endpoints.orders, orderData),

  // Update order
  updateOrder: (orderId, orderData) =>
    apiClient.put(`${CONFIG.api.endpoints.orders}/${orderId}`, orderData),

  // Delete order
  deleteOrder: (orderId) =>
    apiClient.delete(`${CONFIG.api.endpoints.orders}/${orderId}`),
};

export const itemService = {
  // Get all items
  getAllItems: () => apiClient.get(CONFIG.api.endpoints.items),

  // Create item
  createItem: (itemData) => apiClient.post(CONFIG.api.endpoints.items, itemData),

  // Update item
  updateItem: (itemId, itemData) =>
    apiClient.put(`${CONFIG.api.endpoints.items}/${itemId}`, itemData),

  // Delete item
  deleteItem: (itemId) =>
    apiClient.delete(`${CONFIG.api.endpoints.items}/${itemId}`),
};

export const paymentService = {
  // Process payment
  processPayment: (paymentData) =>
    apiClient.post(CONFIG.api.endpoints.payments, paymentData),

  // Get payment history
  getPaymentHistory: () => apiClient.get(CONFIG.api.endpoints.payments),
};

export default apiClient;
