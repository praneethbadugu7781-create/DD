import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { MENU_ITEMS } from '../constants/menuItems';
import { Input } from './common';

export const MenuGrid = ({ onAddItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(MENU_ITEMS.map((item) => item.category))];

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-full gap-2 sm:gap-3 lg:gap-4">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-premium"
      >
        <Search className="w-4 sm:w-5 h-4 sm:h-5 text-warm-brown/60 flex-shrink-0" strokeWidth={2} />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent text-rich-brown placeholder-warm-brown/40 outline-none text-xs sm:text-sm font-medium"
        />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg whitespace-nowrap font-medium text-xs sm:text-sm transition-all duration-200 flex-shrink-0
              ${
                selectedCategory === category
                  ? 'btn-primary shadow-premium'
                  : 'card text-warm-brown/70 hover:text-rich-brown'
              }
            `}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4"
        >
          {filteredItems.map((item, index) => (
            <MenuItem key={item.id} item={item} onAdd={onAddItem} index={index} />
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="flex items-center justify-center h-32 text-warm-brown/50">
            <p className="text-center text-xs sm:text-sm font-medium px-4">
              No items found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
