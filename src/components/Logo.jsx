import React from 'react';

export default function Logo({ height = 50, light = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', height: `${height}px` }}>
      <img 
        src="https://anvtrust.org/wp-content/uploads/2021/02/logo.png" 
        alt="African National View Trust Logo" 
        style={{ 
          height: `${height}px`, 
          width: 'auto', 
          objectFit: 'contain',
          filter: light ? 'brightness(0) invert(1)' : 'none'
        }}
        onError={(e) => {
          // Fallback styling if image fails to load
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}
