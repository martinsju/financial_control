import styled from 'styled-components'

export const List = styled.li`
	display: flex;
	justify-content: space-between;
	gap: 15px;
	list-style: none;
`

export const Label = styled.label`
	width: ${(props) => (props.width ? props.width : '100%')};
	color: ${(props) => (props.color ? props.color : '')};
	font-weight: 400;
	font-size: 16px;
	display: flex;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'start'};
	align-items: center;

	svg {
		width: 18px;
		height: 18px;
	}
`
