import React, { useState } from 'react';
import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { Project } from '../types/project.types';
import { Folder, FolderDot, FolderMinus } from 'lucide-react';

interface ListDropDownProps {
  data: Array<Project>;
  header: string,
  extended?: boolean
}

const ListDropDown = ({ data, header,extended }: ListDropDownProps) => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate()

  return (
    <div className={`flex flex-col gap-3 w-full ${extended?'justify-start':'justify-center'}`} >
      <div
        className={`flex gap-2 items-center ${extended?'justify-between':'justify-center'} font-semibold text-lg`}
      >
        <div className={`flex flex-row items-center gap-3 cursor-pointer `} onClick={() =>navigate("/projects") }>
          <FolderMinus size={extended ? 20: 25}/>
          { extended && <p className='cursor-pointer'>{header}</p>}
        </div>
        {extended &&(
        hidden ? <PiCaretRightBold onClick={() => setHidden(!hidden)} className='cursor-pointer'/> : <PiCaretDownBold className='cursor-pointer' onClick={() => setHidden(!hidden)}/>
        )}
        </div>
      {!hidden && extended && (
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
