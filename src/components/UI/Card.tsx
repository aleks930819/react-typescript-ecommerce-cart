import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { Product } from '../../shared/interfaces';

const Card = ({ id, img, name, price }: Product) => {
  const dispatch = useDispatch();
  const addToCartHandler = ({ id, img, name, price }: Product) => {
    dispatch(addToCart({ id, img, name, price }));
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4" key={id}>
      <div className="pb-5">
        <img src={img} alt={name} className="w-full object-center h-64" />
      </div>
      <div>
        <h3 className="text-lg font-semibold pb-5">{name}</h3>
        <p className="text-gray-500 pb-5">Price: ${price}</p>
        <Button
          primary
          className="mb-5"
          onClick={() => addToCartHandler({ id, img, name, price })}
        >
          Add to cart <ShoppingCartIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
