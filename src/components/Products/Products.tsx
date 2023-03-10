import { useGetProductsQuery } from '../../store';

import Card from '../UI/Card';

const Products = () => {
  const { data } = useGetProductsQuery();

  

  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  w-full md:w-3/4 mx-auto mt-[200px] mb-[200px]">
      {data?.map((item) => (
        <Card
          key={item?.id}
          name={item?.name}
          price={item?.price}
          img={item?.img}
          id={item?.id}
        />
      ))}
    </div>
  );
};

export default Products;
