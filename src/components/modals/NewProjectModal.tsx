import { NewProject} from "../../types/project.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { closeModal } from "../../store/slices/modal.slice";


const NewProjectModal = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<NewProject>()

      const handleClose = () => {
        dispatch(closeModal())
      }

    const onSubmit: SubmitHandler<NewProject> = (data) => {
        if(Object.keys(errors).length > 0){
            console.log(errors)
            return
        }
        console.log(data)
        handleClose()
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-5">
                <div className='flex flex-col gap-3'>
                    {/* Title */}
                    <label className='font-bold' htmlFor="title">Project Name</label>
                    <input id="title" {...register("title")} type='text' className='font-semibold text-xl py-2 px-4 w-full border border-gray-200 rounded-md' placeholder="Project Name" />
                </div>
                {/* Description */}
                <div className='flex flex-col gap-3'>
                    <label className='font-bold' htmlFor="description">Description</label>
                    <textarea {...register("description")} id="description" rows={4} className='border-gray-200 border rounded-md py-2 px-4' placeholder='Small Description of the project'/>
                </div>

                <button className='px-4 py-2 rounded-lg flex items-center gap-2 font-medium bg-primary justify-center' type="submit">
                    Submit
                </button>
            </form>
    )
}

export default NewProjectModal