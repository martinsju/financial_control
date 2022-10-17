import React, { useState } from 'react'
import * as C from './styles.js'

function Form() {
	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const [isExpense, setExpense] = useState(false)

	function handleSave() {
		if (!description || !amount) {
			alert('Description and value must be written')
			return
		} else if (amount < 1) {
			alert('Value must be a positive number')
			return
		}
	}

	return (
		<C.Container>
			<C.InputContent>
				<C.Label>Description</C.Label>
				<C.Input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</C.InputContent>
			<C.InputContent>
				<C.Label>Value</C.Label>
				<C.Input
					value={amount}
					type='number'
					onChange={(e) => setAmount(e.target.value)}
				/>
			</C.InputContent>
			<C.RadioGroup>
				<C.RadioItem>
					<C.Input
						type='radio'
						id='rIncome'
						name='group1'
						onChange={() => setExpense(!isExpense)}
						defaultChecked
					/>
					<C.Label htmlFor='rIncome'>Income</C.Label>
				</C.RadioItem>
				<C.RadioItem>
					<C.Input
						type='radio'
						id='rExpenses'
						name='group1'
						onChange={() => setExpense(!isExpense)}
					/>
					<C.Label htmlFor='rExpenses'>Expense</C.Label>
				</C.RadioItem>
			</C.RadioGroup>
			<C.Button onClick={handleSave}>Add Transaction</C.Button>
		</C.Container>
	)
}

export default Form
