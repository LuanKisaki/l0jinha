import { useCart } from "@/hooks/useCart"
import { ProductType } from "../services/products"
import Image from "next/image"
import { useEffect, useState } from "react"
import CartTotal from "../cartTotal"

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartListRow = (props: {entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart()

  return (
    <>
      <tr className="grid grid-cols-6 gap-4 font-bold items-center justify-between">
        <td className="col-span-3">
          <div className="flex flex-row items-center ">
            <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={50}
              width={65}
            />
            <label className="truncate">
              {props.entry.product.name}
            </label>
          </div>
        </td>
        <td className="justify-self-end">
          <div className="flex gap-2 justify-end">
            <label className="invisible md:visible">R$ </label>
            <input type="text" className="text-end w-16"
              disabled
              value={props.entry.product.price.toFixed(2).replace('.', ',')}
            />
          </div>
          <div className="flex gap-2  justify-center">
            <label className="invisible md:visible">Total </label>
            <input type="text" className="text-end w-16"
              disabled
              value={(props.entry.product.price * props.entry.quantity).toFixed(2).replace('.', ',')}
            />
          </div>
        </td>
        <td className="text-right justify-self-end w-8">
          <input type="text" className="text-end w-6"
            disabled
            value={props.entry.quantity}
          />
        </td>
        <td className="justify-self-center">
          <div className="flex flex-col w-12 md:w-24 gap-1 px-2 py-1">
            <button
              className="bg-green border-none rounded-full hover:bg-[#0d6c2c]
              active:bg-green transition-color duration-200 text-white font-extrabold text-lg"
              onClick={
                () => addProduct(props.entry.product)
              }
            >
              +
            </button>
            <button
              className="bg-orange border-none rounded-full hover:bg-[#75310c] active:bg-orange transition-color duration-200 text-white font-extrabold text-lg"
              onClick={
                () => removeProduct(props.entry.product.id)
              }
            >
              -
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default function CartList() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([])
  const { cart } = useCart()

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(entry => entry.product.id === product.id)

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product, quantity: 1
          }
        ]
      }

      list[entryIndex].quantity++
      return list

    }, [] as CartEntry[])

    entriesList.sort((a, b) => a.product.id - b.product.id)
    setCartEntries(entriesList)
  }, [cart])
  return (
    <div className="flex flex-col items-start mx-4 justify-between ">
      <div className="md:w-2/3 w-full">
        <table className="text-gray-dark">
          <thead className="bg-gray-light content-center px-2 py-1 rounded-md table-cell">
            <tr className="grid grid-cols-6 gap-1 text-right font-bold">
              <td className="text-center col-span-3">Produto</td>
              <td>Preço</td>
              <td>Qtd.</td>
              <td className="text-center">Opções</td>
            </tr>
          </thead>
          <tbody className="">
            {cartEntries.map(entry => <CartListRow key={entry.product.id} entry={entry} />)}
            <CartTotal />
          </tbody>
        </table>
      </div>
    </div>
  )
}