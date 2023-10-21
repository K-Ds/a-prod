import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useParams } from 'react-router-dom';

const Project = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className="flex overflow-x-scroll gap-3 h-full p-5 w-full">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Project;
