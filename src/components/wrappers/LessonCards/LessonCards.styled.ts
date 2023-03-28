import { animated } from '@react-spring/web'
import styled from "styled-components";

export const StyledLessonCards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-inline: 5em;
	
	& > * {
		margin-bottom: 1.5em;
		width: 100%;
	}

	& .lesson-card, & .animated-wrapper {
		width: 100%;
	}

	& a > * {
		width: 100%;
	}

	& .btn-ghost {
		font-size: 0.75em;
		height: 9em;
	}

	& .btn-ghost span {
		font-size: 1.9em;
	}

`