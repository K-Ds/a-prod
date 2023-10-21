import { BsPlusCircleFill } from 'react-icons/bs';
import TaskCard from './TaskCard';

const ProjectCard = () => {
  return (
    <div className="flex flex-col min-w-[32%] gap-4 px-3 py-2 border-dashed border-2 border-gray-300 rounded-lg">
      <header className="flex justify-between">
        <p className="font-bold">To do</p>
        <div className="flex gap-1 items-center">
          <BsPlusCircleFill />
          <span className="font-semibold text-sm">Add new task</span>
        </div>
      </header>
      <div className="flex flex-col gap-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default ProjectCard;
