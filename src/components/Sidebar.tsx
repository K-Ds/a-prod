import Button from './Button';
import { PiTimerFill } from 'react-icons/pi';
import ListDropDown from './ListDropDown';
import { useEffect, useMemo, useState } from 'react';
import { Project } from '../types/project.types';
import projectsData from '../data/projects';

const Sidebar = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])
  return (
    <div className="w-1/5 h-full flex flex-col items-start px-4 py-6 gap-8 border-r border-gray-200">
      <div>
        <h1 className="font-bold text-2xl">A-PROD</h1>
      </div>

      <Button
        text="Pomodoro"
        type="danger"
        Icon={PiTimerFill}
        url="/pomodoro"
      />
      <div className="flex flex-col gap-6 w-full py-5">
        <ListDropDown
          header="Projects"
          data={projects}
        />
        {/* <ListDropDown
          header="Tasks"
          data={[
            { id: '11', text: 'All Tasks', url: '/tasks' },
            { id: '32REFTA', text: 'Design systems', url: '/tasks/32REFTA' },
          ]}
        />
        <ListDropDown
          header="Notes"
          data={[
            { id: '11', text: 'All Notes', url: '/tasks' },
            { id: '32REFTA', text: 'Design systems', url: '/notes/32REFTA' },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
