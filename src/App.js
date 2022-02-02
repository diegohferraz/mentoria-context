import './App.css'

import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import { CartContextProvider } from './context/CartContext'
import { UserContextProvider } from './context/UserContext'
import { ModalProvider } from './context/ModalContext'


function App() {
  return (
    <CartContextProvider>
      <UserContextProvider>
        <ModalProvider>
          <div className="container">
            <Header />
            <Main />
            <Footer />
          </div>
        </ModalProvider>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App
