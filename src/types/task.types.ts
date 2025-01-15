export type Task = {
    id: string;
    title: string;
    description: string;
    project?: string;
    status: 'todo' | 'in-progress' | 'done';
    dueDate?: string;
  }