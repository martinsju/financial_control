import React from 'react'
import ResumeItem from '../ResumeItem/index.js'
import * as C from './styles.js'
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaDollarSign
} from 'react-icons/fa'

function Resume() {
	return (
		<C.Container>
			<ResumeItem
				title='Received'
				Icon={FaRegArrowAltCircleDown}
				value='1000'
			/>
			<ResumeItem title='Withdrawn' Icon={FaRegArrowAltCircleUp} value='500' />
			<ResumeItem title='Total' Icon={FaDollarSign} value='500' />
		</C.Container>
	)
}

export default Resume
