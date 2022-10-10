import styled from 'styled-components';

export const StyledLessonCard = styled.div`
	--card-ratio: 3.725;

	width: 25em;
	height: calc(25em / var(--card-ratio));
	margin: 0 auto;
	padding: 0.4em 0.7em;

	background: rgba(127, 164, 236, 0.15);
	border-radius: 0.75em;
	box-shadow: 0px 4px 6px 2px rgb(0 0 0 / 25%);

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
		margin-top: 0.7em;
		line-height: 1em;
	}

	& .teacher_name {
		font-weight: 400;
	}
`

export default StyledLessonCard