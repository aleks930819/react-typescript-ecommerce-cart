import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <nav className="fixed top-0 bg-cyan-700 w-full p-10 text-white">
      <ul className="text-xl flex justify-end items-center gap-6">
        <li className=" cursor-pointer">Products</li>
        <li className=" cursor-pointer">
          <div className='text-center bg-black rounded-full bg-opacity-70'>
            <p>1</p>
          </div>
          <div>
            <ShoppingCartIcon className="h-8 w-8" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
