import { useCart } from "../../hooks/useCart"

const CartTotal = () => {
  const { cart } = useCart()

  return (
    <tr>
        <td className="mt-8 font-bold rounded-md p-3 border border-solid border-gray-light bg-white">
          <span className="flex justify-between select-none">
            <label htmlFor="totalCart">
              Total:
            </label>
            <span className="flex gap-2 mr-4 select-none">
              <label htmlFor="totalCart">
                R$
              </label>
              &nbsp;
              <input
                className="text-end p-2 select-none"
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