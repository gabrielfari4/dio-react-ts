import Layout from "../components/Layout/Layout";


const Home = () => {
    return (
          <Layout>
            <div className="col-4 m-auto">
              <h1>Login</h1>
              <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">Usuário do GitHub</label>
                <input className="form-control" id="gitUser" aria-describedby="userHelp" />
                <div id="userHelp" className="form-text">Informe o seu usuário do GitHub.</div>
              </div>
              <button type="button" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </Layout>     
      );
}

export default Home;