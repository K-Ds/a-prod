import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  type?: 'normal' | 'danger' | 'primary';
  url: string;
  Icon?: LucideIcon;
  extended?: boolean;
}

const Button = ({ text, type = 'normal', Icon, url,extended = true }: ButtonProps) => {
  return (
    <Link
      to={url}
      className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium stroke-white ${
        type === 'normal'
          ? 'bg-slate-300'
          : type === 'primary'
          ? 'bg-green-600'
          : 'bg-red-400'
      }`}
    >
      {Icon && <Icon color='#fff'/>}
      {extended && <p className='text-white'>{text}</p>}
    </Link>
  );
};

export default Button;
