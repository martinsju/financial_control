import React from 'react'
import ResumeItem from '../ResumeItem/index.js'
import * as C from './styles.js'
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaDollarSign
} from 'react-icons/fa'

function Resume({ income, expense, total }) {
	return (
		<C.Container>
			<ResumeItem
				title='Income'
				Icon={FaRegArrowAltCircleDown}
				value={income}
			/>
			<ResumeItem
				title='Expense'
				Icon={FaRegArrowAltCircleUp}
				value={expense}
			/>
			<ResumeItem title='Total' Icon={FaDollarSign} value={total} />
		</C.Container>
	)
}

export default Resume
