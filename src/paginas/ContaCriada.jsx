import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BonecoSemFundo from "../assets/img/Boneco-sem-Fundo.png";
import api from '../api/api.js'

const ContaCriada = () => {
  const [dados, setDados] = useState();

  useEffect(() => {
    api
      .post("/sign-up", {
        username: "Gustavo",
        password: "123"
      })
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
          <p>Usuário: {dados?.username}</p>
          <p>Senha: {dados?.password}</p>
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
