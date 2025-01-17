import Button from './Button';
import ListDropDown from './ListDropDown';
import { useEffect, useState } from 'react';
import { Project } from '../types/project.types';
import projectsData from '../data/projects';
import { AlarmClockCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])
  return (
    <div className="w-1/5 h-full flex flex-col items-start px-4 py-6 gap-8 border-r border-gray-200">
      <div className='flex flex-col gap-12'>
        <Link to="/" className='flex flex-row gap-2 items-center'>
          <h1 className="font-bold text-4xl text-primary">A-PROD</h1>
          <Target className='stroke-red-400' size={32}/>
        </Link>
        
        <Button
        text="Pomodoro"
        type="danger"
        Icon={AlarmClockCheck}
        url="/pomodoro"
      />
      </div>

      
      <div className="flex flex-col gap-6 w-full py-5">
        <ListDropDown
          header="Projects"
          data={projects}
        />
      </div>
    </div>
  );
};

export default Sidebar;
