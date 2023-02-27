import styled from "styled-components";

export const StyledSelect = styled.div`
	margin-top: 2em;
	font-size: 2.2em;
	font-family: 'JetBrains Mono';

	display: flex;
	align-items: center;
	gap: 0.3em;

	outline-color: #0075FFBB;
	border: 0.04em solid #979fa7;
	border-radius: 0.25em;

	position: relative;
	padding: 0.3em 0.5em;

	& .value {
		font-size: 0.85em;
		font-weight: 300;
		
		flex-grow: 1;
		user-select: none;
		cursor: pointer;
	}

	& .btn-close {
		font-size: inherit;
		width: fit-content;
		cursor: pointer;
		
		color: rgb(134, 142, 150);
		background: transparent;
	}

	& .btn-close:hover {
		color: #333;
	}

	& .divider {
		width: 0.04em;
		background: rgb(134, 142, 150);
		border-radius: 1em;
		align-self: stretch;
	}

	& .caret {
		border: 0.2em solid transparent;
		border-top: 0.2em solid rgb(134, 142, 150);
		transform: translateY(35%);
		cursor: pointer;
	}

	& .options {
		display: none;

		position: absolute;
		top: 120%;
		left: 0;
		right: 0;

		padding: 0.3em;

		background: #FFFFFF;
		border-radius: 0.25em;
		border: 1px solid rgb(240, 242, 244);
		box-shadow: 
			rgb(0 0 0 / 5%) -0.0625em -0.0625em 0.1em,
			rgb(0 0 0 / 5%) 0 0.0625em 0.1875em,
			rgb(0 0 0 / 5%) 0.1em 0.625em 0.9375em -0.3125em,
			rgb(0 0 0 / 4%) 0.1em 0.4375em 0.4375em -0.3125em;
	}

	& .options.open {
		display: block;
	}

	& .option {
		margin-bottom: 0.2em;
		padding: 0.3em 0.5em;
		border-radius: 0.3em;
		font-size: 0.8em;
		cursor: pointer;
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