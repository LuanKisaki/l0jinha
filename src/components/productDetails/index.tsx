import { useState } from "react"
import { ProductType } from "../../services/products"
import Image from "next/image"
import SuccessToast from "../successToast"
import toast from "react-hot-toast"
import { useCart } from "../../hooks/useCart"

type ProductDetailsProps = {
  product: ProductType
}



const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const notifyToast = () => toast.success('Adicionado ao carrinho', {position: 'top-center'})
  const { addProduct} = useCart()
  const add = () => {addProduct(product)}

  return (
      <div className="flex flex-col lg:flex-row max-w-screen h-screen items-center gap-4
      ">
        <div className="relative lg:w-1/3 w-screen h-96">
          <Image
            className="object-contain"
            src={product.imageUrl}
            alt={product.name}
            fill= {true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
      <div className="flex flex-col items-start gap-8 w-4/5 lg:w-1/2 ">
        <div className="flex flex-col gap-3">
          <h1 className="select-none">{product.name}</h1>
          <h2 className="text-gray-dark select-none">R$ {product.price.toFixed(2).replace('.',',')}</h2>
          <p className="select-none">
            <span className="font-bold select-none">
              Em estoque:
            </span>
            &nbsp;
            {product.inStock}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="font-bold select-none">Descrição:
            &nbsp;
            <span className="text-justify font-normal md:mx-12 select-none">
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