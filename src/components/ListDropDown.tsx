import React, { useState } from 'react';
import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

interface ListDropDownProps {
  data: Array<{ id: string; text: string; url: string }>;
  header: string;
}

const ListDropDown = ({ data, header }: ListDropDownProps) => {
  const [hidden, setHidden] = useState(true);
  const id = '32REFTA';

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className="flex gap-2 items-center justify-between font-semibold"
        onClick={() => setHidden(!hidden)}
      >
        <p>{header}</p>
        {hidden ? <PiCaretRightBold /> : <PiCaretDownBold />}
      </div>
      {!hidden && (
        <div className="flex flex-col gap-3 border-l-2 border-gray-400">
          {data.map((item) => (
            <Link
              to={item.url}
              className={`flex items-center gap-4 font-semibold text-sm ${
                id === item.id ? 'text-black' : 'text-gray-500 '
              }`}
              key={item.id}
            >
              <div className="bg-gray-400 w-3 h-0.5"></div>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDropDown;
