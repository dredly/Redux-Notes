import noteReducer from "./noteReducer";
import deepFreeze from "deep-freeze";

describe('noteReducer', () => {
	test('Returns new state with action NEW_NOTE', () => {
		const state = []
		const action = {
			type: 'notes/createNote',
			payload: 'the app state is in redux store'
		}

		deepFreeze(state)

		const newState = noteReducer(state, action)

		expect(newState).toHaveLength(1)
		expect(newState.map(s => s.content)).toContainEqual(action.payload)
	})

	test('Returns new state with action TOGGLE_IMPORTANCE', () => {
		const state = [
			{
				content: 'The app state is in redux store',
				important: true,
				id: 1
			},
			{
				content: 'State changes are made with actions',
				important: false,
				id: 2
			}
		]

		const action = {
			type: 'notes/toggleImportanceOf',
			payload: 2
		}

		deepFreeze(state)

		const newState = noteReducer(state, action)

		expect(newState).toHaveLength(2)
		expect(newState).toContainEqual(state[0])
		expect(newState).toContainEqual({
			content: 'State changes are made with actions',
			important: true,
			id: 2
		})
	})
})