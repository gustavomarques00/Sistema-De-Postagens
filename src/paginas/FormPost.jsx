import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormPost = () => {
  const { register, getValues } = useForm();
  const [posts, setPosts] = useState([]);

  const Api = axios.create({
    baseURL: "https://segware-book-api.segware.io/api",
  });

  const config = {
    headers: { Authorization: `Bearer Gustavo` }
  };

  useEffect(() => {
    Api.get("/feeds", setPosts, {
      headers: config,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
        } else if (response.status === 204) {
          alert("Dados não autorizado!");
        }
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, [Api, posts]);

  const postarConteudo = async () => {
    const valores = getValues();

    await Api.post("/feed", { content: valores.conteudo }, config)
      .then((response) => {
        if (response.status === 200) {
          posts.push(response.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("Conteudo vazio");
        } else if (err.response.status === 401) {
          alert("Não Autorizado");
        }
        console.log("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-4">
          <form className="w-100 p-3 d-grid gap-3">
            <label htmlFor="conteudoID">Conteúdo</label>
            <textarea
              {...register("conteudo", {
                required: true,
              })}
              className="form-control"
              id="conteudoID"
              rows="4"
            ></textarea>
            <button
              id="Logar"
              onClick={postarConteudo}
              type="button"
              className="btn btn-outline-info btn-block button"
            >
              Postar
            </button>
          </form>
        </div>
        <div className="col-8">
          <div>
            {posts.map((post, index) => {
              return (
                <section key={index}>
                  <p className="p-2 border border-primary">{post.conteudo}</p>
                  <button className="btn btn-outline-info btn-block button">
                    Like
                  </button>
                  <button className="btn btn-outline-info btn-block button">
                    Love
                  </button>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
