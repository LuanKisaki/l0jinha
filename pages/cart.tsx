import CartList from "../src/components/cartList/cartList";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
      </Head>
      <Header />
      <main className="min-h-[60vh]">
        <div>
          <h2 className="m-4 select-none">
            Meu Carrinho
          </h2>
          <CartList />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Cart