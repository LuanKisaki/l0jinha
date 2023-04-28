import { useState } from "react"
import { ProductType } from "../services/products"
import Link from "next/link"
import Image from "next/image"
import SuccessToast from "../successToast"
import toast from "react-hot-toast"
type ProductCardProps = {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price, inStock } = product
  const notifyToast = () => toast.success('Adicionado ao carrinho')
  // const notifyToast = () => toast.promise(
  //   saveSettings(settings),
  //   {
  //     loading: 'Adicionando ao carrinho...',
  //     success: <b>Produto adicionado!</b>,
  //     error: <b>Erro, tente novamente..</b>,
  //   }
  // );
  return (
    <>
      <div className="card flex flex-col shadow-xl bg-white scaleforce transition-all duration-200">
        <figure>

          <Link href={`/products/${id}`}>
            <Image className="card-img-top hover:animate-rotate" src={imageUrl} alt={product.name} height={200} width={300} />
          </Link>
        </figure>
        <div className="card-body">
          <Link
            className="car-title text-lg font-bold no-underline text-green"
            href={`/products/${id}`}>
            {name}
          </Link>
          <div
            className="flex mb-3 text-muted font-bold text-gray-dark justify-between">
            <span>
              R$ {price.toFixed(2).replace('.',',')}

            </span>
            <span>
              Qtd: {inStock}
            </span>
          </div>
          <div className="card-actions justify-end">
            <button
              className="p-4 rounded-lg uppercase text-white font-bold border-none bg-gray-dark cursor-pointer
              hover:bg-green transition-all transition-color duration-200 delay-200"
              onClick={notifyToast}
            //     () => {
            //     setToastIsOpen(true)
            //     setTimeout(() => setToastIsOpen(false), 1000 * 3)
            //   }
            // }
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      <SuccessToast 
        toastIsOpen={toastIsOpen}
        setToastIsOpen={setToastIsOpen}
      />
    </>
  )
}

export default ProductCard

function saveSettings(settings: any): Promise<unknown> {
  throw new Error("Function not implemented.")
}
