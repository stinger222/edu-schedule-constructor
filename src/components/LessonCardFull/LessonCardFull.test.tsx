import { render, screen } from "@testing-library/react"
import LessonCard from "./LessonCardFull"


it('Renders LessonCard without crashing', () => {
	render(<LessonCard 
		cabinet="123т"
		startTime="10:00"
		endTime="11:00"
		index={1}
		lessonName="Название пары"
		teacherName="Имя препода"
	/>)
	
	expect(screen.getByText("1 пара 10:00 — 11:00")).toBeInTheDocument()
	expect(screen.getByText("каб. 123т")).toBeInTheDocument()
	expect(screen.getByText("Название пары")).toBeInTheDocument()
	expect(screen.getByText("Имя препода")).toBeInTheDocument()
})


