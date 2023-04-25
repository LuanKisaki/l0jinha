import { NextPage } from "next";
import Head from "next/head";
import Cart from "./cart";
import Header from "@/components/Header";

const Products: NextPage = () => {
  return (
    <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Conheça nossos produtos"/>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <Header />
    <h2 className="">
      Produtos
    </h2>

    </>
  )
}

export default Products