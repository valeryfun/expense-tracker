import React from 'react'

export const AddTransaction = () => {
	return (
		<>
			<h3>Add Transaction</h3>
			<form>
				<div className='form-control'>
					<label htmlFor='text'>Description</label>
					<input type='text' placeholder='Enter description' />
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input type='number' placeholder='Enter amount' />
				</div>
				<button className='btn'>+ Add Transaction</button>
			</form>
		</>
	)
}
