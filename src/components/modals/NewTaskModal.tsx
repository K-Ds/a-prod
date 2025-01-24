import { SubmitHandler, useForm } from "react-hook-form";
import { NewTask } from "../../types/task.types";
import projects from "../../data/projects";
import { useAppDispatch } from "../../store/hooks";
import { closeModal } from "../../store/slices/modal.slice";

type NewTaskModalProps = {
    projectId?: string;
}


const NewTaskModal = ({projectId}:NewTaskModalProps) => {
  const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<NewTask>(
        {defaultValues: 
            {
                project: projectId || "",
                status: "todo",
                dueDate: new Date().toISOString().split('T')[0]
            }
        }
      )

      const handleClose = () => {
        dispatch(closeModal())
      }

    const onSubmit: SubmitHandler<NewTask> = (data) => {
        if(Object.keys(errors).length > 0){
            console.error(errors)
            return
        }

        if(projectId) data.project = projectId

        console.log(data)

        handleClose()
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-5">
                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="title">Task Title</label>
                    <input id="title" {...register("title")} type='text' className='font-semibold text-xl py-2 px-4 w-full border border-gray-200 rounded-md' placeholder="Project Name" />
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="description">Description</label>
                    <textarea {...register("description")} id="description" rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="project">Project</label>
                    <select defaultValue={projectId || ""} id="project" {...register("project")} className='py-2 px-4 w-full border border-gray-200 rounded-md'>
                        <option key='nonoe' value=''>None</option>
                      {projects.map(project => <option key={project.id} value={project.id}>{project.title}</option>)}
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="status">Status</label>
                    <select id="status" {...register("status")} className='py-2 px-4 w-full border border-gray-200 rounded-md'>
                      <option value="todo">To Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="title">Due Date</label>
                    <input id="dueDate" {...register("dueDate")} type='date' className='py-2 px-4 w-full border border-gray-200 rounded-md' placeholder="Project Name" />
                </div>

                <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' type="submit">
                    Submit
                </button>
            </form>
    )
}

export default NewTaskModal