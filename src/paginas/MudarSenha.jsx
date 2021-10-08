import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NomeDaTela from "../componentes/NomeDaTela";
import { useForm } from "react-hook-form";
import axios from "axios";

const MudarSenha = () => {
  const { register, getValues } = useForm();
  const [SenhaGuardada, setSenhaGuardada] = useState("");

  if (SenhaGuardada.length > 0) {
    alert("Sua senha é: " + SenhaGuardada)
    return (
      <Redirect
        to={{
          pathname: "/senhaRecuperada",
        }}
      />
    );
  }

  const Api = axios.create({
    baseURL: "https://segware-book-api.segware.io/api",
  });

  const EnviarDados = async () => {
    const valores = getValues();
    await Api.get(`/forgot-password/${valores.usuario}`)
      .then((response) => {
        if (response.status === 200) {
          setSenhaGuardada(response.data.password);
        } else if (response.status === 204) {
          alert("Senha não encontrada!");
        }
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  };

  return (
    <Container>
      <NomeDaTela Nome="Recuperar Senha" />
      <div className="d-flex justify-content-center d-grid">
        <Form className="w-50 p-3 d-grid gap-3">
          <Form.Group className="pb-5" controlId="formGroupUsuario">
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
          <button
            onClick={EnviarDados}
            type="button"
            className="btn btn-outline-info btn-block"
          >
            Buscar
          </button>
          <button type="button" className="btn btn-outline-warning btn-block">
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
