import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const ListItem = ({ children, onClick }) =>
  <Panel
    onClick={onClick}
    style={{
      padding: '1em',
      marginBottom: 0,
      cursor: 'pointer'
    }}
  >
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }} >{children}</div>
      <Glyphicon glyph="menu-right" />
    </div>
  </Panel>;

export default ListItem;