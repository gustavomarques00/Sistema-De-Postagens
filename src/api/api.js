import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://segware-book-api.segware.io/api",
});

const buscarSenha = async (username, setDados) => {
  const urlEspecifica = `​/forgot-password​/${username}`;
  const resposta = await api.get(urlEspecifica);
  setDados(resposta.data);
};

const ListarPosts = async (setDados) => {
  const resposta = await api.get("/feeds");
  setDados(resposta.data);
}

const criarUsuario = async (username, password) => {
  const [dados, setDados] = useState(
    useEffect(() => {
      api
        .post("/sign-up", {
          username: username,
          password: password,
        })
        .then((response) => setDados(response.data))
        .catch((err) => {
          console.log("ops! ocorreu um erro" + err);
        });
    }, [dados])
  );
};

const logarUsuario = async (username, password) => {
  const [dados, setDados] = useState(
    useEffect(() => {
      api
        .post("/sign-in", {
          username: username,
          password: password,
        })
        .then((response) => setDados(response.data))
        .catch((err) => {
          console.log("ops! ocorreu um erro" + err);
        });
    }, [dados])
  );
};

export default api;
