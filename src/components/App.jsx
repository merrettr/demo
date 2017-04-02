import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default ({ children }) =>
  <Grid style={{ marginTop: '2em' }} >
    {children}
  </Grid>;