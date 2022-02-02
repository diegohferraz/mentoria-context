import { useCart } from "../context/CartContext"
import { useUser } from "../context/UserContext"

const Footer = () => {
  const { cart } = useCart()
  const { user } = useUser()

  return (
    <footer>
      <div>
        {cart.total && (
          <p>Subtotal: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cart.total)}</p>
        )}
      </div>
      <div>
        <button disabled={cart.items.length === 0 || !user}>Fechar compra</button>
      </div>
    </footer>
  )
}

export default Footer