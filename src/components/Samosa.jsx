import { data } from 'autoprefixer';
import React, { useCallback, useEffect, useState } from 'react'

const Samosa = () => {

    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);

    // useEffect(useCallback function  and array of dependcies)

    useEffect(
        () => {
            //task//funcctionality
            console.log("Samosa Created");
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
            });
            return () => {
                // cleanup task// functionality
                console.log("Samosa Destroyed");
            }
        },
        [active, count] //array of dependencies
    );

    // []: empty array means it will run only once when component mounts.
    // [active]: if we pass any value in the dependency array , it will re-run every time that value changes.

  return (
    <div className='p-10 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Lets Eat Samosa</h1>
        <p>I like Samosa so much</p>
        <p>Price of samaosa is 10 per piece</p>
        <div className="flex justify-center">
            <button onClick={() => {
                setActive(!active);
            }} 
            className='bg-gray-800 px-3 py-2 rounded'>
                Ok
            </button>

            <button className='bg-green-500 px-3 py-2 mx-5 rounded' onClick={() => {
                setCount(count+1);
            }}>{count}</button>
            
        </div>
        <h1 className="text-4xl">{active? 'Active':"Inactive"}</h1>
    </div>
  )
}

export default Samosa