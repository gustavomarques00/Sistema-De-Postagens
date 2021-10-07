import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NomeDaTela from "../componentes/NomeDaTela";

const Cadastro = () => {
  return (
    <Container>
      <NomeDaTela Nome="Cadastro" />
      <div className="d-flex justify-content-center d-grid">
        <Form className="w-50 p-3 d-grid gap-3">
          <Form.Group controlId="formGroupUsuario">
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="Usuário" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <button type="button" className="btn btn-outline-info btn-block">
            <Link to="/ContaCriada" className="nav-link">
              Criar Conta
            </Link>
          </button>
          <button type="button" className="btn btn-outline-warning btn-block">
            <Link to="/" className="nav-link">
              Voltar
            </Link>
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default Cadastro;
