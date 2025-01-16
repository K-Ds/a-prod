import React, { useState } from 'react';
import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { Project } from '../types/project.types';
import { Folder, FolderDot } from 'lucide-react';

interface ListDropDownProps {
  data: Array<Project>;
  header: string
}

const ListDropDown = ({ data, header }: ListDropDownProps) => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className="flex gap-2 items-center justify-between font-semibold"
      >
        <p className='cursor-pointer' onClick={() =>navigate("/projects") }>{header}</p>
        {hidden ? <PiCaretRightBold onClick={() => setHidden(!hidden)} className='cursor-pointer'/> : <PiCaretDownBold className='cursor-pointer' onClick={() => setHidden(!hidden)}/>}
      </div>
      {!hidden && (
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <Link
              to={`/projects/${item.id}`}
              className={`flex items-center gap-4 pl-4 py-2`}
              key={item.id}
            >
              <FolderDot size={20}/>
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDropDown;
