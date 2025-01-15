import Modal from "./Modal"

type NewProjectModalProps = {
    onClose: () => void;
    show: boolean;
}


const NewProjectModal = ({onClose, show}:NewProjectModalProps) => {
    const onSubmit = () => {
        onClose()
    }

    return (
        <Modal onClose={onClose} show={show} header="New Project">
        {/* Title */}
        <input type='text' className='font-bold text-xl py-2 pr-4 w-full' value="Update A-PROD"/>
                {/* Description */}
                <div className='flex flex-col gap-3'>
                  <label className='font-bold'>Description</label>
                  <textarea rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
                </div>
                <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' onClick={onSubmit}>
                  Submit
                </button>
      </Modal>
    )
}

export default NewProjectModal