import styled from "styled-components";

export const StyledHeader = styled.header`
	height: 4.375em;
	margin: 2em 0.5em 5em 0.5em;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	& .future-burger-button {
		height: 3em;
		width: 3em;
		background: black;
	}
	
	& > h1.title {
		font-weight: 100;
		font-size: 1.7em;
		user-select: none;
	}
`