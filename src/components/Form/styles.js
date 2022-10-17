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
	gap: 10px;

	@media (max-width: 750px) {
		display: block;
	}
`

export const InputContent = styled.div`
	width: 100%;
	display: inline-block;
	box-sizing: border-box;

	@media (max-width: 750px) {
		min-width: 100%;
		margin-bottom: 15px;
	}
`

export const Label = styled.label`
	font-size: 16px;
`

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
	outline: none;
	border-radius: 5px;
	padding: 5px 10px;
	margin-top: 5px;
	font-size: 15px;
	border: 1px solid #ccc;
`
export const RadioGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	@media (max-width: 750px) {
		flex-direction: row;
		justify-content: flex-start;
		max-width: 100%;
		margin-bottom: 15px;
		gap: 15px;
	}
`

export const RadioItem = styled.div`
	display: flex;
	align-items: center;

	input {
		accent-color: black;
		margin: 5px;
	}
`

export const Button = styled.button`
	width: 40%;
	font-size: 16px;
	font-family: 'Montserrat Alternates', sans-serif;
	padding: 5px 15px;
	margin-left: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	color: #fafafa;
	background-color: #292939;

	@media (max-width: 750px) {
		width: 100%;
		height: 40px;
		margin: 0;
	}
`
