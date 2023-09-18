import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import PayNow from './pages/PayNow';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SuccessPayment from "./pages/SuccessPayment";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {



  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path='/success' element={<SuccessPayment />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
