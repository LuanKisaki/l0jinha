import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
    <Head>
      <title>Carrinho</title>
      <meta name="description" content="Meu carrinho de compras"/>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <Header />
    <h3>
      Carrinho
    </h3>
    <Footer/>
    </>
  )
}

export default Cart