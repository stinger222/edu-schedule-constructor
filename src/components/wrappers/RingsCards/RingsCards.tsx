import { Link } from "react-router-dom"
import RingCard from "../../ordinary/RingsCard/RingsCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledRingsCards } from "./RingsCards.styled"

interface IProps {
	// This is a wrapper, so some raw data will be passed here
}

const RingsCards: React.FC<IProps> = ({ }) => {
	return (
		<StyledRingsCards className="rings-cards">
			<RingCard
				start="08:00"
				end="10:00"
				length={4}
			/>

			<RingCard
				start="08:00"
				end="10:00"
				length={4}
			/>


			<RingCard
				start="08:00"
				end="10:00"
				length={4}
			/>

			<Link to="/add/rings">
				<GhostButton>Добавить расписание звонков <span className="plus">+</span></GhostButton>
			</Link>
		</StyledRingsCards>
	)
}

export default RingsCards
