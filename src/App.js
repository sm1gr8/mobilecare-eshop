import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/header/Header';
import HeaderCart from "./components/header-cart/HeaderCart"
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Výpredaj from './Výpredaj';
import Novinky from './Novinky';
import McServis from './McServis';
import ErrorPage from './404Page';
import ProductListen from './components/productlisting/ProductListen';
import ProductDetail from './components/productdetail/ProductDetail';
import EmptyCart from './components/emptycart/EmptyCart';
import Cart from './components/cart/Cart';
import CheckOut from './components/checkout/CheckOut';
function App() { 
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/výpredaj' element={<Výpredaj/>}></Route>
          <Route path='/novinky' element={<Novinky/>}></Route>
          <Route path='/mcservis' element={<McServis/>}></Route>
          <Route path='/productlisten' element={<ProductListen/>}></Route>
          <Route path='/productdetail' element={<ProductDetail/>}></Route>
          <Route path='/emptycart' element={<EmptyCart/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      <div className="content">
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
