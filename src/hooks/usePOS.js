import { useState, useCallback, useEffect } from 'react';

const generateId = () => Math.random().toString(36).substr(2, 9).toUpperCase();

export const usePOS = () => {
  const [orders, setOrders] = useState([
    {
      id: '101',
      items: [],
      status: 'OPEN',
      total: 0,
      createdAt: new Date(),
    },
  ]);

  const [currentOrderId, setCurrentOrderId] = useState('101');
  const [showFinalizeModal, setShowFinalizeModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const currentOrder = orders.find((order) => order.id === currentOrderId);

  // Add item to current order
  const addItem = useCallback(
    (item) => {
      setOrders((prev) =>
        prev.map((order) => {
          if (order.id === currentOrderId) {
            const existingItem = order.items.find((i) => i.id === item.id);
            if (existingItem) {
              return {
                ...order,
                items: order.items.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
              };
            }
            return {
              ...order,
              items: [...order.items, { ...item, quantity: 1, lineId: generateId() }],
            };
          }
          return order;
        })
      );
    },
    [currentOrderId]
  );

  // Update item quantity
  const updateItemQuantity = useCallback(
    (lineId, quantity) => {
      if (quantity <= 0) {
        removeItem(lineId);
        return;
      }
      setOrders((prev) =>
        prev.map((order) => {
          if (order.id === currentOrderId) {
            return {
              ...order,
              items: order.items.map((i) =>
                i.lineId === lineId ? { ...i, quantity } : i
              ),
            };
          }
          return order;
        })
      );
    },
    [currentOrderId]
  );

  // Remove item from cart
  const removeItem = useCallback(
    (lineId) => {
      setOrders((prev) =>
        prev.map((order) => {
          if (order.id === currentOrderId) {
            return {
              ...order,
              items: order.items.filter((i) => i.lineId !== lineId),
            };
          }
          return order;
        })
      );
    },
    [currentOrderId]
  );

  // Hold / Save current order
  const holdOrder = useCallback(() => {
    const newOrderId = generateId();
    setOrders((prev) => [
      ...prev,
      {
        id: newOrderId,
        items: [],
        status: 'OPEN',
        total: 0,
        createdAt: new Date(),
      },
    ]);
    setCurrentOrderId(newOrderId);
  }, []);

  // Resume order
  const resumeOrder = useCallback((orderId) => {
    setCurrentOrderId(orderId);
  }, []);

  // Finalize order
  const finalizeOrder = useCallback(
    (paymentMethod) => {
      setOrders((prev) =>
        prev.map((order) => {
          if (order.id === currentOrderId) {
            return {
              ...order,
              status: 'COMPLETED',
              paymentMethod,
              completedAt: new Date(),
            };
          }
          return order;
        })
      );
      holdOrder();
      setShowFinalizeModal(false);
    },
    [currentOrderId, holdOrder]
  );

  // Calculate total
  useEffect(() => {
    setOrders((prev) =>
      prev.map((order) => {
        const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { ...order, total };
      })
    );
  }, [orders.map((o) => o.items.length)]);

  return {
    orders,
    currentOrder,
    currentOrderId,
    addItem,
    updateItemQuantity,
    removeItem,
    holdOrder,
    resumeOrder,
    finalizeOrder,
    setCurrentOrderId,
    showFinalizeModal,
    setShowFinalizeModal,
    showItemModal,
    setShowItemModal,
    editingItem,
    setEditingItem,
  };
};
