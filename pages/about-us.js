import Head from "next/head";
import Layout from "./components/layout/Layout";
import Heading from "./components/layout/Heading";

export default function Home() {
 return (
  <Layout>
   <Head />

   <div className="container">
   <Heading title="About us" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere lacus id elit sollicitudin, in convallis elit vestibulum. Cras sed felis nunc. Maecenas luctus, justo ac tincidunt fermentum, magna metus lobortis dui, sit amet sagittis lorem quam nec dui. Duis euismod, ipsum sed semper tincidunt, diam ipsum lobortis risus, id lacinia libero odio rutrum nulla. Sed et tortor nec nibh ultrices malesuada vitae ac nisl. Integer eget est dapibus nisl vulputate dignissim nec id mauris. Ut sit amet viverra magna. Fusce vel ipsum sem. Ut volutpat augue odio, hendrerit vehicula urna feugiat molestie. Curabitur eget cursus lectus. Ut feugiat felis nisi, vitae gravida nisl scelerisque sed.</p>
   </div>
  </Layout>
 );
}