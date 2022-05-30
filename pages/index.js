import Head from "next/head";
import Layout from "./components/layout/Layout";
import Heading from "./components/layout/Heading";

export default function Home() {
 return (
  <Layout>
   <Head />

   <div className="container">
    <Heading title="Home" />
    <a href="/results">Results</a>
   </div>
  </Layout>
 );
}