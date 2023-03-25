import styled from "styled-components";

export const StyledBurgerButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	cursor: pointer;
	user-select: none;
	
	height: 1.2em;
	width: 2.6em;
	

	& .burger-line {
		height: 0;
		box-shadow: 0 0.5px 0 0.08em ${({theme}) => theme.colors.secondary};;
		background: black;
	}
`