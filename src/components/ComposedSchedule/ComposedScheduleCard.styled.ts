import styled from "styled-components";


export const StyledComposedScheduleCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 4.5em;
	width: 91%;

	background: #FCECFB;
	box-shadow: 0px 0.1em 0.25em 0.05em rgb(0 0 0 / 20%);
	border-radius: 0.7em;

	padding: 0.5em;
	margin-inline: auto;
	margin-bottom: 0.7em;

	& .header {
		font-weight: 500;
		font-size: 1.1em;
	}

	& .days-wrapper {
		display: flex;
		justify-content: space-between;
	}

	& .day {
		padding: 0.05em 0.2em;

		background: #E8D3E6;
		border-radius: 0.3em;

		font-weight: 200;
		font-size: 0.95em;
		letter-spacing: 0.005em;
		word-spacing: -0.1em;
		text-shadow: 0.015em 0.015em black;
	}

	&.selected {
		box-shadow: #cfa4cc 0 0 0 0.13em;
		
	}

	&.selected:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		left: -1.2em;
		top: 50%;
		transform: translateY(-50%);

		border-style: solid;
		border-width: 0.35em 0 0.35em 0.7em;
		border-color: transparent transparent transparent #CCAAC9;
	}

	&.selected:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		right: -1.2em;
		top: 50%;
		transform: translateY(-50%);

		border-style: solid;
		border-width: 0.35em 0.7em 0.35em 0;
		border-color: transparent #CCAAC9 transparent transparent;
	}
`