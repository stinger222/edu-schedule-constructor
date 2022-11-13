import styled from "styled-components";

const StyledHeaderButton = styled.button`
	background: none;
	border: none;
	min-height: 1.6em;
	min-width: 1.6em;
	font-size: 1.4em;
	font-weight: 300;
	margin-inline: 0.2em;
	padding: 0.2em;

	&.selected {
		color: white;
		background: #0071ef;
		border-radius: 10em;
	}
`

export default StyledHeaderButton