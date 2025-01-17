import { useEffect, useMemo, useState } from "react";
import { Project } from "../../types/project.types";
import { fetchProjectDetails, fetchProjectTasks } from "../../data/projects";
import { useNavigate, useParams } from "react-router-dom";
import { Circle, CircleCheck, CircleDashed, CirclePlus, Dot, EllipsisVertical, Filter } from "lucide-react";
import { Task } from "../../types/task.types";
import { Note } from "../../types/notes.types";
import { fetchNotesDetails } from "../../data/notes";
import { useAppDispatch } from "../../store/hook";
import { openModal } from "../../store/slices/modal.slice";

type ProjectDetailsProps =
 {
    projectId : string;
}

const ProjectDetails = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const {id} = params

    if(!id){
        navigate("projects")
    }

    const [details, setDetails] = useState<Project|undefined>()

    const tasksDetails = useMemo(() => {
        const data = fetchProjectTasks(id as string)

        if(!data) return [];
        
        return data
        
    }, [id]);

    const notesDetails = useMemo(() => {
        const data = fetchNotesDetails(id as string)

        if(!data) return [];
        
        return data
        
    }, [id]);
    

    useEffect(() => {
        try {
            const data = fetchProjectDetails(id as string)
            data.progress = Math.floor(Math.random() * 100)
            setDetails(data)
        }
        catch(err) {
            console.error(err)
        }
    }, [id]) 

    const ProjectDetailsCard = ({name, value, color}: {name:string, value:string|number, color: string}) => {
        return (
        <div className={`p-4 rounded-lg flex flex-col gap-2  bg-slate-200`}>
            <span className={`text-gray-500 capitalize`}>{name}</span>
            <span className="text-2xl font-bold">{value}</span>
        </div>
        
    )}

    const ProjectTask = ({task}:{task:Task}) => {
        return (
            <div className="flex flex-row justify-between items-center w-full px-3 py-4 bg-slate-100 rounded-lg">
                <div className="flex flex-row items-center gap-4 flex-1">
                    {task?.status === "todo" ? 
                        <CircleDashed size={18} color="#D3D5D7"/> : 
                    task?.status==="in-progress"? 
                        <Circle size={18} color="#2C4251"/> : 
                    <CircleCheck size={18} color='#79AEA3'/>}

                    <span>{task.title}</span>
                </div>
                <div className="flex flex-row items-center gap-2 w-44 justify-between">
                        <span className="text-gray-500">{task?.dueDate ? new Date(task?.dueDate).toLocaleString('en-US', { day: '2-digit', month: 'short', hour: 'numeric', minute: 'numeric', hour12: false }): "-" }</span>
                        <EllipsisVertical size={18}/>
                </div>
                
            </div>
        )
    };

    const ProjectNote = ({note, color}:{note:Note, color:string}) => {
        return (
            <div className="flex flex-row justify-between items-center w-full px-3 py-2 bg-slate-100 rounded-lg">
                <div className="flex flex-row items-center flex-1">
                   <Dot color={color} size={48} />
                    <span>{note.title}</span>
                </div>
                <div className="flex flex-row items-center gap-2 justify-between">
                    <EllipsisVertical size={18}/>
                </div>
                
            </div>
        )
    };

    return (
        <div className="flex flex-col p-6 w-full">
            {details && 
                <div className="flex flex-col gap-y-8 px-6 py-4 w-full rounded-lg border">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl">{details.title}</h2>
                        <p className="text-gray-500 tracking-wide text-justify">{details.description}</p>
                    </div>
                    <div className="w-full grid gap-4 items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
                        <ProjectDetailsCard name="tasks" value={details.tasks.length}  color={details.colorCode}/>
                        <ProjectDetailsCard name="notes" value={details.notes.length}  color={details.colorCode}/>
                        <ProjectDetailsCard name="to do" value={details.notes.length}  color={details.colorCode}/>
                        <ProjectDetailsCard name="Progress" value={details?.progress}  color={details.colorCode}/>
                    </div>
                    {/* tasks */}
                    <div className="w-full flex flex-col gap-y-4">
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-4 items-center">
                                <h3 className="font-bold text-lg">Tasks</h3>
                                <CirclePlus size={21} onClick={() => dispatch(openModal({modalType: "task", modalProps: {projectId:id}}))} className="cursor-pointer"/>
                            </div>
                            <Filter size={18}/>
                        </div>

                        {tasksDetails.map(task => <ProjectTask task={task as Task}/>)}
                    </div>
                    {/* notes */}
                    <div className="w-full flex flex-col gap-y-4">
                        <div className="w-full flex flex-row justify-between items-center mr-3">
                        <div className="flex flex-row gap-4 items-center">
                                <h3 className="font-bold text-lg">Notes</h3>
                                <CirclePlus size={21} onClick={() => dispatch(openModal({modalType: "note", modalProps: {projectId: id}}))} className="cursor-pointer"/>
                            </div>
                            <Filter size={18}/>
                        </div>
                        {notesDetails.map(note => <ProjectNote note={note} color={details.colorCode}/>)}
                    </div>
                </div>
            }
        </div>
    )
};

export default ProjectDetails;