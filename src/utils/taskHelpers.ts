import { Task } from "../types/task.types"

export const thisWeekTasksFilter = (tasks: Task[]) => {
    return tasks.filter(task => {
        if(task.dueDate === undefined) return false

        const dueDate = new Date(task.dueDate)
        const now = new Date()
        
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()))
        const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6))

        return dueDate >= startOfWeek && dueDate <= endOfWeek
    })
}