import { StyledLessonCard } from "./LessonCard.styled"

interface IProps {
	
}

const LessonCard: React.FC<IProps> = ({  }) => {
	return (
		<StyledLessonCard>
			<h1>Some really really really really reeeeeeally long name</h1>
			<footer>
				<span>Name Name Name Name Name Name</span>
				<span>101у</span>
			</footer>
		</StyledLessonCard>
	)
}

export default LessonCard
