import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNotes } from '../context/notes-context'


const NoteList = ({ note }) => {


  const { notes, setNotes } = useNotes()

  function deleteNote(event, noteId) {
    console.log(noteId)
    const newNoteList = notes.filter((note) => note.id!=noteId)
    setNotes(newNoteList);
  }

  return (
    <div className='p-5 flex mt-4 flex-col gap-2 my-3 border w-full md:w-2/3 mx-auto rounded shadow bg-gray-600'>
    <h1 className='text-3xl font-semibold'>{note.title}</h1>
    {/* <p>{note.content}</p> */}
    {/* <p>status : {note.statusId}</p> */}
    <p>date: {note.date}</p>
    <div className='flex gap-2'>
        <NavLink to={`/note/${note.id}/${note.title}`}>
            <button className='px-3 py-1 bg-green-500 text-white rounded hover:bg-green-900'>View</button>
        </NavLink>
        <NavLink to={`/note/update/${note.id}`}>
            <button className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-900'>Update</button>
        </NavLink>
        <button onClick={()=>{
          deleteNote(event, note.id)
        }} className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-900'>Delete</button>
    </div>
</div>
  )
}

export default NoteList