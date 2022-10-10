import styled from 'styled-components';

export const StyledLessonCard = styled.div`
	--card-ratio: 3.725;

	width: 25em;
	height: calc(25em / var(--card-ratio));
	margin: 0 auto;
	padding: 0.4em 0.7em;

	background: red;
	border-radius: 0.75em;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .card_header {
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