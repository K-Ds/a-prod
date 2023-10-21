import { AiOutlineFolder } from 'react-icons/ai';
import { BsCheckSquare, BsCheckSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const DashTasks = () => {
  return (
    <div className="flex-1 rounded-2xl bg-white flex flex-col gap-8 p-5">
      <div className="flex justify-between font-semibold">
        <span className="font-bold text-lg">To Do's</span>
        <Link to="tasks">View All</Link>
      </div>

      <div className="flex flex-col gap-3 ">
        {/* tasks */}
        <div className="flex items-center border-b pb-3 justify-between">
          <div className="flex items-center  gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              <AiOutlineFolder className="text-primary" />
            </div>
            <span className="text-lg">Creating Firmware</span>
          </div>
          <BsCheckSquare className="text-xl text-primary/50 cursor-pointer" />
        </div>

        <div className="flex items-center border-b pb-3 justify-between">
          <div className="flex items-center  gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              <AiOutlineFolder className="text-primary" />
            </div>
            <span className="text-lg">Updating Windows</span>
          </div>
          <BsCheckSquare className="text-xl text-primary/50 cursor-pointer" />
        </div>

        <div className="flex items-center border-b pb-3 justify-between">
          <div className="flex items-center  gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              <AiOutlineFolder className="text-primary" />
            </div>
            <span className="text-lg">Continue Ex-Tracker</span>
          </div>
          <BsCheckSquareFill className="text-xl text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default DashTasks;
