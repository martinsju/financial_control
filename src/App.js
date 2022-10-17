import GlobalStyles from './globalStyles'
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'
import { useEffect, useState } from 'react'

function App() {
	const data = localStorage.getItem('transactions')
	const [transactionsList, setTransactionsList] = useState(
		data ? JSON.parse(data) : []
	)
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const amountExpense = transactionsList
			.filter((item) => item.expense)
			.map((transaction) => Number(transaction.amount))

		const amountIncome = transactionsList
			.filter((item) => !item.expense)
			.map((transaction) => Number(transaction.amount))

		const expenseTotal = amountExpense
			.reduce((acc, curr) => acc + curr, 0)
			.toFixed(2)

		const incomeTotal = amountIncome
			.reduce((acc, curr) => acc + curr, 0)
			.toFixed(2)

		const total = Math.abs(incomeTotal - expenseTotal).toFixed(2)

		setIncome(`R$ ${incomeTotal}`)
		setExpense(`R$ ${expenseTotal}`)
		setTotal(
			`${Number(incomeTotal) < Number(expenseTotal) ? '-' : ''}R$ ${total}`
		)
	}, [transactionsList]) //

	return (
		<>
			<GlobalStyles />
			<Header />
			<Resume income={income} expense={expense} total={total} />
			<Form />
		</>
	)
}

export default App
