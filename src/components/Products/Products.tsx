import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import Button from '../UI/Button';

type Props = {};

const data = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 24.99,

    img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Jacket',
    price: 69.99,

    img: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Shirt',
    id: 4,
    price: 19.99,

    img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Glasses',
    id: 5,
    price: 35.99,
    img: 'https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },

  {
    name: 'Sunglasses',
    id: 6,
    price: 155.99,
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },

  {
    name: 'Sunglasses',
    id: 7,
    price: 100.0,
    img: 'https://images.unsplash.com/photo-1610555423081-85ec0b8eabac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },

  {
    name: 'T-Shirt',
    id: 8,
    price: 29.99,
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'T-Shirt',
    id: 9,
    price: 15.99,
    img: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const Products = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-3/4 mx-auto mt-[200px] mb-[200px]">
     

      {data.map((item) => (
        <div className="bg-white rounded-lg shadow-lg p-4" key={item?.id}>
          <div className="pb-5">
            <img
              src={item?.img}
              alt={item?.name}
              className="w-full object-center h-64"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold pb-5">{item?.name}</h3>
            <p className="text-gray-500 pb-5">${item?.price}</p>
            <Button primary className='mb-5'>
              Add to cart <ShoppingCartIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
