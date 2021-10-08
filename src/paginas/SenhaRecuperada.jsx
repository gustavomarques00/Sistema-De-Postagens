import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const SenhaRecuperada = (props) => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <button type="button" className="btn btn-outline-warning btn-block pl-5">
          <Link to="/" className="nav-link">
            Voltar a tela de Login
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default SenhaRecuperada;
