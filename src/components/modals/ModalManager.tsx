import React from 'react'
import Modal from './Modal'
import { closeModal } from '../../store/slices/modal.slice'
import NewTaskModal from './NewTaskModal'
import NewNoteModal from './NewNoteModal'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import NewProjectModal from './NewProjectModal'

const ModalManager = () => {
  const dispatch = useAppDispatch()
  const { isOpen, modalType, modalProps } = useAppSelector(state => state.modal)

  const renderModalContent = () => {
    switch(modalType) {
        case 'project':
            return <NewProjectModal {...modalProps} />
      case 'task':
        return <NewTaskModal {...modalProps} />
      case 'note':
        return <NewNoteModal {...modalProps} />
      default:
        return null
    }
  }

  return (
    <Modal show={isOpen} onClose={() => dispatch(closeModal())} header={modalType}>
      {renderModalContent()}
    </Modal>
  )
}

export default ModalManager