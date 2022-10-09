import styled from 'styled-components';

export const StyledHeader = styled.header`
	font-size: 0.875em;
	max-width: 400px;
	margin: 1.5em auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 800px) {
		& {
			font-size: 1.1em;
			max-width: 530px;
		}

		& button:nth-child(2) {
			margin-left: 0.6em;
		}
		& button:nth-last-child(2) {
			margin-right: 0.6em;
		}
	}
`