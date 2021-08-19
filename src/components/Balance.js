import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
	const { transactions } = useContext(GlobalContext)

	const amount = transactions.map(transaction => transaction.amount)
	const totalAmount = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

	return (
		<>
			<h4>Your balance</h4>
			<h1 id='balance'>$ {totalAmount}</h1>
		</>
	)
}
