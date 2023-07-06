import Head from "next/head";
import { ReactNode } from "react";
import Header from "../src/components/header";
import { GetStaticProps, NextPage } from "next";
import ProductsList from "../src/components/productList";
import { ProductType, fetchProducts } from "../src/services/products";
import Footer from "../src/components/footer";

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
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center md:items-start">
          <h2 className="m-4 select-none">
            Nossos Produtos
          </h2>
        <div className="flex flex-row flex-wrap mb-8 max-w-sm md:max-w-screen-xl">
          {<ProductsList products={props.products!} />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products