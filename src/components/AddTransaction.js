import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext)
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)

	const onSubmit = e => {
		e.preventDefault()
		const newTransac = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount: +amount
		}
		addTransaction(newTransac)
	}

	return (
		<>
			<h3>Add Transaction</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Description</label>
					<input
						type='text'
						value={text}
						onChange={e => setText(e.target.value)}
						placeholder='Enter description'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						value={amount}
						onChange={e => setAmount(e.target.value)}
						placeholder='Enter amount'
					/>
				</div>
				<button className='btn'>+ Add Transaction</button>
			</form>
		</>
	)
}
