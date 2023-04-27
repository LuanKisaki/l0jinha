import Head from "next/head";
import { ReactNode } from "react";
import Header from "@/components/header";
import { GetStaticProps, NextPage } from "next";
import ProductsList from "@/components/productList";
import { ProductType, fetchProducts } from "@/components/services/products";

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
      <main>
        <div className="mb-5">
          <h2 className="">
            Produtos
          </h2>

          {<ProductsList products={props.products!} />}
        </div>
      </main>
    </>
  )
}

export default Products