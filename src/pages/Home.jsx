import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col font-poppins ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <Header />
      <main className="flex-grow">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default Home;