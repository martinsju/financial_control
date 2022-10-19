import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1120px;
	margin: 20px auto;
	width: 80%;
	background-color: #fafafa;
	color: #000;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 20px 25px;
	gap: 15px;

	@media (max-width: 750px) {
		display: block;
	}
`

export const Title = styled.h2`
	width: ${(props) => (props.width ? props.width : '100%')};
	font-weight: 700;
	font-size: 18px;
	display: flex;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'start'};
	padding-bottom: 5px;
`

export const TitleSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const ItemsSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 15px;
`
