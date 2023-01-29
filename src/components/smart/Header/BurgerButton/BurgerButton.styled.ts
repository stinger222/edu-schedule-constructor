import styled from "styled-components";

export const StyledBurgerButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 1.2em;
	width: 2.6em;
	margin-left: 2em;

	cursor: pointer;

	& .burger-line {
		height: 0;
		box-shadow: 0 0.5px 0 0.08em black;
		background: black;
	}
`