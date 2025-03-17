import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import products from "../data/product.js";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-500'} pb-2`}>
          Productos Pokémon
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${filter === "all" 
              ? "bg-blue-500 text-white" 
              : isDarkMode 
                ? "bg-gray-700 text-white" 
                : "bg-gray-200 text-gray-800"}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter("card")}
            className={`px-4 py-2 rounded ${filter === "card" 
              ? "bg-blue-500 text-white" 
              : isDarkMode 
                ? "bg-gray-700 text-white" 
                : "bg-gray-200 text-gray-800"}`}
          >
            Cartas
          </button>
          <button 
            onClick={() => setFilter("figure")}
            className={`px-4 py-2 rounded ${filter === "figure" 
              ? "bg-blue-500 text-white" 
              : isDarkMode 
                ? "bg-gray-700 text-white" 
                : "bg-gray-200 text-gray-800"}`}
          >
            Figuras
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105`}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className={`w-full h-48 object-contain ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-2`}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{product.description}</p>
              <div className="flex justify-between items-center">
                <span className={`font-bold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;