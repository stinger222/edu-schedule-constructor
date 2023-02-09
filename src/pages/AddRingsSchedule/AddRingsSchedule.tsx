import Icon from "../../components/ordinary/Icon/Icon"
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import TimeRange from "../../components/ordinary/TimeRange/TimeRange"
import Container from "../../components/containers/Container/Container"
import { StyledAddRingsSchedule } from "./AddRingsSchedule.styled"
import { useState } from "react"

const AddRingsSchedule = () => {
	const [rangesAmmount, setRangesAmmount] = useState<number>(1)

	const appendRange = () => {
		setRangesAmmount(prev => Math.min(prev + 1, 9))
	}

	return (
		<Container>
			<StyledAddRingsSchedule>
				<Header>
					<Header.NavHome/>
					<h1>Добавить расписание звонков</h1>
					<Header.BurgerButton/>
				</Header>

				{
					new Array(rangesAmmount).fill(0).map((_, index) => (
						<TimeRange index={index + 1} key={index}/>
					))
				}
				
				{
					rangesAmmount < 9
						? 
							<Button className="append-range" onClick={appendRange}>
								<Icon fill="white" name="Plus"/>
							</Button>
						:
							<div style={{textAlign: 'center'}}>А ой)))) 👉👈</div>
				}

				<Button className="submit">Готово</Button>

			</StyledAddRingsSchedule>
		</Container>
	)
}

export default AddRingsSchedule
