import React from 'react';
import Table from 'react-bootstrap/lib/Table';

export default ({ headers, data }) =>
  <Table responsive striped condensed hover >
    <thead>
    <tr>
      {headers.map((header, i) => <th key={i}>{header}</th>)}
    </tr>
    </thead>
    <tbody>
    {Object.keys(data).map(key =>
      <tr key={key}>
        <td>{key}</td>
        <td>{data[key]}</td>
      </tr>)}
    </tbody>
  </Table>;