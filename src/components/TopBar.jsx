import React, { useState, useEffect } from 'react';
import { Clock, ShoppingBag, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export const TopBar = ({ orderCount = 0 }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-warm-brown/10 shadow-premium sticky top-0 z-40"
    >
      <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-3 max-w-full flex-wrap gap-2 sm:gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-fit">
          {/* Dear Desserts Logo Badge */}
          <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Dear Desserts Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-rich-brown tracking-tight">Dear Desserts</h1>
            <p className="text-xs text-warm-brown/60 font-medium">Sweet Moments Start Here</p>
          </div>
        </div>

        {/* Center Info - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {/* Time */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-1.5 lg:p-2 rounded-lg bg-warm-cream">
              <Clock className="w-4 h-4 text-rich-brown" strokeWidth={2.5} />
            </div>
            <div className="text-xs lg:text-sm">
              <p className="font-semibold text-rich-brown leading-tight">{formatTime(time)}</p>
              <p className="text-xs text-warm-brown/60">{formatDate(time)}</p>
            </div>
          </div>

          {/* Order Count */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1.5 lg:py-2.5 rounded-lg bg-gold-accent/10 border border-gold-accent/20 cursor-pointer text-xs lg:text-sm"
          >
            <ShoppingBag className="w-4 h-4 text-gold-accent" strokeWidth={2.5} />
            <span className="font-semibold text-rich-brown">
              <span className="sm:hidden">{orderCount}</span>
              <span className="hidden sm:inline">{orderCount} Orders</span>
            </span>
            {orderCount > 0 && (
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-gold-accent"
              />
            )}
          </motion.div>
        </div>

        {/* Mobile Order Badge - Visible only on mobile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:hidden flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gold-accent/10 border border-gold-accent/20 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-gold-accent" strokeWidth={2.5} />
          <span className="text-xs font-semibold text-rich-brown">{orderCount}</span>
          {orderCount > 0 && (
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-gold-accent"
            />
          )}
        </motion.div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 sm:p-2 lg:p-2.5 rounded-lg bg-warm-cream hover:bg-warm-brown/10 text-rich-brown transition-all duration-200"
            title="User Profile"
          >
            <User className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={2} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 sm:p-2 lg:p-2.5 rounded-lg bg-warm-cream hover:bg-warm-brown/10 text-rich-brown transition-all duration-200"
            title="Logout"
          >
            <LogOut className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={2} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
