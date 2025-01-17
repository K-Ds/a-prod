import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ModalManager from "../components/modals/ModalManager";
import { GlobalTimer } from "../hooks/useGlobalTimer";


const DashLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <GlobalTimer />
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-gray-50 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden flex flex-col items-center">
          <Outlet />
        </main>
      </div>
      <ModalManager />
    </div>
  );
}

export default DashLayout;
