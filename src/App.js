import React, {useState} from 'react'
import Note from './Components/Note'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState(
      '... new note'
    )

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }
    const addNote = (event) => {
      event.preventDefault()
        const noteObject = {
          id: notes.length +1,
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() < 0.5
        }
        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    return (
      <div>
        <h1>Notes</h1>
        <ul> 
              {notes.map(note => 
              <Note key={note.id} content={note.content}/>
              )}
        </ul>
        <form onSubmit={addNote}>
                <input value={newNote}
                  onChange={handleNoteChange}>
                </input>
                <button type="submit"> save </button>
        </form>
      </div>
    )
  }

export default App;