import { CircleX } from "lucide-react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineCancel } from "react-icons/md";

interface ModalProps {
    onClose: Function;
    header: String;
    children: ReactNode
    show: boolean
}

const Modal = ({header,onClose,children,show}:ModalProps) => {
    return (show ? createPortal(
        <div className="absolute top-0 flex w-screen h-screen bg-black bg-opacity-70 justify-center items-center">
            <div className='w-1/2 bg-white px-6 py-4 rounded-lg p'>
              <div className='flex py-1 justify-between items-center mb-6'>
                <span className='text-gray-500 capitalize'>{header}</span>
                <CircleX size={24} className="cursor-pointer" onClick={() => onClose()}/>
              </div>
              {children}
            </div>
        </div>,
    document.body
  ):<></>)
}

export default Modal;