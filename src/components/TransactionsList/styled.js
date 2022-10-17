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
	justify-content: space-between;
	box-sizing: border-box;
	padding: 15px 15px;
	gap: 60px;

	@media (max-width: 750px) {
		display: block;
	}
`

export const Section = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const Label = styled.label`
	font-weight: 700;
	font-size: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`
