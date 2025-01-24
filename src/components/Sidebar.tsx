import Button from './Button';
import ListDropDown from './ListDropDown';
import { useEffect, useState } from 'react';
import { Project } from '../types/project.types';
import projectsData from '../data/projects';
import { AlarmClockCheck, icons, ListTodo, NotebookIcon, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [extended, setExtended] = useState(true)

  const navigator = useNavigate()

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const iconsSize = extended ? 20 : 25

  return (
    <div className={`${extended ? 'w-1/5' : 'w-fit'} h-full flex flex-col items-start px-4 py-6 gap-8 border-r border-gray-200`}  onMouseEnter={() => setExtended(true)} onMouseLeave={() => setExtended(false)}>
      <div className='flex flex-col gap-12'>
        <Link to="/" className='flex flex-row gap-2 items-center'>
          <h1 className="font-bold text-4xl text-primary">{extended? 'A-PROD' : 'A'}</h1>
          <Target className='stroke-red-400' size={32}/>
        </Link>
        
        <Button
        text="Pomodoro"
        type="danger"
        Icon={AlarmClockCheck}
        url="/pomodoro"
        extended={extended}
      />
      </div>

      
      <div className="flex flex-col items-center gap-8 w-full py-5">
        <ListDropDown
          header="Projects"
          data={projects}
          extended={extended}
        />

        <div className={`flex flex-row items-center ${extended?'justify-start':'justify-center'} w-full gap-3 cursor-pointer`} onClick={() => navigator("/tasks")}>
          <ListTodo size={iconsSize}/>
          {extended && <span className='text-lg font-semibold'>Tasks</span> }
        </div>

        <div className={`flex flex-row items-center ${extended?'justify-start':'justify-center'} w-full gap-3 cursor-pointer`} onClick={() => navigator("/notes")}>
          <NotebookIcon size={iconsSize}/>
          {extended && <span className='text-lg font-semibold'>Notes</span>}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
