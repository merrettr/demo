import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

export default ({ value, onSearch }) =>
  <div>
    <FormControl
      type="text"
      placeholder="Search"
      value={value}
      onChange={e => onSearch(e.target.value)}
    />
  </div>;