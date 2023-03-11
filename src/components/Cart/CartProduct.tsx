import { useDispatch } from 'react-redux';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from '../../store/slices/cartSlice';

import { Product } from '../../shared/interfaces';

type CartProductProps = {
  product: Product;
};

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const increaseQtyHandler = (id: number) => {
    dispatch(increaseQty(id));
  };

  const decreaseQtyHandler = (id: number) => {
    dispatch(decreaseQty(id));
  };

  return (
    <li className="flex py-6" key={product.id}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.name}</a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex gap-2">
            <ChevronLeftIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => decreaseQtyHandler(product.id)}
            />
            <p className="text-gray-500">Qty {product.qty}</p>
            <ChevronRightIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => increaseQtyHandler(product.id)}
            />
          </div>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeFromCartHandler(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
