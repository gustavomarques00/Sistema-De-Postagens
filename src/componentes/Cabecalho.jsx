import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cabecalho = () => {
  return (
    <Container className="sticky-top bg-info border-bottom" fluid>
      <Row>
        <Col className="text-center align-middle py-4">
          <h2 className="display-4">Sistema de Posts</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Cabecalho;
