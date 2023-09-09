import styled from "styled-components"

export const StyledTimeRange = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 1em;

	& .divider .label {
		font-size: 1.3em;
		font-weight: 200;
	}

	& .line {
		height: 0.15em;
		width: 100%;
		background: ${({theme}) => theme.text.primary};
		border-radius: 1em;
		margin-top: 1em;
		transform: translateY(-0.5em);
	}
`