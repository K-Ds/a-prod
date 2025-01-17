import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  modalType: "project",
  modalProps: {}
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalType, modalProps = {} } = action.payload
      state.isOpen = true
      state.modalType = modalType
      state.modalProps = modalProps
    },
    closeModal: (state) => {
      state.isOpen = false
      state.modalType = "project"
      state.modalProps = {}
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer