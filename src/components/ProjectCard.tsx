import { BsPlusCircleFill } from 'react-icons/bs';
import TaskCard from './TaskCard';
import Modal from './Modal';
import { useState } from 'react';

const ProjectCard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col min-w-[32%] gap-4 px-3 py-2 border-dashed border-2 border-gray-300 rounded-lg">
      <header className="flex justify-between">
        <p className="font-bold">To do</p>
        <div className="flex gap-1 items-center cursor-pointer" onClick={() => setShowModal(true)}>
          <BsPlusCircleFill/>
          <span className="font-semibold text-sm">Add new task</span>
        </div>
      </header>
      <div className="flex flex-col gap-3">
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
          <input type='text' className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='font-bold'>Description</label>
          <textarea rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
        </div>
        <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' onClick={() => setShowModal(false)}>
          Add Task
        </button>
      </Modal>
    </div>
  );
};

export default ProjectCard;
