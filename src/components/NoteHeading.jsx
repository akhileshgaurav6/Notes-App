import React from 'react'
import { useNotes } from '../context/notes-context'
 
const NoteHeading = () => {
    const {notes, setNotes} = useNotes();
  return (
    <div className='border-b p-3 text-center'>
        <h1 className='font-bold'>Here is a list of notes</h1>
        <p>view all notes</p>
        <p className='font-bold'>Number of notes : {notes.length}</p>
    </div>
  )
}

export default NoteHeading