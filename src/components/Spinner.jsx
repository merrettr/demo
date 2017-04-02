import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default () =>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style={{ fontSize: '3em' }}/>
    <span className="sr-only">Loading...</span>
  </div>;