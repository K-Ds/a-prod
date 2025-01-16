import { Project } from "../types/project.types"
import tasks from "./tasks";

const projects: Array<Project> = [
    {
        id: "vf3264112",
        title: "Portfolio",
        description: "Work to be done on my portfolio to make appealing to recruiters",
        tasks: ["cf3264a9", "f6770679", "d5c0a3dc", "fc82a860"],
        recentTasks: ["cf3264a9", "f6770679"],
        notes: ["vf3264a9", "f1370679", "d5dqa3dc", "fc82a123"],
        colorCode: "#2C4251",
        progress: Math.floor(Math.random() * 100)
    },
    {
        id: "vf3264113",
        title: "E-commerce App",
        description: "Building a full-stack e-commerce platform with React and Node.js",
        tasks: ["ab123456", "cd789012", "ef345678", "gh901234", "ij567890"],
        recentTasks: ["ab123456", "cd789012"],
        notes: ["kl123456", "mn789012", "op345678"],
        colorCode: "#1B998B",
        progress: Math.floor(Math.random() * 100)
    },
    {
        id: "vf3264114",
        title: "Blog Redesign",
        description: "Modernizing personal blog with new features and responsive design",
        tasks: ["qr123456", "st789012", "uv345678"],
        recentTasks: ["qr123456"],
        notes: ["wx123456", "yz789012", "aa345678", "bb789012"],
        colorCode: "#E84855",
        progress: Math.floor(Math.random() * 100)
    },
    {
        id: "vf3264115",
        title: "Mobile Fitness App",
        description: "Developing a workout tracking app with progress visualization",
        tasks: ["cc123456", "dd789012", "ee345678", "ff901234"],
        recentTasks: ["cc123456", "dd789012"],
        notes: ["gg123456", "hh789012"],
        colorCode: "#4A5899",
        progress: Math.floor(Math.random() * 100)
    },
    {
        id: "vf3264118",
        title: "Task Manager",
        description: "Creating a productivity tool for personal and team task management",
        tasks: ["ii123456", "jj789012", "kk345678"],
        recentTasks: ["ii123456"],
        notes: ["ll123456", "mm789012", "nn345678", "oo901234"],
        colorCode: "#D65108",
        progress: Math.floor(Math.random() * 100)
    }
]

export const fetchProjectTasks = (projectId:string) => {
    const project = projects.find(project => project.id === projectId);

    if(!project){
        throw new Error("Invalid project ID")
    }

    const projectTasks = project.tasks.map(taskId => tasks.find(task => task.id === taskId))

    if(!projectTasks) return []

    return projectTasks.filter(task => task !== undefined)
}

export const fetchProjectRecentTasks = (projectId:string) => {
    const project = projects.find(project => project.id === projectId);

    if(!project) throw new Error("Invalid Id")

    const projectTasks = project.recentTasks.map(taskId => tasks.find(task => task.id === taskId)).filter(task => task !== undefined)

    if(!projectTasks) return []

    return projectTasks
}

export const fetchProjectDetails = (projectId:string) => {
    const project = projects.find(project => project.id === projectId);

    if(!project) throw new Error("Invalid Id")

    return project
}

export default projects;