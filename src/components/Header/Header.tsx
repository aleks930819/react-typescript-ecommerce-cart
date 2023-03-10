import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount } from '../../store';
import { showCart } from '../../store/slices/cartSlice';

const Header = () => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(showCart());
  };

  return (
    <nav className="fixed top-0 bg-cyan-700 w-full p-10 text-white">
      <ul className="text-xl flex justify-end items-center gap-6">
        <li className=" cursor-pointer">Products</li>
        <li className=" cursor-pointer">
          <div className="text-center bg-black rounded-full bg-opacity-70">
            <p>{cartCount}</p>
          </div>
          <div>
            <ShoppingCartIcon className="h-8 w-8" onClick={() => showCartHandler()} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
