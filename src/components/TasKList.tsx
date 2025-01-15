import { BsPlusCircleFill } from 'react-icons/bs';
import TaskCard from './TaskCard';
import Modal from './modals/Modal';
import {useState } from 'react';
import { Task } from '../types/task.types';

{/* <div className={`flex overflow-x-scroll scrollbar  gap-5 h-full w-full pb-3 ${showScroll ? 'scrollbar-thumb-gray-400 scrollbar-track-transparent':null}`} 
onMouseEnter={() => setShowScroll(true)} 
onMouseLeave={() => setShowScroll(false)}
></div> */}



type TaskListProps = {
  colorCode: string;
  title: string;
  tasks: Array<Task>;
};

const TaskList = ({title,tasks}:TaskListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showScroll, setShowScroll] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-w-[32%] gap-6 px-4 py-3 border-dashed border-2 border-gray-300 rounded-lg h-full overflow-hidden">
      <header className="flex justify-between">
        <p className="font-bold">{title}</p>
        <div className="flex gap-1 items-center cursor-pointer" onClick={() => setShowModal(true)}>
          <BsPlusCircleFill/>
          <span className="font-semibold text-sm">Add new task</span>
        </div>
      </header>
      <div className={`flex flex-col gap-3 h-full overflow-y-scroll scrollbar px-2 ${showScroll ? 'scrollbar-thumb-gray-400 scrollbar-track-transparent':null}`}     onMouseEnter={() => setShowScroll(true)} 
    onMouseLeave={() => setShowScroll(false)}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal} header="New Task">
        {/* Title */}
        <input type='text' className='font-bold text-xl py-2 px-4 w-full border-gray-200 border rounded-lg' value="New Task"/>
        {/* Description */}
        <div className='flex flex-col gap-3'>
          <label className='font-bold'>Description</label>
          <textarea rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='font-bold'>Project</label>
          <input type='text' className='border-gray-200 border rounded-md py-2 px-4' value="none"/>
        </div>
        <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' onClick={() => setShowModal(false)}>
          Add Task
        </button>
      </Modal>
    </div>
  );
};

export default TaskList;
