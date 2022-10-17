import React from 'react'
import * as C from './styles.js'

function ResumeItem({ title, Icon, value }) {
	return (
		<C.Container>
			<C.Title>
				{title}
				<Icon />
			</C.Title>
			<C.Total>{value}</C.Total>
		</C.Container>
	)
}

export default ResumeItem
