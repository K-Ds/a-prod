export interface Todo {
    id: number
    title: string
    description: string
    completed: boolean
    projectId?: number
  }
  
  export interface Note {
    id: number
    content: string
    projectId?: number
  }
  
  export interface ModalState {
    isOpen: boolean
    modalType: 'todo' | 'note' | null
    modalProps: Record<string, unknown>
  }
  
  export interface RootState {
    modal: ModalState
    // Add other slices here
  }