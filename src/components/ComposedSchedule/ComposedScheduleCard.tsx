import { useContext } from "react"
import { StoreContext } from "../.."
import { IComposedWeek } from "../../stores/interfaces"
import { StyledComposedScheduleCard } from "./ComposedScheduleCard.styled"

interface IProps {
	id: string,
	name: string,
	week: IComposedWeek,
	selected: boolean
}

const rusWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

const ComposedScheduleCard: React.FC<IProps> = ({ id, name, week, selected }) => {
	const { composedSchedulesStore } = useContext(StoreContext)
	
	return (
		<StyledComposedScheduleCard
			className={selected ? 'selected' : ''}
			onClick={() => composedSchedulesStore.selectSchedule(id)}
		>
			<div className="header">{ name }</div>
			<div className="days-wrapper">
				{
					Object.keys(week).map((key, index) => (
						<span className="day" key={index}>
							{rusWeekDays[index]} - {week[key].lesson_ids.length}
						</span>
					))
				}


			</div>
		</StyledComposedScheduleCard>
	)
}

export default ComposedScheduleCard
