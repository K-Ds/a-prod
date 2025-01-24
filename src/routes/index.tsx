import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project/Projects';
import ProjectDetails from '../pages/Project/ProjectDetails';
import Pomodoro from '../pages/Pomodoro.tsx/Pomodoro';
import DashLayout from '../layouts/DashLayout';
import Notes from '../pages/notes/Notes';
import Tasks from '../pages/tasks/Tasks';

const Router = () => {
  return (
    <Routes >
      <Route path="/" element={<DashLayout/>}>
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Project />} />
          <Route path=":id" element={<ProjectDetails />} />
        </Route>
        <Route path='pomodoro' element={<Pomodoro />} />
        <Route path="tasks">
          <Route index element={<Tasks />} />
        </Route>
        <Route path="notes">
          <Route index element={<Notes />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
