import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} py-6 mt-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">PokéStore</h3>
            <p className="text-white opacity-90">
              Tu tienda online de productos Pokémon. Encuentra las mejores cartas y figuras de tus Pokémon favoritos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:underline hover:text-yellow-300">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline hover:text-yellow-300">Categorías</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline hover:text-yellow-300">Ofertas</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline hover:text-yellow-300">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <address className="not-italic text-white opacity-90">
              <p>Calle Pokémon, 123</p>
              <p>Ciudad Paleta</p>
              <p>Email: info@pokestore.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </address>

            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <FacebookLogo size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <TwitterLogo size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <InstagramLogo size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-blue-400 text-center text-white">
          <p>&copy; {new Date().getFullYear()} PokéStore. Todos los derechos reservados.</p>
          <p className="mt-1 text-sm">
            * Este proyecto fue creado con fines educativos. Pokémon es una marca registrada de Nintendo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;