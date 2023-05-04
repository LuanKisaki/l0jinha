import React from "react"
import ProductCard from "../productCart"
import { ProductType } from "../services/products"

type ProductListProps = {
  products: ProductType[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <>
    <div className="flex flex-row gap-8 flex-wrap ml-8">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard
          product={product}
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductsList