import { useState } from "react"
import { ProductType } from "../services/products"
import Image from "next/image"
import SuccessToast from "../successToast"
import toast from "react-hot-toast"

type ProductDetailsProps = {
  product: ProductType
}

const notifyToast = () => toast.success('Adicionado ao carrinho')

const productDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  return (
    <>
    <div>
      <Image 
        src={product.imageUrl}
        alt={product.name}
        height={300}
        width={350}
        />
    </div>
    <div>
      <h1>{product.name}</h1>
      <h2 >R$ {product.price}</h2>

      <p>
        <label>
          Descrição:
        </label>
          {product.description}
      </p>
      <p>
        <label>
          Em estoque:
        </label>
        Em estoque: {product.inStock}
      </p>

      <button
      className="bg-gray-dark my-3 pb-2"
      onClick={notifyToast}
      >
        Comprar
      </button>

      <SuccessToast
      toastIsOpen={toastIsOpen}
      setToastIsOpen={setToastIsOpen}
      />
    </div>
    
    </>
  )
}
export default productDetails