import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../src/components/header";
import Footer from "../src/components/footer";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>L0jinha</title>
        <meta name="description" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <main className="flex flex-col items-center gap-4 pt-8 min-h-[58vh]">
        <h1 className='text-4xl md:text-7xl bg-green p-6 select-none text-center'>
          Seja bem vindo a <a className="text-white no-underline " href="https://nextjs.org">L0jinha</a>!
        </h1>
        <h2>Compre fácil e em segurança</h2>
        <Link
          className="btn border-none bg-green text-white bold hover:bg-blue"
          href="/products"
        >
          Conheça nossos produtos!
        </Link>
      </main>

      <Footer />
    </>
  )
}

export default Home