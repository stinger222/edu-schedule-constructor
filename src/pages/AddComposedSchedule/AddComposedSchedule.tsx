import { useState } from "react"
import { weekDaysRus_full } from "../../core/constants/constants"
import { StyledAddComposedSchedule } from "./AddComposedSchedule.styled"

import Container from "../../components/containers/Container/Container"
import ComposeDay from "../../components/smart/ComposeDay/ComposeDay"
import GhostButton from "../../components/ui/GhostButton/GhostButton"

const AddComposedSchedule = () => {
	const [formsCount, setFormsCount] = useState<number>(1)

	return (
		<Container>
			<StyledAddComposedSchedule>

				{new Array(formsCount).fill(0).map((_, index) => (
					<ComposeDay key={index} dayIndex={index} />
				))}

				{formsCount < 5 && <>
					<h2>{weekDaysRus_full[formsCount]}:</h2>
					<GhostButton
						onClick={() => setFormsCount(prev => prev+1)}
					>
						{/* There is handy tool in js for handling this word ending problem btw... */}
						Заполнить расписание на {weekDaysRus_full[formsCount].toLocaleLowerCase()}
						<br/>
						<span className="plus">+</span>
					</GhostButton>
				</>}
	
			</StyledAddComposedSchedule>
		</Container>
	)
}

export default AddComposedSchedule
