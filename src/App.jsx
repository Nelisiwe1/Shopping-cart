import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/cart'; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

