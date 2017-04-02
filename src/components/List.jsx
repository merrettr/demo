import React from 'react';

export default ({ items, onRender, generateKey }) =>
  <div>
    {items.map(item =>
      <div
        style={{ marginTop: '1em' }}
        key={generateKey(item)}
      >
        {onRender(item)}
      </div>
    )}
  </div>;