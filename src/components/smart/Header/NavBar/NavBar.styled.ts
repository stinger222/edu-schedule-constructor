import styled from "styled-components";

export const StyledNavBar = styled.div`
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
	max-width: 27em;

	& > div:nth-last-child(-n+2) {
		color: ${({theme}) => theme.colors.textSecondary};
	}
`