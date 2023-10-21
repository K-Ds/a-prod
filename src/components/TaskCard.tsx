import { CgAttachment, CgNotes } from 'react-icons/cg';
import { CiCircleMore } from 'react-icons/ci';

const TaskCard = () => {
  return (
    <div className="flex flex-col gap-3 text-sm w-full py-3 px-3 shadow-md border border-gray-200 rounded-md bg-white">
      {/* first row */}
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Design new ui presentation</p>
          <span className="text-gray-500 text-xs">Dribble marketing</span>
        </div>
        <CiCircleMore className="text-xl" />
      </div>
      {/* sec row */}
      <div></div>
      {/* last row */}
      <div className="flex justify-between">
        <span className="bg-gray-200 rounded-lg px-2 py-1 text-xs font-semibold text-gray-600">
          24 Aug 2023
        </span>
        <div className="flex gap-3">
          <div className="flex items-center">
            <CgAttachment />
            <span>7</span>
          </div>
          <div className="flex items-center gap-1">
            <CgNotes />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
