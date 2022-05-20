import { useDispatch } from "react-redux";
import { createNote } from '../reducers/noteReducer'
import noteService from '../services/notes'

const NewNote = () => {
	const dispatch = useDispatch()

	const addNote = async evt => {
    	evt.preventDefault()
    	const content = evt.target.note.value
    	evt.target.note.value = ''
		const newNote = await noteService.createNew(content)
    	dispatch(createNote(newNote))
  	}

	return (
		<form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
	)
}

export default NewNote