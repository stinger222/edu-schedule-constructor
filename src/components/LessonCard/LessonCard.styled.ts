import styled from 'styled-components';

export const StyledLessonCard = styled.div`
	--card-ratio: 3.94;

	width: 24.5em;
	height: calc(24.5em / var(--card-ratio));
	margin: 0 auto;
	padding: 0.4em 0.7em;

	background: rgba(127, 164, 236, 0.15);
	border-radius: 0.75em;
	box-shadow: 0px 4px 6px 0px rgb(0 0 0 / 25%);

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .header {
		font-weight: 300;
		display: flex;
		justify-content: space-between;
	}

	& .lesson_name {
		font-size: 1.2em;
		margin-top: 0.5em;
		line-height: 1em;
	}

	& .teacher_name {
		font-weight: 400;
	}
`

export default StyledLessonCard