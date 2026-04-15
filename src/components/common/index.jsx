import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline mr-2"
        >
          ⟳
        </motion.div>
      ) : null}
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = '', onClick, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Badge = ({ text, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    info: 'badge-info',
  };

  return (
    <span className={`badge ${variants[variant]} ${className}`}>
      {text}
    </span>
  );
};

export const Modal = ({ isOpen, onClose, children, title, size = 'md' }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className={`card rounded-2xl p-8 w-full ${sizes[size]} shadow-premium-xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-2xl font-bold text-rich-brown">{title}</h2>}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 hover:bg-warm-cream rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-rich-brown" strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Content */}
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Input = ({ placeholder, value, onChange, type = 'text', className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-premium ${className}`}
    />
  );
};

export const Divider = () => (
  <div className="divider my-4" />
);

export const LoadingDot = () => (
  <motion.div
    animate={{ scale: [1, 1.5, 1] }}
    transition={{ repeat: Infinity, duration: 0.8 }}
    className="inline-block w-2 h-2 bg-gold-accent rounded-full"
  />
);
