import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export const MenuItem = ({ item, onAdd, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -4 }}
    >
      <div className="card rounded-2xl p-0 overflow-hidden flex flex-col h-full">
        {/* Image Container - Premium Image Display */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-warm-brown/5 to-warm-brown/10 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-rich-brown shadow-premium">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-5">
          <div>
            <h3 className="font-semibold text-rich-brown text-base mb-2 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-sm text-warm-brown/70 line-clamp-2">{item.description}</p>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-warm-brown/10">
            <span className="text-2xl font-bold text-rich-brown">₹{item.price}</span>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => onAdd(item)}
              className="p-2.5 rounded-xl bg-gold-accent hover:bg-yellow-700 text-white shadow-premium hover:shadow-premium-lg transition-all duration-200"
              title="Add to cart"
            >
              <Plus className="w-5 h-5" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
