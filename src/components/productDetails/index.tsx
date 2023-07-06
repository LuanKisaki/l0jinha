import { useState } from "react"
import { ProductType } from "../../services/products"
import Image from "next/image"
import SuccessToast from "../successToast"
import toast from "react-hot-toast"
import { useCart } from "@/hooks/useCart"

type ProductDetailsProps = {
  product: ProductType
}



const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const notifyToast = () => toast.success('Adicionado ao carrinho', {position: 'top-center'})
  const { addProduct} = useCart()
  const add = () => {addProduct(product)}

  return (
      <div className="flex flex-col md:flex-row max-w-screen items-center gap-4
      ">
        <div className="relative w-80 h-80">
          <Image
            className="object-contain"
            src={product.imageUrl}
            alt={product.name}
            fill= {true}
            priority
            />
        </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap-1">
          <h1>{product.name}</h1>
          <h2 className="text-gray-dark">R$ {product.price.toFixed(2).replace('.',',')}</h2>
          <p>
            <span className="font-bold">
              Em estoque:
            </span>
            &nbsp;
            {product.inStock}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="font-bold">Descrição:
            <span className="text-justify font-normal md:mr-12">
            &nbsp;
              {product.description}
            </span>
          </p>
          <div className="flex flex-row items-center self-center md:self-start">
            <button
              className="bg-green border-none uppercase hover:bg-blue  text-white font-bold my-3 p-4 rounded-md"
              onClick={() => {
                notifyToast();
                add();
              }}
              >
              Comprar
            </button>
          </div>
        </div>
      </div>
        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </div>
  )
}
export default ProductDetails