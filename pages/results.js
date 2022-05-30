import Head from "./components/layout/Head";
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "./constants/api";

export default function Index(props) {
  // the log here will happen in the browser console
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />
      <Heading title="Results" />

      {props.characters.map((character) => {
        return <h3 key={character.slug}>{character.name} ({character.birth_year})</h3>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  let characters = [];

  try {
    const response = await axios.get(BASE_URL);
    // the log here will happen on the server, you can check the console in your editor
    console.log(response.data);
    // the array is on the response.data.results property
    characters = response.data.results;
  } catch (error) {
    console.log(error);
  }

  // the props object we return here will become the props in the component
  return {
    props: {
      characters: characters,
    },
  };
}