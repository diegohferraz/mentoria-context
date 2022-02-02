import { createContext, useState, useContext } from 'react'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [message, setMessage] = useState({})

  return <ModalContext.Provider value={{ setMessage, message }}>{children}</ModalContext.Provider>
}

const useModal = () => useContext(ModalContext)

export { useModal, ModalProvider }
