import { GetStaticProps } from "next"
import { fetchProduct } from "../services/products"

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id

  if (typeof id === 'string') {
    const product = await fetchProduct(id)

    return { props: { product }, revalidate: 10  }
  }

  return { redirect: { destination: '/products', permanent: false } }
}