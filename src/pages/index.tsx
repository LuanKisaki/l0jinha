import { NextPage } from "next";
import Head from "next/head";
import Products from "./products";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>L0jinha</title>
      <meta name="description"/>
    </Head>
    <main>
      <h1 >Welcome to <a className="text-blue" href="https://nextjs.org">Next.js</a>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <Products></Products>
      </main>
    </>
  )
}

export default Home