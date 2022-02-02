import { FiShoppingCart } from "react-icons/fi"

import { useCart } from "../context/CartContext"
import { useUser } from "../context/UserContext"

const Navigation = () => {
  const { cart } = useCart()
  const { user } = useUser()

  return (
    <div>
      <p>Olá, {user ? user : 'Visitante'}</p>
      <div>
        <FiShoppingCart size={24} />
        {cart.items.length > 0 && <span>3</span>}
      </div>
    </div>
  )
}

export default Navigation