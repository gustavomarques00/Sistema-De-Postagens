import axios from "axios";
import { useEffect, useState } from "react";

const config = {
  headers: {
    Authorization: `Gustavo`,
  },
};

export const Api = axios.create({
  baseURL: "https://segware-book-api.segware.io/api",
});

export const BuscarSenha = async (username, setDados) => {
  const urlEspecifica = `​/forgot-password​/${username}`;
  const resposta = await Api.get(urlEspecifica);
  setDados(resposta.data);
};

export const ListarPosts = async (setDados) => {
  const resposta = await Api.get("/feeds", config);
  setDados(resposta.data);
};

export const CriarUsuario = async (username, password) => {
  const [dados, setDados] = useState();

  useEffect(() => {
    Api.post("/sign-up", { username: username, password: password }, config)
      .then((response) => {
        setDados(response.data);
        console.log(dados);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, [dados, username, password]);
};

export const LogarUsuario = async (username, password) => {
  const [dados, setDados] = useState();

  useEffect(() => {
    Api.post(
      "/sign-in",
      {
        username: username,
        password: password,
      },
      config
    )
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, [dados, username, password]);
};

export const Postar = async (content) => {
  const [dados, setDados] = useState();

  useEffect(() => {
    Api.post(
      "/feed",
      {
        content: content,
      },
      config
    )
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, [dados, content]);
};

export const Reagir = async (content, like, love) => {
  const [dados, setDados] = useState();

  useEffect(() => {
    Api.post("/reaction", {
      like: like,
      love: love,
    })
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, [dados, like, love]);
};
