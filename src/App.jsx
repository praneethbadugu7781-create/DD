import React from 'react';
import { motion } from 'framer-motion';
import { TopBar } from './components/TopBar';
import { MenuGrid } from './components/MenuGrid';
import { Cart } from './components/Cart';
import { OrderQueue } from './components/OrderQueue';
import { FinalizeOrderModal } from './components/FinalizeOrderModal';
import { usePOS } from './hooks/usePOS';

export default function App() {
  const {
    orders,
    currentOrder,
    currentOrderId,
    addItem,
    updateItemQuantity,
    removeItem,
    holdOrder,
    resumeOrder,
    finalizeOrder,
    showFinalizeModal,
    setShowFinalizeModal,
  } = usePOS();

  const openOrders = orders.filter((order) => order.status !== 'COMPLETED');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-warm-cream"
    >
      {/* Header */}
      <TopBar orderCount={openOrders.length} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-88px)]">
        {/* Left Panel - Menu */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 overflow-hidden p-3 sm:p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-warm-brown/10"
        >
          <MenuGrid onAddItem={addItem} />
        </motion.div>

        {/* Right Panel - Cart & Orders */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-warm-brown/10 p-3 sm:p-4 lg:p-6 overflow-y-auto flex flex-col gap-4 lg:gap-6 bg-light-tan"
        >
          {/* Cart */}
          <Cart
            order={currentOrder}
            onUpdateQuantity={updateItemQuantity}
            onRemoveItem={removeItem}
            onHold={() => {
              holdOrder();
            }}
            onFinalize={() => setShowFinalizeModal(true)}
          />

          {/* Order Queue */}
          {openOrders.length > 1 && (
            <>
              <div className="divider" />
              <OrderQueue
                orders={orders}
                currentOrderId={currentOrderId}
                onSelectOrder={resumeOrder}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Finalize Modal */}
      <FinalizeOrderModal
        isOpen={showFinalizeModal}
        onClose={() => setShowFinalizeModal(false)}
        onConfirm={finalizeOrder}
        orderTotal={currentOrder?.total || 0}
      />
    </motion.div>
  );
}
