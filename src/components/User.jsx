import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';

export default ({
  id,
  name,
  phone,
  email,
  website,
  company,
}) =>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10em',
    }}
  >
    <Panel
      style={{
        maxWidth: '50%',
        flex: 1,
        wordWrap: 'break-word',
        paddingTop: '3em',
      }}
    >
      <Col
        xs={12}
        md={8}
        style={{
          textAlign: 'center',
          fontSize: '1.8em',
        }}
      >
        {name}
      </Col>
      <Col
        xs={12}
        md={4}
        style={{ flex: 1 }}>
        <div>
          <i>{company.name}</i>
          <br />
          <i>{company.catchPhrase}</i>
          <br />
          <i>{company.bs}</i>
          <br />
        </div>
        <br />
        <div>
          <b>Phone:</b> <i>{phone}</i>
          <br />
          <b>Email:</b> <i>{email}</i>
          <br />
          <b>Website:</b> <i>{website}</i>
        </div>
      </Col>
    </Panel>
  </div>;