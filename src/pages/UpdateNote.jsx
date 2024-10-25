import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNotes } from '../context/notes-context';

const UpdateNote = () => {
    const { notes, setNotes } = useNotes();
    const { noteId } = useParams();
    const { form, setForm} = useState({
        id: "",
        title: "",
    });

  return (
    <div>
        <h1 className='text-4xl text-center'>Update Note {noteId}</h1>
        {/* <input type='text' value={form.id} /> */}
        {/* assignmeent */}
        {/* create form here */}
        {/* values: two way data binding: initaial put */}
        {/* button ko submit krake Array ke object me submit kr dena hai */}
    </div>
  )
}

export default UpdateNote