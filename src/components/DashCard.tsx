import { IconType } from 'react-icons';

interface DashCardProps {
  label: string;
  data: string | number;
  Icon: IconType;
}

const DashCard = ({ label, data, Icon }: DashCardProps) => {
  return (
    <div className="flex gap-5 items-center w-full bg-white justify-between p-5 rounded-2xl">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold">{label}</span>
        <span className="text-4xl font-semibold">{data}</span>
      </div>
      <div className="p-8 rounded-2xl bg-primary/10">
        <Icon className="text-3xl text-primary" />
      </div>
    </div>
  );
};

export default DashCard;
