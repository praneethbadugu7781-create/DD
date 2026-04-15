import React, { useState } from 'react';
import { CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal, Button, Divider } from './common';

export const FinalizeOrderModal = ({
  isOpen,
  onClose,
  onConfirm,
  orderTotal,
}) => {
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'cash',
      name: 'Cash',
      icon: Banknote,
      description: 'Pay at counter'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'GooglePay, PhonePe, PayTM'
    },
    {
      id: 'card',
      name: 'Card',
      icon: CreditCard,
      description: 'Debit or Credit Card'
    },
  ];

  const handleConfirm = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsProcessing(false);
    setIsSuccess(true);

    // Show success briefly then close
    await new Promise(resolve => setTimeout(resolve, 2000));

    onConfirm(selectedPayment);
    setSelectedPayment('cash');
    setIsSuccess(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Payment" size="md">
      {isSuccess ? (
        // Success State
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center py-6 sm:py-12"
        >
          <motion.div
            announce
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6 }}
            className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4"
          >
            <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" strokeWidth={2} />
          </motion.div>
          <h3 className="text-lg sm:text-xl font-bold text-rich-brown mb-1 sm:mb-2">Payment Successful!</h3>
          <p className="text-warm-brown/70 text-xs sm:text-sm text-center">
            Your order has been confirmed.
          </p>
        </motion.div>
      ) : (
        <>
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-rich-brown/10 to-warm-brown/10 border border-warm-brown/20 mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-warm-brown/70 font-medium text-xs sm:text-sm">Order Total</span>
              <motion.span
                key={orderTotal}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl sm:text-3xl font-bold text-rich-brown"
              >
                ₹{orderTotal?.toFixed(0) || 0}
              </motion.span>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm font-semibold text-rich-brown mb-2 sm:mb-4">Select Payment Method</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedPayment === method.id;

                return (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`
                      p-2.5 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 flex flex-col items-center gap-1 sm:gap-2
                      ${isSelected
                        ? 'card bg-rich-brown text-white shadow-premium-lg ring-2 ring-gold-accent'
                        : 'card text-rich-brown hover:shadow-premium'
                      }
                    `}
                  >
                    <Icon className={`w-5 sm:w-6 h-5 sm:h-6 ${isSelected ? 'text-gold-accent' : ''}`} strokeWidth={2} />
                    <span className="text-xs font-semibold">{method.name}</span>
                    <span className={`text-xs hidden sm:inline ${isSelected ? 'text-gold-accent' : 'text-warm-brown/60'}`}>
                      {method.description}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <Divider />

          {/* Confirmation Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-2 sm:p-3 rounded-lg bg-gold-accent/10 border border-gold-accent/30 mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3"
          >
            <CheckCircle className="w-4 h-4 text-gold-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-xs text-warm-brown/70 leading-relaxed">
              Payment will be processed securely. You'll receive an order confirmation.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3">
            <Button
              variant="secondary"
              size="lg"
              onClick={onClose}
              disabled={isProcessing}
              className="flex-1 text-xs sm:text-sm"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleConfirm}
              disabled={isProcessing}
              loading={isProcessing}
              className="flex-1 text-xs sm:text-sm"
            >
              {isProcessing ? 'Processing...' : 'Complete'}
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};
