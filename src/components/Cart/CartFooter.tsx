import Button from '../UI/Button';

interface CartFooterProps {
  totalCartPrice: number;
}

const CartFooter = ({ totalCartPrice }: CartFooterProps) => {
  return (
    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${totalCartPrice.toFixed(2)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6 text-lg">
        <Button primary>Checkout</Button>
      </div>
    </div>
  );
};

export default CartFooter;
