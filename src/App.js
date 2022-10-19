import GlobalStyles from './globalStyles'
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import TransactionsList from './components/TransactionsList'

function App() {
	const data = localStorage.getItem('transactions')
	const [transactionsList, setTransactionsList] = useState(
		data ? JSON.parse(data) : []
	)
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const amountIncome = transactionsList
			.filter((item) => !item.isExpense)
			.map((transaction) => Number(transaction.amount))

		console.log('amount income: ', amountIncome)

		const amountExpense = transactionsList
			.filter((item) => item.isExpense)
			.map((transaction) => Number(transaction.amount))

		console.log('amount Expense: ', amountExpense)

		const incomeTotal = amountIncome
			.reduce((acc, curr) => acc + curr, 0)
			.toFixed(2)
		const expenseTotal = amountExpense
			.reduce((acc, curr) => acc + curr, 0)
			.toFixed(2)

		const total = Math.abs(incomeTotal - expenseTotal).toFixed(2)

		setIncome(`R$ ${Number(incomeTotal)}`)
		setExpense(`R$ ${Number(expenseTotal)}`)
		setTotal(
			`${Number(incomeTotal) < Number(expenseTotal) ? '-' : ''}R$ ${Number(
				total
			)}`
		)
		console.log('income is: ', income)
		console.log('expense is: ', expense)
		console.log('total is: ', total)
	}, [transactionsList])

	function handleAdd(transaction) {
		const newTransactionsList = [...transactionsList, transaction]
		setTransactionsList(newTransactionsList)

		localStorage.setItem('transactions', JSON.stringify(newTransactionsList))
		console.log('local is ', transaction)
	}

	return (
		<>
			<GlobalStyles />
			<Header />
			<Resume income={income} expense={expense} total={total} />
			<Form handleAdd={handleAdd} list={transactionsList} />
			<TransactionsList list={transactionsList} />
		</>
	)
}

export default App
