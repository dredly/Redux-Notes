import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'The app state is in redux store',
    important: false,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'State changes are made with actions',
    important: false,
    id: 2
  }
})

const App = () => (
  <div>
    <ul>
      {store.getState().map(note => 
        <li key={note.id}>
          {note.content} <strong>{note.important ? 'important' : ''}</strong>
        </li>
      )}
    </ul>
  </div>
)

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}

renderApp()
store.subscribe(renderApp)