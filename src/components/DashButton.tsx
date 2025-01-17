import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface DashButtonProps {
  text: string;
  Icon: IconType;
  onClick?: () => void;
  url?: string;
}

const DashButton = ({ text, Icon, url,onClick }: DashButtonProps) => {
  const containerClassName="flex bg-white py-5 px-8 items-center w-fit gap-8 rounded-lg shadow-sm"

  const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return url ?    
    <Link
      to={url}
      className={containerClassName}
      >{children}</Link>:
      <div className={containerClassName} onClick={onClick ? () => onClick() : undefined}>{children}</div>
  }


  return (
    <Layout>
      <span className="font-semibold text-xl">{text}</span>
      <div className="p-4 rounded-lg bg-primary">
        <Icon />
      </div>
    </Layout>
  );
};

export default DashButton;
