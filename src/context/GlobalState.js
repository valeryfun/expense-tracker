import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
	transactions: [
		{ id: 1, description: 'Coffee', amount: -5 },
		{ id: 2, description: 'Grocery', amount: -20 },
		{ id: 3, description: 'Salary', amount: 3598 },
		{ id: 4, description: 'Food', amount: -9 }
	]
}

// create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	return (
		<GlobalContext.Provider value={{ transactions: state.transactions }}>
			{children}
		</GlobalContext.Provider>
	)
}
