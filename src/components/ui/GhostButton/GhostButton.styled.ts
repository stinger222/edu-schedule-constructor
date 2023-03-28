import styled from "styled-components";

export const StyledGhostButton = styled.button`
	background: transparent;
	position: relative;

	font-size: 1em;
	font-weight: 400;
	letter-spacing: 0.05em;
	color: ${({theme}) => theme.borders.dashed};

	display: flex;
	align-items: center;
	justify-content: center;

	height: fit-content;
	width: fit-content;

	margin-inline: auto;
	padding-inline: 1em;

	border-image-slice: 130 !important;
	border-image-width: 3.125em !important;
	border-image-repeat: round round  !important;
	border-image-source: url(${require('../../../assets/icons/dashed-border.png')})  !important;
	border-style: solid !important; 

	& > span {
		font-size: 1.3em;
		vertical-align: middle;
	}
	
	&  span.plus {
		vertical-align: middle;
		display: inline-block;
		font-size: 2em;
		font-weight: 100;
		transform: translateY(-4%);
		height: 1.5em;
		line-height: 1.5em;
	}
`