import CartList from "@/components/cartList/cartList";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main className="min-h-[60vh]">
        <div>
          <h2 className="m-4">
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