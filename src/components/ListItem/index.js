import * as C from './styled.js'
import {
	FaTrash,
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown
} from 'react-icons/fa'

import React from 'react'

function ListItem({ item, onDelete }) {
	return (
		<C.List>
			<C.Label>{item.description}</C.Label>
			<C.Label>R${item.amount}</C.Label>
			<C.Label width='50%' justifyContent='center'>
				{item.isExpense ? (
					<FaRegArrowAltCircleUp color='red' />
				) : (
					<FaRegArrowAltCircleDown color='green' />
				)}
			</C.Label>
			<C.Label width='10%' justifyContent='center'>
				<FaTrash onClick={() => onDelete(item.id)} />
			</C.Label>
		</C.List>
	)
}

export default ListItem
