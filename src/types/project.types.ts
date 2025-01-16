export type Project = {
    id: string;
    title: string;
    recentTasks: string[];
    colorCode: string;
    description: string;
    tasks: string[];
    notes: string[];
    progress: string|number;
}