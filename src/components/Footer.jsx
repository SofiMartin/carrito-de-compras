import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 dark:text-white">PokéStore</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tu tienda online de productos Pokémon. Encuentra las mejores cartas y figuras de tus Pokémon favoritos.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 dark:text-white">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Inicio</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Categorías</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Ofertas</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 dark:text-white">Contacto</h3>
          <address className="not-italic text-gray-600 dark:text-gray-400">
            <p>Calle Pokémon, 123</p>
            <p>Ciudad Paleta</p>
            <p>Email: info@pokestore.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </address>

          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
              <FacebookLogo size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
              <TwitterLogo size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
              <InstagramLogo size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} PokéStore. Todos los derechos reservados.</p>
        <p className="mt-1 text-sm">
          * Este proyecto fue creado con fines educativos. Pokémon es una marca registrada de Nintendo.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;