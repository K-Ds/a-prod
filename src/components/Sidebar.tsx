import Button from './Button';
import { PiTimerFill } from 'react-icons/pi';
import ListDropDown from './ListDropDown';

const Sidebar = () => {
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
          data={[
            { id: '11', text: 'All Projects', url: '/projects' },
            { id: '32REFTA', text: 'Design systems', url: '/projects/32REFTA' },
          ]}
        />
        <ListDropDown
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
        />
      </div>
    </div>
  );
};

export default Sidebar;
