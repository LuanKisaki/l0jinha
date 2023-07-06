import Head from "next/head";
import { ReactNode } from "react";
import Header from "../components/header";
import { GetStaticProps, NextPage } from "next";
import ProductsList from "../components/productList";
import { ProductType, fetchProducts } from "../services/products";
import Footer from "../components/footer";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()

  return { props: { products } }
}

const Products: NextPage = (props: {
  children?: ReactNode
  products?: ProductType[]
}) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça nossos produtos" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main className="flex flex-col items-center md:items-start">
          <h2 className="m-4">
            Nossos Produtos
          </h2>
        <div className="flex flex-row flex-wrap mb-8 ">

          {<ProductsList products={props.products!} />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products