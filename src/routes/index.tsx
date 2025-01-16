import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project/Projects';
import ProjectDetails from '../pages/Project/ProjectDetails';

const router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Project />} />
          <Route path=":id" element={<ProjectDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default router;
