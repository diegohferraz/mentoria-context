 import { useCart } from "../context/CartContext"
 import { useUser } from "../context/UserContext"

const Main = () => {
  const { cart, setCart } = useCart()
  const { user, setUser } = useUser()

  const handleSetCart = () => {
    setCart({
      items: [1, 2 ,3],
      total: 175.00
    })
  }

  const handleClearCart = () => {
    setCart({
      items: [],
      total: null
    })
  }

  return (
    <main>
      <div>
        <button disabled={!!user} onClick={() => setUser('Thiago')}>Set User</button>
        <button disabled={!user} onClick={() => setUser(null)}>Remove User</button>
      </div>
      <div>
        <button disabled={cart.items.length > 0} onClick={handleSetCart}>Set Cart</button>
        <button disabled={cart.items.length === 0} onClick={handleClearCart}>Clear Cart</button>
      </div>
    </main>
  )
}

export default Main;