import { useEffect, useMemo, useRef, useState } from "react";
import { type Project } from "../types/project.types";
import { Hash, NotebookPen, SquareCheckBig} from "lucide-react";
import { fetchProjectRecentTasks } from "../data/projects";
import { Task } from "../types/task.types";


type ProjectCardProps = {
    project: Project;
    onOpenProject : (id:string) => void
}

const ProjectCard = ({project,onOpenProject}: ProjectCardProps) => {

    const {id,title, description, notes, tasks,progress} = project

    const tasksDetails = useMemo(() => {
        const data = fetchProjectRecentTasks(id)

        if(!data) return [];
        
        return data
        
    }, [id]);


    return (
        <div className="flex flex-row rounded-md shadow-md px-4 py-4 gap-8 border">
            <div className="flex flex-col px-2 gap-5 flex-1">
            {/* Header */}
            <div className="flex flex-col gap-2 cursor-pointer" onClick={() => onOpenProject(id)}>
                <h1 className="font-bold text-lg ">{title}</h1>
                <p>{description}</p>
            </div>
            {/* Progress */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                    <span>Progress</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#2C4251] h-2 rounded-full" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
            </div>
            {/* Notes and Tasks */}
            <div className="flex flex-row items-center gap-8 text-gray-600 ">
            <div className="flex flex-row items-center gap-2">
                    <SquareCheckBig size={18}/>
                    <span>{tasks.length} tasks</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <NotebookPen size={18}/>
                    <span>{notes.length} notes</span>
                </div>

            </div>
            </div>

            {/* Active Tasks */}
            <div className="flex-1 hidden flex-col border-l pl-4 gap-4 2xl:flex">
                <p className="font-bold text-gray-600">Recent Tasks</p>
                <div className="flex flex-col gap-2">
                    {tasksDetails.map(task => 
                    <div className="flex flex-row gap-2 items-center">
                        <Hash size={18} color={`${task?.status === "todo" ? '#D3D5D7' : task?.status==="in-progress"? '#2C4251' : '#79AEA3'}`}/>
                        <span>{task?.title}</span>
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard