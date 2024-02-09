import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';


const Project = () => {
  const params = useParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const id = params.id;

  return (
    <div className='flex flex-col gap-5 p-5'>
      <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary      justify-center w-fit' onClick={() => setShowModal(true)}>
        New Project
      </button>
    <div className="flex overflow-x-scroll gap-3 h-full overflow-hidden w-full">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Modal onClose={() => setShowModal(false)} show={showModal} header="New Task">
        {/* Title */}
        <input type='text' className='font-bold text-xl py-2 pr-4 w-full' value="Update A-PROD"/>
                {/* Description */}
                <div className='flex flex-col gap-3'>
                  <label className='font-bold'>Description</label>
                  <textarea rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
                </div>
                <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' onClick={() => setShowModal(false)}>
                  Submit
                </button>
      </Modal>
      
    </div>
    </div>
  );
};

export default Project;
