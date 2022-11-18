import styled from 'styled-components';

export const StyledRingSchdeuleRange = styled.div`
	display: grid;
	grid-template-columns: 5.3em 6.5em 5.3em;
	justify-content: center;
  margin-bottom: 0.8em;

	& input {
		padding-left: 0.5em
	}

	& .from {
		grid-column: 1 / 2;
	}
	
	& .to {
		grid-column: -2 / -1;
	}
	
	&  h2 {
		grid-column: 2 / 3;
		text-align: center;
		font-size: 0.8em;
		font-weight: 500;
		line-height: 1.7em;
		margin-inline: 1.5em;
		margin-top: 0.7em;
		border-bottom: 0.12em solid #d5d5d5;
	}
`