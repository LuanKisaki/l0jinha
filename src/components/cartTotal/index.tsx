import { useCart } from "@/hooks/useCart"

const CartTotal = () => {
  const { cart } = useCart()

  return (
    <tr>
      <td>
        <div className="my-8 font-bold rounded-md p-3 border-solid border-gray-light">
          <div className="flex justify-between">
            <label>Total: </label>
            <div className="flex gap-2 mr-4">
              <label>R$</label>
              <input
                className="text-end"
                type="text"
                disabled
                value={
                  (
                    cart.reduce((total, product) => total + product.price, 0)
                  ).toFixed(2).replace('.', ',')
                }
              />
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default CartTotal