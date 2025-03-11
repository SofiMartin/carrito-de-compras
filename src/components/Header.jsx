import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/api/placeholder/40/40"
            alt="Logo Pokémon"
            className="w-10 h-10 mr-3"
          />
          <h1 className="text-2xl font-pokemon text-red-500">
            PokéStore
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2 dark:text-white">
              Productos: {totalItems}
            </span>
          </div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;