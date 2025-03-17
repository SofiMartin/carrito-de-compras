import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeButton from "./ThemeButton";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { totalItems } = useContext(CartContext);
  const { isDarkMode } = useTheme();

  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} shadow-md py-4 z-10`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <img
              src="/IconoLogo.png"
              alt="Logo Pokémon"
              className="w-10 h-10 mr-3"
            />
            <h1 className="text-2xl font-pokemon text-white">
              PokéStore
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2 text-white">
                Productos: {totalItems}
              </span>
            </div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;