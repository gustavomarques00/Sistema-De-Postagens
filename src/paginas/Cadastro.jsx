import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NomeDaTela from "../componentes/NomeDaTela";
import { useForm } from "react-hook-form";
import axios from "axios";

const Cadastro = () => {
  const { register, getValues } = useForm();
  const [cadastrado, setCadastrado] = useState(false);

  if(cadastrado){
    alert("Cadastrado com Sucesso!")
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  const Api = axios.create({
    baseURL: "https://segware-book-api.segware.io/api",
  });

  const config = {
    headers: {
      Authorization: `Gustavo`,
    },
  };

  const EnviarDados = async () => {
    const valores = getValues();
    await Api.post(
      "/sign-up",
      { username: valores.usuario, password: valores.senha },
      config
    )
      .then((response) => {
        if (response.status === 200) {
          setCadastrado(true);
        }
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro " + err);
      });
  };

  const ValidacaoBotao = () => {
    const valores = getValues();
    const id = "criarConta";
    var botao = document.getElementById(id);
    if (valores.usuario.length !== 0 && valores.senha.length > 8) {
      botao.removeAttribute("disabled");
    } else {
      botao.setAttribute("disabled", "disabled");
    }
  };

  return (
    <Container>
      <NomeDaTela Nome="Cadastro" />
      <div className="d-flex justify-content-center d-grid">
        <form onChange={ValidacaoBotao} className="w-50 p-3 d-grid gap-3">
          <Form.Group controlId="formGroupUsuario">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              name="usuario"
              {...register("usuario", {
                required: true,
              })}
              type="text"
              placeholder="Usuário"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              {...register("senha", {
                required: true,
              })}
              name="senha"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>
          <button
            id="criarConta"
            type="button"
            className="btn btn-outline-info btn-block"
            onClick={EnviarDados}
          >
            criar
          </button>
          <button type="button" className="btn btn-outline-warning btn-block">
            <Link to="/" className="nav-link">
              Voltar
            </Link>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Cadastro;
