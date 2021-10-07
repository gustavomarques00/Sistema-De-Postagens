import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./paginas/Home";
import Cadastro from "./paginas/Cadastro";
import MudarSenha from "./paginas/MudarSenha";
import Posts from "./paginas/Posts";
import Cabecalho from "./componentes/Cabecalho";
import ContaCriada from "./paginas/ContaCriada";
import SenhaRecuperada from "./paginas/SenhaRecuperada";
import background from "./assets/img/Fundo.jpg";

function App() {
  return (
    <Router>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Cabecalho />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/mudarSenha">
            <MudarSenha />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contaCriada">
            <ContaCriada />
          </Route>
          <Route path="/senhaRecuperada">
            <SenhaRecuperada />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
