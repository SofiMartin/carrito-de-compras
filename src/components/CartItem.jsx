import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center p-4 border-b dark:border-gray-700">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-contain bg-gray-100 dark:bg-gray-700 rounded mr-4"
      />
      <div className="flex-1">
        <h4 className="font-medium dark:text-white">{item.name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)} c/u</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-l"
        >
          <span className="text-lg dark:text-white">-</span>
        </button>
        <span className="bg-white dark:bg-gray-800 w-10 h-8 flex items-center justify-center border-t border-b dark:border-gray-700 dark:text-white">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-r"
        >
          <span className="text-lg dark:text-white">+</span>
        </button>
      </div>
      <div className="w-24 text-right font-medium dark:text-white ml-4">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;