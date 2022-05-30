import Head from "./components/layout/Head";
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "./constants/api";

export default function Index(props) {
  console.log(props);

  return (
    <Layout>
      <Head title="Results" />
      <Heading title="Results" />

      {props.characters.map((character) => {
        return <h3 key={character.slug}>{character.name} ({character.birth_year})</h3>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {

  let characters = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    characters = response.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      characters: characters,
    },
  };
}