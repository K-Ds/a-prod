import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Projects';

const router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Project />} />
          <Route path=":id" element={<Project />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default router;
