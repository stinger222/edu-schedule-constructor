import styled from 'styled-components';

export const StyledHeader = styled.header`
	font-size: 0.875em;
	max-width: 400px;
	margin-inline: auto;
	margin-block: 1.5em 2em;
	padding: 0 0.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 360px) {
		& {
			font-size: 3.88vw;
		}
	}

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