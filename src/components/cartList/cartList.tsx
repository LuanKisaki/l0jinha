import { useCart } from "@/hooks/useCart"
import { ProductType } from "../services/products"
import Image from "next/image"
import { useEffect, useState } from "react"

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartListRow = (props: {
  entry: CartEntry
}) => {
  const { addProduct, removeProduct } = useCart()

  return (
    <>
      <tr>
        <td>
          <div className="items-center">{/* Row */}
            <div className="">{/* Col */}
              <Image
                src={props.entry.product.imageUrl}
                alt={props.entry.product.name}
                height={500}
                width={600}
              />
            </div>
            <div className="">{/* Col */}
              {props.entry.product.name}
            </div>
          </div>
        </td>
        <td>
          R$ {props.entry.product.price}
        </td>
        <td>
          {props.entry.quantity}
        </td>
        <td>
          R$ {(props.entry.product.price * props.entry.quantity)}
        </td>
        <td>
          <div>
            <button
              className="bg-green"
              onClick={
                () => addProduct(props.entry.product)
              }
            >
              +
            </button>
            <button
              className="bg-orange"
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
    <div className="">{/* table */}
      <div> {/* thead */}
        <div>{/* tr */}
          <div>Produto</div>{/* th */}
          <div>Preço</div>
          <div>Qtd.</div>
          <div>Total</div>
        </div>
      </div>
      <div>{/* tbody */}
      {cartEntries.map(entry => <CartListRow key={entry.product.id} entry={entry} />)}
      </div>
    </div>
  )
}