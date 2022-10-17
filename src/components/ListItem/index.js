import * as C from './styled.js'

import React from 'react'

function ListItem(props) {
	return <C.List>{props.children}</C.List>
}

export default ListItem
