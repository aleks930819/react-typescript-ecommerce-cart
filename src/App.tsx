import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { isCartOpen } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isCartShown = useSelector(isCartOpen);

  return (
    <>
      <ToastContainer />
      <Header />
      <Products />
      {isCartShown && <Cart />}
    </>
  );
}

export default App;
