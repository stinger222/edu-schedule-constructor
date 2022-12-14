import styled from "styled-components";

export const StyledBurgerButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 1.6em;
	width: 2.6em;
	margin-left: 2em;

	cursor: pointer;

	& .burger-line {
		height: 0.25em;
		border-radius: 1em;
		background: black;
	}
`