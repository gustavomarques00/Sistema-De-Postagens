import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NomeDaTela from "../componentes/NomeDaTela";

const MudarSenha = () => {
  return (
    <Container>
      <NomeDaTela Nome="Recuperar Senha" />
      <div className="d-flex justify-content-center d-grid">
        <Form className="w-50 p-3 d-grid gap-3">
          <Form.Group className="pb-5" controlId="formGroupUsuario">
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="Usuário" />
          </Form.Group>
          <button type="button" class="btn btn-outline-info btn-block">
            <Link to="/senhaRecuperada" className="nav-link">
              Recuperar Senha
            </Link>
          </button>
          <button type="button" class="btn btn-outline-warning btn-block">
            <Link to="/" className="nav-link">
              Voltar a Tela Principal
            </Link>
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default MudarSenha;
