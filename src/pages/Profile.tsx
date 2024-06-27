import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import { useEffect } from "react";
import gitApi from "../api/github";

const Profile = () => {
  const navigate = useNavigate();

  const { user } = useParams<{ user: string }>();

  const cursos = [
    {
      tech: "React",
      tipo: "Front-end",
    },
    {
      tech: "Node",
      tipo: "Back-end",
    },
    {
      tech: "Git",
      tipo: "Versionamento",
    },
  ];

  console.log(user);

  gitApi
    .getUser(user as string)
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
      navigate("/");
    });

  /* useEffect(() => {
    if(user !== 'gabrielfari4') {
      navigate('/')
    }

  }, [user, navigate]) */

  return (
    <Layout>
      <Table data={cursos}/>
    </Layout>
  );
};

export default Profile;
