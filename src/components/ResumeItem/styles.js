import styled from 'styled-components'

export const Container = styled.div`
	color: #080812;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fafafa;
	border-radius: 5px;
	padding: 10px 15px;
	width: 30%;

	@media (max-width: 750px) {
		p {
			font-size: 12px;
		}

		span {
			font-size: 20px;
		}

		svg {
			display: none;
		}
	}
`
export const Title = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 10px;
	gap: 10px;

	svg {
		width: 25px;
		height: 25px;
	}
`

export const HeaderTitle = styled.p`
	font-size: 20px;
`

export const Total = styled.span`
	font-size: 30px;
	font-weight: bold;
`
