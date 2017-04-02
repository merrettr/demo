import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

export default ({
  id,
  name,
  phone,
  email,
  website,
  company,
}) =>
  <Grid
    fluid
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Col
      xs={12}
      md={8}
      style={{ marginTop: '10em' }}
    >
      <Panel
        style={{
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
            paddingBottom: '2em',
          }}
        >
          {name}
        </Col>
        <Col
          xs={12}
          md={4}
          style={{
            flex: 1,
            borderLeft: 'thin #000',
            borderLeftStyle: 'solid',
          }}
        >
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
    </Col>
  </Grid>;