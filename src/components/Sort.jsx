import React, { Component } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default ({ ascending, onSort }) => {
  const handleSort = () => {
    onSort(!ascending);
  };

  return <Glyphicon
    glyph={ascending ? 'sort-by-alphabet' : 'sort-by-alphabet-alt'}
    onClick={handleSort}
    style={{
      cursor: 'pointer',
      fontSize: '2em',
      margin: '.5em',
    }}
  />;
}