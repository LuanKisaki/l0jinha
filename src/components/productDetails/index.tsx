import { useState } from "react"
import { ProductType } from "../services/products"
import Image from "next/image"
import SuccessToast from "../successToast"
import toast from "react-hot-toast"
import Footer from "../footer"

type ProductDetailsProps = {
  product: ProductType
}

const notifyToast = () => toast.success('Adicionado ao carrinho')

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)

  return (
    <>
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={450}
          width={550}
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div>
          <h1>{product.name}</h1>
          <h2 className="text-gray-dark">R$ {product.price.toFixed(2).replace('.',',')}</h2>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="font-bold">Descrição: </p>
          <p className="text-justify">
            {product.description}
          </p>
          <p>
            <label className="font-bold">Em estoque: </label>
            {product.inStock}
          </p>

          <button
            className="bg-green border-none uppercase hover:bg-blue  text-white font-bold my-3 p-4 rounded-md"
            onClick={notifyToast}
          >
            Comprar
          </button>
        </div>
        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </div>
    </>
  )
}
export default ProductDetails