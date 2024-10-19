import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNotes } from '../context/notes-context';
const AddNotes = () => {

    const {notes, setNotes} = useNotes();

    const [status, setStatus] = useState([
        {
            id: -1,
            value: "Select your note status"
        },
        {
            id: 0,
            value: "New"
        },
        {
            id: 1,
            value: "InProgress"
        },
        {
            id: 2,
            value: "Completed"
        },
        {
            id: 3,
            value: "On Hold"
        },
        {
            id: 4,
            value: "Cancelled"
        },
        {
            id: 5,
            value: "Rejeted"
        },
        {
            id: 6,
            value: "Done"
        },
        
    ]);

    const [formData, setFormData] = useState({
        id: -1,
        title: "",
        content: "",
        statusId: -1,
        date: "",
        error: false,
        errorData: null,
    });

    function handleForm(event) {
        // default behaviour off kar dye hai submit ka
        event.preventDefault();
        // console.log(event);
        // console.log(event.target.title.value)
        // console.log(event.target.content.value)
        console.log(formData);
        //validations
        if(formData.title == ""){
            toast.error("Note title is required!!");
            return;
        }

        if(formData.content == ""){
            toast.error("Note content os required!!!");
            return;
        }

        toast.success("Submitted",{
            position: "top-center",
            icon: "👏",
        });

        console.log(formData);
        formData.id = Math.round(Math.random() * 1000000);
        setNotes([...notes, formData]);
    }

    //value change fn

    function valueChange(event) {
        setFormData(
           {
            ...formData,
            [event.target.name]: event.target.value,
           }
        );
    }

  return (
    <div className='flex justify-center flex-col items-center mt-10 md:mt-20'>
        <h1 className='text-3xl'>Add Notes</h1>
        <p>This is where you add notes</p>
        <p>This is where you delete notes</p>

        <form 
            noValidate
            onSubmit={handleForm} 
            className='w-full md:w-1/3 flex flex-col gap-3'
        >
        {/* title */}
        <div className='field_container'>
            <label 
                htmlFor="title"
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                Title
            </label>

            <input 
                type='text'
                id='title'
                name='title'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter note title here'
                onChange={valueChange}
                value={formData.title}
                required
            />
        </div>
        {/* content field */}
        <div className="field_container">
            
            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your note
            </label>
            <textarea 
                onChange={valueChange}
                name='content'
                id="content" 
                rows="4"
                value={formData.content} 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Write your notes here...">

            </textarea>

        </div>

        {/* status field */}

        <div className='field_container'>
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a note status</label>
            <select 
                name='statusId'
                id="status" 
                value={formData.statusId}
                onChange={valueChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                   
                
                {
                    status.map((stat) => (
                    <option disabled={stat.id == -1} key={stat.id} value={stat.id}>{stat.value}</option>)
                )
                }
            </select>
        </div>

        {/* date picker */}

    
        <div className='field_container'>
            <label 
                htmlFor="date"
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                Select Date
            </label>

            <input 
                value={formData.date}
                name='date'
                onChange={valueChange}
                type='date'
                id='date'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                
                required
            />
        </div>
        

        <div className='field_container flex justify-center'>
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add note
        </button>

        <button 
            type='button' 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={ ()=> {
                setFormData(
                    {
                        title: "",
                        content: "",
                        statusId: "",
                        date: "",
                    }
                );
            }}
        >
            Clear note
        </button>
        </div>
        </form>
        {
            // <h1>Notes Length : {notes.length}</h1>
            // JSON.stringify(formData)
        }
    </div>
  )
}

export default AddNotes