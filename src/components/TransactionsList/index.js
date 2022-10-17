import React from 'react'
import * as C from './styled.js'
import ListItem from '../ListItem/index.js'

function TransactionsList({ list }) {
	return (
		<C.Container>
			<C.Section>
				<C.Label>Income</C.Label>
				{list
					.filter((item) => !item.isExpense)
					.map((item) => (
						<ListItem key={item.id}>
							{item.description} R${item.amount}
						</ListItem>
					))}
			</C.Section>

			<C.Section>
				<C.Label>expense</C.Label>
				{list
					.filter((item) => item.isExpense)
					.map((item) => (
						<ListItem key={item.id}>
							{item.description} R${item.amount}
						</ListItem>
					))}
			</C.Section>
		</C.Container>
	)
}

export default TransactionsList
