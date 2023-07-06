import { useCart } from "../../hooks/useCart"

const CartTotal = () => {
  const { cart } = useCart()

  return (
    <tr>
        <td className="mt-8 font-bold rounded-md p-3 border border-solid border-gray-light bg-white">
          <span className="flex justify-between">
            <label htmlFor="totalCart">
              Total:
            </label>
            <span className="flex gap-2 mr-4">
              <label htmlFor="totalCart">
                R$
              </label>
              &nbsp;
              <input
                className="text-end p-2"
                id="totalCart"
                type="text"
                disabled
                value={
                  (
                    cart.reduce((total, product) => total + product.price, 0)
                  ).toFixed(2).replace('.', ',')
                }
              />
            </span>
          </span>
        </td>
    </tr>
  )
}

export default CartTotal