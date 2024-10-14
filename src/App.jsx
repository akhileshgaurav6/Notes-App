
import './App.css'
import AddNotes from './components/AddNotes'
import { Toaster } from 'react-hot-toast'
import ViewNotes from './components/ViewNotes'
import { NoteProvider } from './context/notes-context'
import NoteHeading from './components/NoteHeading'
// import './test.css'

function App() {
  

  return (
    
    <div className='p-5'>
      <Toaster />
      <NoteProvider>
        {/* <NoteHeading /> */}
         
        <ViewNotes />
        <AddNotes />
      </NoteProvider>
    </div>
  );

}

export default App
