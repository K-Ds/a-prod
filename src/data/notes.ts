
const notes = [
    {
        id: "vf3264a9",
        title : "My Note Test", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project: "vf3264112"   
    },
    {
        id: "f1370679",
        title : "My Note Test", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project: "vf3264112"   
    }
]

export const fetchNotesDetails = (projectId:string) => {
    if(!projectId){
        throw new Error("No ID provided")
    }

    const data = notes.filter(note => note.project === projectId)

    if(!data) return []

    return data.filter(note => note !== undefined)
}