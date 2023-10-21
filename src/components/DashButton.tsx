import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface DashButtonProps {
  text: string;
  Icon: IconType;
  url: string;
}

const DashButton = ({ text, Icon, url }: DashButtonProps) => {
  return (
    <Link
      to={url}
      className="flex bg-white py-5 px-8 items-center w-fit gap-8 rounded-lg shadow-sm "
    >
      <span className="font-semibold text-xl">{text}</span>
      <div className="p-4 rounded-lg bg-primary">
        <Icon />
      </div>
    </Link>
  );
};

export default DashButton;
