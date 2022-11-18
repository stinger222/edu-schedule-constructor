import { useState } from "react"
import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import RingSchdeuleRange from "../../RingSchdeuleRange/RingSchdeuleRange"
import { StyledAddRingSchdeulesPage } from "./AddRingSchedule.styled"

const AddRingSchedule = () => {
  const [length, setLength] = useState(1)

	return <>
		<HeaderSecondary />
		<Container>
			<StyledAddRingSchdeulesPage>
        {[...Array(length)].map((_, index) => (
				  <RingSchdeuleRange index={index+1} key={index}/>
        ))}
        
        <button
          onClick={() => setLength(length+1)}
          className="add_button"
        >+</button>

			</StyledAddRingSchdeulesPage>
		</Container>
	</>
}

export default AddRingSchedule
