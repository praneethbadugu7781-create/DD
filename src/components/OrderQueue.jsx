import React from 'react';
import { Clock, CheckCircle, ChefHat, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './common';

export const OrderQueue = ({ orders, currentOrderId, onSelectOrder }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'OPEN':
        return <Clock className="w-4 h-4" strokeWidth={2.5} />;
      case 'PREPARING':
        return <ChefHat className="w-4 h-4" strokeWidth={2.5} />;
      case 'READY':
        return <Zap className="w-4 h-4" strokeWidth={2.5} />;
      case 'COMPLETED':
        return <CheckCircle className="w-4 h-4" strokeWidth={2.5} />;
      default:
        return <Clock className="w-4 h-4" strokeWidth={2.5} />;
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'OPEN':
        return 'info';
      case 'PREPARING':
        return 'warning';
      case 'READY':
        return 'success';
      case 'COMPLETED':
        return 'success';
      default:
        return 'primary';
    }
  };

  const openOrders = orders.filter((order) => order.status !== 'COMPLETED');
  const completedOrders = orders.filter((order) => order.status === 'COMPLETED');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3 sm:space-y-4 lg:space-y-5"
    >
      {/* Open/Active Orders */}
      <div>
        <h3 className="text-xs font-bold text-warm-brown/60 uppercase tracking-widest mb-2 sm:mb-3">
          Active Orders ({openOrders.length})
        </h3>
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <AnimatePresence>
            {openOrders.map((order) => (
              <motion.button
                key={order.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => onSelectOrder(order.id)}
                className={`
                  flex-shrink-0 p-2.5 sm:p-3 lg:p-4 rounded-lg transition-all duration-200
                  ${
                    currentOrderId === order.id
                      ? 'card bg-rich-brown text-white shadow-premium-lg ring-2 ring-gold-accent'
                      : 'card text-rich-brown hover:shadow-premium'
                  }
                `}
              >
                <div className="space-y-1 sm:space-y-2 text-left">
                  <div className="flex items-center justify-between gap-2 mb-0.5 sm:mb-1">
                    <span className="font-bold text-xs sm:text-sm">
                      #{order.id}
                    </span>
                    <div className={currentOrderId === order.id ? 'text-gold-accent' : 'text-warm-brown/60'}>
                      {getStatusIcon(order.status)}
                    </div>
                  </div>
                  <Badge text={order.status} variant={getStatusVariant(order.status)} />
                  <p className="text-xs text-warm-brown/60">
                    {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Completed Orders */}
      {completedOrders.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-warm-brown/60 uppercase tracking-widest mb-2 sm:mb-3">
            Completed ({completedOrders.length})
          </h3>
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <AnimatePresence>
              {completedOrders.slice(-5).map((order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-shrink-0 p-2 sm:p-2.5 lg:p-3 rounded-lg card opacity-60"
                >
                  <div className="space-y-1 text-left text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                      <span className="font-semibold text-rich-brown line-through text-xs sm:text-sm">
                        #{order.id}
                      </span>
                      <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-600" strokeWidth={2} />
                    </div>
                    <p className="text-xs text-warm-brown/60">
                      ₹{order.total?.toFixed(0)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  );
};
