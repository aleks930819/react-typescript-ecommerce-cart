import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { isCartOpen } from './store';

function App() {
  const isCartShown = useSelector(isCartOpen);

  return (
    <>
      <Header />
      <Products />
      {isCartShown && <Cart />}
    </>
  );
}

export default App;
