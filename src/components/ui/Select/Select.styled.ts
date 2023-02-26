import styled from "styled-components";

export const StyledSelect = styled.div`
	margin-top: 2em;
	font-size: 1.8em;
	font-family: 'JetBrains Mono';

	display: flex;
	align-items: center;
	gap: 0.3em;

	border: 0.04em solid #ced4da;
	border-radius: 0.25em;

	position: relative;
	padding: 0.3em 0.5em;

	& .value {
		font-size: 0.85em;
		font-weight: 300;
		flex-grow: 1;
	}

	& .btn-close {
		color: rgb(134, 142, 150);
		background: transparent;
		font-size: inherit;
		width: fit-content;
		cursor: pointer;
	}

	& .btn-close:hover {
		color: #333;
	}

	& .divider {
		border-radius: 1em;
		width: 1px;
		background: rgb(134, 142, 150);
		align-self: stretch;
	}

	& .caret {
		border: 0.2em solid transparent;
		border-top: 0.2em solid rgb(134, 142, 150);
		height: 0;
		transform: translateY(35%);
		cursor: pointer;
	}

	& .options {
		position: absolute;
		top: 120%;
		left: 0;
		right: 0;

		padding: 0.3em;

		background: #FFFFFF;
		border-radius: 0.25em;
		border: 1px solid rgb(240, 242, 244);
		/* border: 1px solid red; */
		box-shadow: 
			rgb(0 0 0 / 5%) -0.0625em -0.0625em 0.1em,
			rgb(0 0 0 / 5%) 0 0.0625em 0.1875em,
			rgb(0 0 0 / 5%) 0.1em 0.625em 0.9375em -0.3125em,
			rgb(0 0 0 / 4%) 0.1em 0.4375em 0.4375em -0.3125em;
	}

	& .option {
		padding: 0.3em 0.5em;
		border-radius: 0.3em;
		font-size: 0.8em;
		margin-bottom: 0.2em;
	}
	
	& .option:hover {
		background: rgb(240, 242, 244);
	}

	& .option.selected {
		background: #0075FFDD;
		color: white;
		font-weight: 200;
	}
	


`