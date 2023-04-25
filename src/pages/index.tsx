import { NextPage } from "next";
import Head from "next/head";
import Products from "./products";
import { Roboto } from "next/font/google";
import Header from "@/components/header";

const titulo = Roboto({
  weight: '700',
  subsets: ['latin'],
})

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>L0jinha</title>
      <meta name="description"/>
    </Head>

    <Header />
    <main className="flex flex-col items-center gap-4 pt-8">
      <h1 className={titulo.className, 'text-7xl bg-green p-6 select-none'}>Seja bem vindo a <a className="text-white no-underline " href="https://nextjs.org">L0jinha</a>! </h1>
      <h2>Compre fácil e em segurança</h2>

      </main>
    </>
  )
}

export default Home