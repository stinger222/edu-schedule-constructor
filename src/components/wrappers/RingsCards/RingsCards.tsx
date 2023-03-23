import RingCard from "../../ordinary/RingsCard/RingsCard"
import { StyledRingsCards } from "./RingsCards.styled"

interface IProps {
	// This is a wrapper, so some raw data will be passed here
}

const RingsCards: React.FC<IProps> = ({ }) => {
	return (
		<StyledRingsCards>
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
		</StyledRingsCards>
	)
}

export default RingsCards
