import React from 'react';
import {Col, Container, FormTextarea, Row} from "shards-react";

const Personalized = () => {
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row>
        <Col>
          <strong className="text-muted d-block mb-2">Rentrer le JSON que
            contenant les données du Template:</strong>
          <FormTextarea id="json-data" placeholder="{...}"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Personalized;
