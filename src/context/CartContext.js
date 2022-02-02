import { createContext, useState, useContext } from "react"

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    total: null
  })

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }