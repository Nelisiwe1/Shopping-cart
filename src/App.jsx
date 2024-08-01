import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Products></Products>}></Route>
      <Route path="/cart" element={<cart></cart>}></Route>
    </Routes>
    
      < Footer />
    </BrowserRouter>
  )
}

export default App
