import { useState } from "react"
import { ProductType } from "../services/products"
import Link from "next/link"
import Image from "next/image"
import SuccessToast from "../successToast"

type ProductCardProps = {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price } = product

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <Link href={`/products/${id}`}>
          <Image className="card-img-top" src={imageUrl} alt={product.name} height={500} width={600}/>
        </Link>
        <div className="card-body">
          <Link className="car-title" href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>
          <div className="mb-3 text-muted">
            R$ {price}
          </div>
          <div className="card-actions justify-end">
          <button
            className="text-gray-dark pb-2"
            onClick={() => {
              setToastIsOpen(true)
              // setTimeout(() => setToastIsOpen(false), 1000 * 3)
            }}
            >
            Adicionar ao carrinho
          </button>
            </div>
        </div>
      </div>
      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  )
}

export default ProductCard