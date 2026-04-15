import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemTotal = item.price * item.quantity;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="card rounded-lg p-2.5 sm:p-3 lg:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 hover:shadow-premium transition-all"
    >
      <div className="flex-1 min-w-0 w-full sm:w-auto">
        <h4 className="font-semibold text-rich-brown text-xs sm:text-sm truncate">{item.name}</h4>
        <p className="text-xs text-warm-brown/60">₹{item.price} × {item.quantity}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onUpdateQuantity(item.lineId, item.quantity - 1)}
          className="p-1 rounded-lg bg-warm-cream hover:bg-warm-brown/15 text-rich-brown transition-colors"
          title="Decrease quantity"
        >
          <Minus className="w-3.5 sm:w-4 h-3.5 sm:h-4" strokeWidth={2.5} />
        </motion.button>

        <input
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.lineId, Math.max(1, parseInt(e.target.value) || 1))}
          className="w-8 sm:w-10 h-7 sm:h-8 text-center font-semibold text-rich-brown bg-white rounded-lg border border-warm-brown/20 text-xs sm:text-sm"
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onUpdateQuantity(item.lineId, item.quantity + 1)}
          className="p-1 rounded-lg bg-warm-cream hover:bg-warm-brown/15 text-rich-brown transition-colors"
          title="Increase quantity"
        >
          <Plus className="w-3.5 sm:w-4 h-3.5 sm:h-4" strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Total & Delete */}
      <div className="text-right min-w-max flex items-center gap-1.5 sm:gap-2">
        <p className="font-bold text-rich-brown text-xs sm:text-sm">₹{itemTotal}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item.lineId)}
          className="p-1 rounded-lg bg-red-100/50 hover:bg-red-200/50 text-red-600 transition-colors"
          title="Remove item"
        >
          <Trash2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" strokeWidth={2} />
        </motion.button>
      </div>
    </motion.div>
  );
};
