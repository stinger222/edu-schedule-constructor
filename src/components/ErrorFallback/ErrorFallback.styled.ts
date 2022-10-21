import styled from 'styled-components';

export const StyledErrorFallback: any = {}

StyledErrorFallback.Warning = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 1.1em;

	width: 22em;
	height: fit-content;
	margin-inline: auto;

	& .icon svg {
		height: 1.8em;
		width: 1.8em;
		margin-bottom: 0.5em;
	}

	& .message {
		border: 0.13em solid #FFB906;
		border-radius: 1em;
		color: #FFB906;

		padding: 0.5em;
		text-align: center;
		font-weight: 500;
		font-size: 1.1em;
		letter-spacing: 0.02em;
	}
`

StyledErrorFallback.Error = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 1.1em;

	width: 22em;
	height: fit-content;
	margin-inline: auto;

	& .icon svg {
		height: 1.8em;
		width: 1.8em;
		margin-bottom: 0.5em;
	}

	& .message {
		border: 0.13em solid #FF6726;
		border-radius: 1em;
		color: #FF6726;

		padding: 0.5em;
		text-align: center;
		font-weight: 500;
		font-size: 1.1em;
		letter-spacing: 0.02em;
	}
`

StyledErrorFallback.Message = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 1.1em;

	width: 22em;
	height: fit-content;
	margin-inline: auto;


	& .message {
		color: black;
		text-align: center;
		font-weight: 500;
		font-size: 1.1em;
		letter-spacing: 0.02em;
	}
`