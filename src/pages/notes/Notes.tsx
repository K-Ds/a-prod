import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Archive, CirclePlus, Dot, Ellipsis, EllipsisVertical, Eye, Filter, Trash2 } from "lucide-react";
import { Note } from "../../types/notes.types";
import {  fetchPersonalNotes } from "../../data/notes";
import { useAppDispatch } from "../../store/hooks";
import { openModal } from "../../store/slices/modal.slice";
import { Menu, MenuHeader, MenuItem, SubMenu } from "@szhsin/react-menu";
import { AppDispatch } from "../../store";


const Notes = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [notes, setNotes] = useState<Note[]|undefined>()

    const ProjectMenu  = () => {
        return (
            <Menu menuButton={<Ellipsis className="m-2" size={24}/>} transition align="end" menuClassName="bg-white border-2  rounded-md px-4 py-4 w-80 gap-2">
                {/* <MenuHeader className="font-semibold">Settings</MenuHeader>
                <MenuItem className="px-6 py-2 flex flex-row gap-2 items-center">
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

    const NoteMenu  = ({noteId, dispatch}:{noteId: string; dispatch: AppDispatch}) => {
        return (
            <Menu menuButton={<EllipsisVertical className="m-2" size={24}/>} transition align="end" menuClassName="bg-white border-2  rounded-md w-80">
                <MenuItem className="px-6 py-3 flex flex-row gap-2 items-center" onClick={() => dispatch(openModal({modalType:'note', modalProps: {noteId:noteId}}))}>
                    <Eye size={18}/> 
                    <span>Open</span>
                </MenuItem>
                
                <MenuItem className="px-6 py-3 flex flex-row gap-2 items-center">
                    <Archive size={18}/> 
                    <span>Archive</span>
                </MenuItem>

                <MenuItem className="text-red-500 px-6 py-3 flex flex-row gap-2 items-center">
                    <Trash2 size={18} className="stroke-red-500"/>
                    <span>Delete</span>
                </MenuItem>
            </Menu>
        )
    }
   

    useEffect(() => {
        try {
            const data = fetchPersonalNotes()
            setNotes(data)
        }
        catch(err) {
            console.error(err)
        }
    }, []) 


    const ProjectNote = ({note}:{note:Note}) => {
        return (
            <div className="flex flex-row justify-between items-center w-full px-3 py-2 bg-slate-100 rounded-lg">
                <div className="flex flex-row items-center flex-1">
                   <Dot className="fill-primary" size={48} />
                    <span>{note.title}</span>
                </div>
                <div className="flex flex-row items-center gap-2 justify-between">
                    <NoteMenu noteId={note.id} dispatch={dispatch}/>
                </div>
                
            </div>
        )
    };

    return (
        <div className="flex flex-col p-6 w-full overflow-y-scroll scrollbar">
                <div className="flex flex-col gap-y-8 px-6 py-4 w-full rounded-lg border">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between">
                        <h2 className="font-bold text-2xl">Personal Notes</h2>
                        <ProjectMenu/>
                        </div>
                        {/* <p className="text-gray-500 tracking-wide text-justify">Personal Notes</p> */}
                    </div>
                   
                    {/* notes */}
                    <div className="w-full flex flex-col gap-y-4">
                        <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-4 items-center">
                                <h3 className="font-bold text-lg">Notes</h3>
                                <CirclePlus size={21} onClick={() => dispatch(openModal({modalType: "note"}))} className="cursor-pointer"/>
                            </div>
                            <Filter size={18}/>
                        </div>
                        {notes && notes.map(note => <ProjectNote note={note}/>)}
                    </div>
                </div>
        </div>
    )
};

export default Notes;