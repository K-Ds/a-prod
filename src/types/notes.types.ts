export type Note = {
    id: string;
    title: string;
    content: string;
    project?: string;
  }

  export type NewNote = {
    title: string;
    content: string;
    project?: string;
  }