import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  const isShown = true;
  return (
    <>
      <Header />
      <Products />
      {isShown  && <Cart/> }
    </>
  );
}

export default App;
