import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import {Plus,Search} from "lucide-react"
import NewProjectModal from '../../components/modals/NewProjectModal';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projects';
import { type Project } from '../../types/project.types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { openModal } from '../../store/slices/modal.slice';


const ProjectHome = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(()=>{
    setProjects(projectsData)
  },[])

  const onProjectDetails = (id:string) =>{
    navigate(`/projects/${id}`)
  }

  return (
    <div className='flex flex-col gap-5 p-5 h-full w-full 2xl:w-4/5'>
      <div className='flex flex-row w-full justify-between'>
        <div className='flex flex-row gap-6 items-center'>
        <h1 className='text-2xl font-semibold'>Projects</h1>
        <button className='px-3 py-2 rounded-lg flex items-center font-medium bg-primary justify-center w-fit' onClick={() => dispatch(openModal({modalType:"project"}))}>
        <Plus size={20}/>
      </button>
      </div>
      <div className='flex flex-row gap-3 items-center border-2 border-gray-300 rounded-lg  p-2'>
        <Search/>
        <input type='text' placeholder='Search' className='px-2 bg-transparent border-0 outline-none'/>
      </div>
      </div>
      <div className='flex gap-6 flex-col overflow-y-scroll pb-5 scrollbar'>
        {
          projects.map(project => <ProjectCard project={project} onOpenProject={onProjectDetails}/>)
        }
    </div>
    </div>
  );
};

export default ProjectHome;
