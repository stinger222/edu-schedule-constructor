import { IRingSchedule } from "../../stores/interfaces"
import { StyledRingSceduleCard } from "./RingScheduleCard.styled"

interface IProps {
  schedule: IRingSchedule
}

const RingScheduleCard: React.FC<IProps> = ({ schedule }) => {
  return (
    <StyledRingSceduleCard>
      <div className="schedule_card">
        <h1 className="schedule_name">{schedule.name}</h1>
        <div className="schedule_desc">
          <div><span>Пар:</span><span>{schedule.rings.length}</span></div>
          <div><span>Начало:</span><span>{schedule.rings[0].start}</span></div>
          <div><span>Конец:</span><span>{schedule.rings[schedule.rings.length - 1].end}</span></div>
        </div>
      </div>
    </StyledRingSceduleCard>
  )
}

export default RingScheduleCard