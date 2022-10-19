import React from 'react'
import * as C from './styled.js'
import ListItem from '../ListItem/index.js'

function TransactionsList({ list, setList }) {
	function onDelete(id) {
		console.log('deletando item ', id)
		const newList = list.filter((item) => item.id !== id)
		setList(newList)
		localStorage.setItem('transactions', JSON.stringify(newList))
	}

	return (
		<C.Container>
			<C.TitleSection>
				<C.Title>Description</C.Title>
				<C.Title>Value</C.Title>
				<C.Title width='50%' justifyContent='center'>
					Type
				</C.Title>
				<C.Title width='10%'></C.Title>
			</C.TitleSection>

			<C.ItemsSection>
				{list.map((item) => (
					<ListItem key={item.id} item={item} onDelete={onDelete}></ListItem>
				))}
			</C.ItemsSection>
		</C.Container>
	)
}

export default TransactionsList
