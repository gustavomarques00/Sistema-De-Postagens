import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BonecoSemFundo from "../assets/img/Boneco-sem-Fundo.png";

const ContaCriada = () => {

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div className="pr-5">
          <img
            className="img-thumbnail"
            src={BonecoSemFundo}
            alt="Boneco de Sucesso"
          ></img>
        </div>
        <div className="px-5">
          <p className="h4">Conta Criada com Sucesso</p>
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

export default ContaCriada;
