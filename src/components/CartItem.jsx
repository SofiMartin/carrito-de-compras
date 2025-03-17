import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-3 sm:p-4 flex items-center`}>
      <img 
        src={item.image} 
        alt={item.name} 
        className={`w-14 h-14 sm:w-16 sm:h-16 object-contain ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded p-1`}
      />
      <div className="ml-3 flex-1">
        <h3 className={`font-bold text-sm sm:text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {item.name}
        </h3>
        <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {item.description}
        </p>
        <div className="flex items-center mt-1">
          <span className={`font-medium text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            ${item.price.toFixed(2)}
          </span>
          <span className={`mx-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>×</span>
          <div className="flex items-center border rounded">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className={`px-2 py-0.5 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className={`px-2 text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className={`px-2 py-0.5 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button 
        onClick={() => removeFromCart(item.id)} 
        className="text-red-500 hover:text-red-600 ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;