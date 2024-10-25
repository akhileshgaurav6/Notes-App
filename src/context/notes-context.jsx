import { createContext, useContext, useState  } from "react";
import { noteLocalFun } from "../helper/helper";

// step 1.create context
// Context: A way to pass a data through the component tree without having no props manually at every level.
const NoteContext = createContext();

//step 2: provite Context
//Provider -> normal component that provides the value to the consumer.

export const NoteProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "This is first app",
            content: "Example of contextAPI",
            statusId: 1,
            date: "today",
        },
        {
            id: 2,
            title: "Have to learn Java",
            content: "Java is a beautiful language",
            statusId: 1,
            date: "today",
        },
    ]);
    
    // kaun sa data hume provide krna hai
    return(
        <NoteContext.Provider 
            value={{
                 notes,
                 setNotes,
                 isAuthenticated,
                 setIsAuthenticated,
            }}
        >
            {children}
        </NoteContext.Provider>
    )

}
// step 3: call karke aap use kar paoge context ke through data 
export const useNotes = () => {
    // have to complete
    return useContext(NoteContext);
}