import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './routes/index';
import ModalManager from './components/modals/ModalManager';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-gray-50 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden flex flex-col items-center">
          <Main />
        </main>
      </div>
      <ModalManager/>
    </div>
  );
}

export default App;
