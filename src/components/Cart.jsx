import React from 'react';
import { ShoppingBag, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from './CartItem';
import { Button, Divider } from './common';

export const Cart = ({
  order,
  onUpdateQuantity,
  onRemoveItem,
  onHold,
  onFinalize,
}) => {
  const itemCount = order?.items?.length || 0;
  const isEmpty = itemCount === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col h-full gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="p-1.5 sm:p-2 lg:p-2.5 rounded-lg bg-warm-cream">
            <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5 text-rich-brown" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-rich-brown">Order #101</h2>
            <p className="text-xs text-warm-brown/60">Current cart</p>
          </div>
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-1 sm:ml-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-gold-accent/20 text-rich-brown text-xs font-bold rounded-full"
            >
              {itemCount} item{itemCount !== 1 ? 's' : ''}
            </motion.span>
          )}
        </div>
      </div>

      {isEmpty ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex items-center justify-center flex-col gap-2 sm:gap-4"
        >
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-warm-cream flex items-center justify-center">
            <ShoppingBag className="w-6 sm:w-8 h-6 sm:h-8 text-warm-brown/40" strokeWidth={1.5} />
          </div>
          <p className="text-center text-warm-brown/60 text-xs sm:text-sm font-medium px-2">
            Your cart is empty
            <br />
            <span className="text-xs">Add delicious items to get started</span>
          </p>
        </motion.div>
      ) : (
        <>
          {/* Items List */}
          <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-3 pr-1 sm:pr-2">
            <AnimatePresence>
              {order?.items?.map((item) => (
                <CartItem
                  key={item.lineId}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemoveItem}
                />
              ))}
            </AnimatePresence>
          </div>

          <Divider />

          {/* Pricing Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-2 sm:space-y-3"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm text-warm-brown/70">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">₹{order?.total?.toFixed(0) || 0}</span>
            </div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-lg bg-gold-accent/10 border border-gold-accent/20"
            >
              <AlertCircle className="w-4 h-4 text-gold-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="text-xs text-warm-brown/70 leading-relaxed">
                Premium orders over ₹500 get 10% off
              </span>
            </motion.div>

            {/* Total Box */}
            <div className="bg-gradient-to-r from-rich-brown to-warm-brown text-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-premium">
              <p className="text-xs font-medium text-white/80 mb-0.5 sm:mb-1">Order Total</p>
              <motion.p
                key={order?.total}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight"
              >
                ₹{order?.total?.toFixed(0) || 0}
              </motion.p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2 flex-wrap">
            <Button
              variant="secondary"
              size="lg"
              onClick={onHold}
              className="flex-1 border-2 text-xs sm:text-sm"
            >
              Hold
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={onFinalize}
              className="flex-1 text-xs sm:text-sm"
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </motion.div>
  );
};
