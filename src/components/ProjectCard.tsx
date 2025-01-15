import { useState } from "react";
import { type Project } from "../types/project.types";
import { NotebookPen, SquareCheckBig} from "lucide-react";


type ProjectCardProps = {
    project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const {title, description, recentTasks, notes, tasks} = project
    const progress = 65

    return (
        <div className="flex flex-row rounded-md shadow-md px-4 py-4 gap-6">
            <div className="flex flex-col px-2 gap-5 flex-1">
            {/* Header */}
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-row items-center gap-8 text-gray-600">
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
            <div className="flex-1 hidden flex-col gap-4 2xl:flex">
                <p>Recent Tasks</p>
                <div className="flex flex-col gap-2">
                    {recentTasks.map(task => <div># {task}</div>)}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard