import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollRevealText
 * Davide Cattaneo-style masked text reveal.
 * Wraps text inside an overflow-hidden mask and animates it upward on viewport enter.
 */
export default function ScrollRevealText({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  as = 'div',
}) {
  const Component = motion[as] || motion.div;

  return (
    <span className="inline-block overflow-hidden align-top">
      <Component
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // Signature custom cubic-bezier
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </Component>
    </span>
  );
}
