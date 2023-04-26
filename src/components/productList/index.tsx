import ProductCard from "../productCard"
import { ProductType } from "../services/products"

type ProductListProps = {
  products: ProductType[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <>
    <div className="g-5">
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

export default ProductList