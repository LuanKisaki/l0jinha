import { NextPage } from "next";
import Head from "next/head";
import Cart from "./cart";

const Products: NextPage = () => {
  return (
    <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Conheça nossos produtos"/>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <h2 className="">
      Produtos
    </h2>
    <Cart></Cart>

    </>
  )
}

export default Products