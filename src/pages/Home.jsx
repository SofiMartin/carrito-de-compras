import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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