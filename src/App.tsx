import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './routes/index';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-gray-50 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
