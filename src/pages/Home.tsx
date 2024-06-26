import { MouseEvent } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate()

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    navigate('/profile')
  }

    return (
          <Layout>
            <div className="col-4 m-auto">
              <h1>Login</h1>
              <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">Usuário do GitHub</label>
                <input className="form-control" id="gitUser" aria-describedby="userHelp" />
                <div id="userHelp" className="form-text">Informe o seu usuário do GitHub.</div>
              </div>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </Layout>     
      );
}

export default Home;