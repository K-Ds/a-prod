import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  type?: 'normal' | 'danger' | 'primary';
  url: string;
  Icon?: IconType;
}

const Button = ({ text, type = 'normal', Icon, url }: ButtonProps) => {
  return (
    <Link
      to={url}
      className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium ${
        type == 'normal'
          ? 'bg-slate-300'
          : type == 'primary'
          ? 'bg-green-600'
          : 'bg-red-400'
      }`}
    >
      {Icon && <Icon />}
      <p>{text}</p>
    </Link>
  );
};

export default Button;
