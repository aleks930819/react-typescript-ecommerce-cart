import { useDispatch, useSelector } from 'react-redux';

import { showCart } from '../../store/slices/cartSlice';
import { selectTotalCartPrice, seletCartProducts } from '../../store';
import CartProduct from './CartProduct';
import CartFooter from './CartFooter';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(seletCartProducts);
  const totalCartPrice = useSelector(selectTotalCartPrice);

  const closeCartHandler = () => {
    dispatch(showCart());
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => closeCartHandler()}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartProducts.map((product) => (
                          <CartProduct product={product} key={product.id} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <CartFooter totalCartPrice={totalCartPrice} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
