import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NomeDaTela from "../componentes/NomeDaTela";
import { useForm } from "react-hook-form";
import axios from "axios";

const Home = () => {
  const { register, getValues } = useForm();
  const [autenticado, setAutenticado] = useState(false) 

  if(autenticado){
    return(
      <Redirect to={{pathname: '/posts'}}/>
    )
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
      "/sign-in",
      { username: valores.usuario, password: valores.senha },
      config
    )
      .then((response) => {
        if(response.status === 200){
          setAutenticado(true)
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Usuário ou senha incorretos!");
        }
        console.log("ops! ocorreu um erro" + err);
      });
  };

  return (

    <Container>
      <NomeDaTela Nome="Login" />
      <div className="d-flex justify-content-center d-grid">
        <form className="w-50 p-3 d-grid gap-3">
          <Form.Group controlId="formGroupUsuario">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              name="usuario"
              {...register("usuario", {
                required: true,
              })}
              type="text"
              className="input"
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
              className="input"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>
          <button
            id="Logar"
            onClick={EnviarDados}
            type="button"
            className="btn btn-outline-info btn-block button"
          >
            logar
          </button>
          <button type="button" className="btn btn-outline-warning btn-block">
            <Link to="/cadastro" className="nav-link">
              Criar Conta
            </Link>
          </button>
          <button type="button" className="btn btn-outline-danger btn-block">
            <Link to="/mudarSenha" className="nav-link">
              Esqueci minha Senha
            </Link>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Home;
