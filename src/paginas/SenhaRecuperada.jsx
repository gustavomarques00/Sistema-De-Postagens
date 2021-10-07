import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Boneco from '../assets/img/Boneco-SenhaRecuperada.png'

const SenhaRecuperada = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div className="pr-5">
          <img
            className="img-thumbnail"
            src={Boneco}
            alt="Boneco de Sucesso 2"
          ></img>
        </div>
        <div className="px-5">
          <p className="h4">Sua senha é: VAZIO</p>
        </div>
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
