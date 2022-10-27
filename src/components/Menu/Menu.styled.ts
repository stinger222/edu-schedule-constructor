import styled from "styled-components";

export const StyledMenu = styled.div`
	position: absolute;
	z-index: 5;
	top: 3.6em;
	right: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	height: fit-content;
	width: 18em;
	padding: 0.2em 0.5em 0.1em 0.5em;
	
	background: white;
	border: 0.12em solid #4AB3FF;
	border-radius: 1em;

	& h1 {
		margin-bottom: 0.5em;
		border-bottom: 2px solid #C1D6FF;
		width: 95%;
		line-height: 2em;
	}

	& .menu_button {
		color: white;
		font-size: 1.1em;
		font-weight: 600;
		text-decoration: none;
		text-shadow: 0.07em 0.07em 0.06em rgba(0, 0, 0, 0.4);

		width: 95%;
		padding: 0.35em .5em;
		margin-bottom: 0.3em;
		
		background: #0090F9;
		border-radius: 10em;
		box-shadow: 0 0.11em 0.22em rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
`