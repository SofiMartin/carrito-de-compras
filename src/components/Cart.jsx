import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (cart.length === 0 && isOpen) {
    return (
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg z-50 transition-transform transform translate-x-0`}>
        <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : ''} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : ''}`}>Tu Carrito</h2>
          <button onClick={() => setIsOpen(false)} className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 flex flex-col items-center justify-center h-4/5">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-24 w-24 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'} mb-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center mb-6`}>Tu carrito está vacío</p>
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Cart toggle button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-4 right-4 z-40 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      {/* Cart modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className={`fixed top-0 right-0 h-full w-full md:w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-transform transform translate-x-0 overflow-y-auto`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : ''} flex justify-between items-center`}>
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : ''}`}>Tu Carrito</h2>
              <button onClick={() => setIsOpen(false)} className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className={`divide-y ${isDarkMode ? 'divide-gray-700' : ''}`}>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : ''}`}>
              <div className="flex justify-between items-center mb-4">
                <span className={`font-medium ${isDarkMode ? 'text-white' : ''}`}>Total:</span>
                <span className={`font-bold text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className={`w-1/2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} py-2 rounded-md`}
                >
                  Vaciar Carrito
                </button>
                <button
                  className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;