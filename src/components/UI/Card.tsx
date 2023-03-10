import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import Button from './Button';

type CardProps = {
  img: string;
  name: string;
  price: number;
  id: number;
};

const Card = ({ id, img, name, price }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4" key={id}>
      <div className="pb-5">
        <img src={img} alt={name} className="w-full object-center h-64" />
      </div>
      <div>
        <h3 className="text-lg font-semibold pb-5">{name}</h3>
        <p className="text-gray-500 pb-5">${price}</p>
        <Button primary className="mb-5">
          Add to cart <ShoppingCartIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
