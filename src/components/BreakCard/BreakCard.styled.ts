import styled from 'styled-components';


const StyledBreakCard = styled.div`
	--card-ratio: 9;

	width: 25em;
	height: calc(25em / var(--card-ratio));
	margin: 0.7em 0;
	padding: 0.4em 1em;
	background: white;

	border-radius: 0.75em;
	box-shadow: 0px 4px 5px 2px rgb(0 0 0 / 22%);
	
	display: flex;
	justify-content: space-between;
	align-items: center;

	& svg {
		margin-right: 0.6em;
		height: 1.1em;
		width: 1.1em;
	}

	& span {
		margin-right: auto;
	}
`

export default StyledBreakCard