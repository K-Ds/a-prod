import DashButton from './../components/DashButton';
import DashCard from '../components/DashCard';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import CalendarView from './../components/CalendarView';
import DashTasks from '../components/DashTasks';
import DateView from '../components/DateView';

const Home = () => {
  return (
    <div className="p-8 flex flex-col gap-12">
      {/* Dashbuttons */}
      <div className="flex gap-3 justify-between">
        <DateView />
        <div className="flex gap-5">
          <DashButton text="Create new task" url="/tasks/new" Icon={FaPlus} />
          <DashButton text="Start Pomodoro" url="/pomodoro" Icon={FaPlay} />
        </div>
      </div>

      {/* DashCards */}
      <div className="flex gap-3 justify-between">
        <DashCard label="Tasks Done" data="15" Icon={FaClockRotateLeft} />
        <DashCard label="Working time" data="4:23" Icon={FaClockRotateLeft} />
        <DashCard label="Due Today" data="2" Icon={FaClockRotateLeft} />
      </div>

      {/* Dashwidgets */}
      <div className="flex gap-6">
        {/* Calendar */}
        <div className="w-1/2 bg-white rounded-2xl px-9 py-5">
          <CalendarView />
        </div>
        {/* Due today */}
        <DashTasks />
      </div>
      <div>
        {/* Reminders */}
        <div></div>
        {/* Tasks */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
