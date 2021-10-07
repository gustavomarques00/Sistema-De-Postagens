import React from "react";
import Container from "react-bootstrap/Container";

const NomeDaTela = (props) => {
  return (
    <Container>
      <div className="py-4 d-flex justify-content-center">
        <p class="h4">
          <b>{props.Nome}</b>
        </p>
      </div>
    </Container>
  );
};

export default NomeDaTela;
