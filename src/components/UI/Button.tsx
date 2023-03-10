import className from 'classnames';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  success?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  to?: string;
  className?: string;
}

const Button = ({
  children,
  primary,
  success,
  danger,
  outline,
  rounded,
  to,
  ...rest
}: ButtonProps) => {
  const classes = className(
    rest.className,
    'flex justify-between items-center px-7 py-2.5  border h-8 transition duration-300 ease-in-out',
    {
      'border-blue-500 bg-cyan-900 p-5 text-white hover:bg-cyan-700':
        primary,
      'border-green-500 bg-green-500 text-white': success,

      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
    }
  );

  if (to) {
    return (
      <Link {...rest} to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
