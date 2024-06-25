import Layout from "../components/Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>React</td>
            <td>Front-end</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>Back-end</td>          
          </tr>
          <tr>
            <td>Git</td>
            <td>Versionamento</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Profile;
