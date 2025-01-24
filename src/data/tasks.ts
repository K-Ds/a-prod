import { Task } from "../types/task.types";

const tasks: Task[] = [
    // Portfolio Project Tasks
    {
        id: "cf3264a9",
        title: "Change the color scheme",
        description: "Change the color to be more dynamic",
        status: "in-progress",
        dueDate: "2025-01-15T15:43:29+02:00",
        project: "vf3264112"
    },
    {
        id: "f6770679",
        title: "Update project screenshots",
        description: "Take new screenshots of recent projects and add to portfolio",
        status: "todo",
        dueDate: "2025-01-20T10:00:00+02:00",
        project: "vf3264112"
    },
    {
        id: "d5c0a3dc",
        title: "Add skills section",
        description: "Create a new section showcasing technical skills",
        status: "done",
        dueDate: "2025-01-10T14:00:00+02:00",
        project: "vf3264112"
    },
    {
        id: "fc82a860",
        title: "Mobile responsiveness",
        description: "Ensure portfolio works well on all devices",
        status: "todo",
        dueDate: "2025-01-25T16:30:00+02:00",
        project: "vf3264112"
    },

    // E-commerce App Tasks
    {
        id: "ab123456",
        title: "Setup payment gateway",
        description: "Integrate Stripe for payment processing",
        status: "in-progress",
        dueDate: "2025-02-01T11:00:00+02:00",
        project: "vf3264113"
    },
    {
        id: "cd789012",
        title: "Product catalog",
        description: "Create product listing and filtering system",
        status: "todo",
        dueDate: "2025-02-05T09:00:00+02:00",
        project: "vf3264113"
    },

    // Blog Redesign Tasks
    {
        id: "qr123456",
        title: "Design new layout",
        description: "Create wireframes for new blog layout",
        status: "done",
        dueDate: "2025-01-18T13:00:00+02:00",
        project: "vf3264114"
    },

    // Mobile Fitness App Tasks
    {
        id: "cc123456",
        title: "User authentication",
        description: "Implement secure login and registration",
        status: "in-progress",
        dueDate: "2025-02-10T14:00:00+02:00",
        project: "vf3264115"
    },
    {
        id: "dd789012",
        title: "Workout tracker",
        description: "Build exercise logging functionality",
        status: "todo",
        dueDate: "2025-02-15T16:00:00+02:00",
        project: "vf3264115"
    },

    // Task Manager Tasks
    {
        id: "ii123456",
        title: "Database design",
        description: "Create schema for task management system",
        status: "done",
        dueDate: "2025-01-30T10:00:00+02:00",
        project: "vf3264118"
    },

    // Independent Tasks
    {
        id: "cf3212a9",
        title: "CES Conference",
        description: "Attend the CES Conference",
        status: "todo",
        dueDate: "2025-01-19T12:43:29+02:00"
    },
    {
        id: "ind123456",
        title: "Dentist Appointment",
        description: "Regular checkup at dental clinic",
        status: "todo",
        dueDate: "2025-01-22T09:30:00+02:00"
    },
    {
        id: "ind789012",
        title: "Buy groceries",
        description: "Weekly grocery shopping",
        status: "todo",
        dueDate: "2025-01-16T18:00:00+02:00"
    },
    {
        id: "ind345678",
        title: "Car maintenance",
        description: "Schedule regular car service",
        status: "in-progress",
        dueDate: "2025-01-24T11:00:00+02:00"
    }
]

export const fetchPersonalTasks = () => {
    return tasks.filter(task => task.project === undefined);
}

export default tasks;