import styled from "styled-components";

export const StyledHeader = styled.header`
	height: 70px;
	max-width: 600px;
	margin: 2em auto 5em auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border: 1px solid black;

	& .future-burger-button {
		height: 3em;
		width: 3em;
		background: black;
	}
`