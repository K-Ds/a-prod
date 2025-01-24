import { useEffect, useMemo, useState } from "react";
import { Project } from "../../types/project.types";
import { fetchProjectDetails, fetchProjectTasks } from "../../data/projects";
import { useNavigate, useParams } from "react-router-dom";
import { Archive, Circle, CircleCheck, CircleDashed, CirclePlus, Dot, Ellipsis, EllipsisVertical, Eye, Filter, PenLine, Trash2 } from "lucide-react";
import { Task } from "../../types/task.types";
import { Note } from "../../types/notes.types";
import { fetchNotesDetails } from "../../data/notes";
import { useAppDispatch } from "../../store/hooks";
import { openModal } from "../../store/slices/modal.slice";
import { Menu, MenuHeader, MenuItem, SubMenu } from "@szhsin/react-menu";
import { AppDispatch } from "../../store";
import { fetchPersonalTasks } from "../../data/tasks";
import { thisWeekTasksFilter } from "../../utils/taskHelpers";


const Tasks = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [tasks, setTasks] = useState<Task[]|undefined>()
    const [thisWeekTasks, setThisWeekTasks] = useState<Task[]|undefined>()

    const ProjectMenu  = () => {
        return (
            <Menu menuButton={<Ellipsis className="m-2" size={24}/>} transition align="end" menuClassName="bg-white border-2  rounded-md px-4 py-4 w-80 gap-2">
                <MenuHeader className="font-semibold">Settings</MenuHeader>
                {/* <MenuItem className="px-6 py-2 flex flex-row gap-2 items-center">
                    <Archive size={18}/> 
                    <span>Archive</span>
                </MenuItem>
                <MenuItem className="text-red-500 px-6 py-2 flex flex-row gap-2 items-center">
                    <Trash2 size={18} className="stroke-red-500"/>
                    <span>Delete</span>
                </MenuItem> */}
            </Menu>
        )
    }

    const TaskMenu  = ({taskId,taskStatus, dispatch}:{taskId: string, taskStatus: 'todo' | 'in-progress' | 'done'; dispatch: AppDispatch}) => {
        return (
            <Menu menuButton={<EllipsisVertical className="m-2" size={24}/>} transition align="end" menuClassName="bg-white border-2  rounded-md w-80">
                <MenuItem className="px-6 py-3 flex flex-row gap-2 items-center" onClick={() => dispatch(openModal({modalType:'task', modalProps: {taskId:taskId}}))}>
                    <Eye size={18}/> 
                    <span>Open</span>
                </MenuItem>
                <SubMenu 
                label={<div className="px-6 py-3 flex flex-row gap-2 items-center">
                        <PenLine size={18}/>    
                        <span>Status</span>
                    </div>}
                    menuClassName="bg-white border-2  rounded-md w-80"
                >
                    {
                        ['todo' , 'in-progress' ,'done'].filter(status => status !== taskStatus).map(status =>(
                            <MenuItem className="px-4 py-3 flex flex-row gap-2 items-center">
                                {status === "todo" ? 
                                    <CircleDashed size={18} color="#D3D5D7"/> : 
                                status==="in-progress"? 
                                    <Circle size={18} color="#2C4251"/> : 
                                <CircleCheck size={18} color='#79AEA3'/>}
                                <span className="capitalize">{status}</span>
                                </MenuItem>
                        ))
                    }
                </SubMenu>
                
                <MenuItem className="text-red-500 px-6 py-3 flex flex-row gap-2 items-center">
                    <Trash2 size={18} className="stroke-red-500"/>
                    <span>Delete</span>
                </MenuItem>
            </Menu>
        )
    }

    const stats = (type: 'todo' | 'in-progress' | 'done') => {
        return thisWeekTasks?.filter(task => task.status === type).length
    }


    useEffect(() => {
        try {
            const data = fetchPersonalTasks()
            setTasks(data)

            setThisWeekTasks(thisWeekTasksFilter(data))
        }
        catch(err) {
            console.error(err)
        }
    }, []) 

    const DetailsCard = ({name, value}: {name:string, value:string|number}) => {
        return (
        <div className={`p-4 rounded-lg flex flex-col gap-2  bg-slate-200`}>
            <span className={`text-gray-500 capitalize`}>{name}</span>
            <span className="text-2xl font-bold">{value}</span>
        </div>
        
    )}

    const TaskRow = ({task}:{task:Task}) => {
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
                        <TaskMenu dispatch={dispatch} taskId={task.id} taskStatus={task.status}/>
                </div>
                
            </div>
        )
    };

    return (
        <div className="flex flex-col p-6 w-full overflow-y-scroll scrollbar"> 
                <div className="flex flex-col gap-y-8 px-6 py-4 w-full rounded-lg border">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <h2 className="font-bold text-2xl">Personal Tasks</h2>
                        <ProjectMenu/>
                    </div>

                    {/* TODO: Motiviation */}
                </div>
                    <div className="flex flex-col gap-5">
                        <p className=" font-semibold tracking-wide text-justify">This week on A-PROD</p>
                        <div className="w-full grid gap-4 items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
                            <DetailsCard name="To Do" value={stats("todo")||0} />
                            <DetailsCard name="In Progress" value={stats("in-progress")||0} />
                            <DetailsCard name="Done" value={stats("done")||0} />
                        </div>
                    </div>
                    {/* tasks */}
                    <div className="w-full flex flex-col gap-y-4">
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-4 items-center">
                                <h3 className="font-bold text-lg">Tasks</h3>
                                <CirclePlus size={21} onClick={() => dispatch(openModal({modalType: "task"}))} className="cursor-pointer"/>
                            </div>
                            <Filter size={18}/>
                        </div>

                        {tasks && tasks.map(task => <TaskRow task={task as Task}/>)}
                    </div>
                </div>
        </div>
    )
};

export default Tasks;