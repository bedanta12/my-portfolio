// components/SmallCursor.js
import React from 'react';

const SmallCursor = ({ scale }) => {
  return (
    <div
      className="w-6 h-6 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all"
      style={{
        transform: `scale(${scale})`,
        zIndex: 999, // Ensure the cursor is above other elements
        visibility: scale <= 0.6 ? 'visible' : 'hidden', // Show/hide cursor
      }}
    ></div>
  );
};

export default SmallCursor;
