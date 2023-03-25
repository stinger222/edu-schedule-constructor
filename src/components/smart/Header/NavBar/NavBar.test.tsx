import { render, screen } from "../../../../core/utils/test-utils"
import NavBar from "./NavBar"


describe('Testing NavBar component', () => {
	it('Checks that correct day with correct date is selected', () => {
		const { container } = render(
			<NavBar />
		)
		
		expect(screen.getByText('Пн')).toBeInTheDocument()
		expect(screen.getByText('Вт')).toBeInTheDocument()
		expect(screen.getByText('Ср')).toBeInTheDocument()
		expect(screen.getByText('Чт')).toBeInTheDocument()
		expect(screen.getByText('Пт')).toBeInTheDocument()
		expect(screen.getByText('Сб')).toBeInTheDocument()
		expect(screen.getByText('Вс')).toBeInTheDocument()
		
		const selectedDays = container.getElementsByClassName('selected')
		expect(selectedDays.length).toBe(1)
		expect(selectedDays[0]
			.getElementsByClassName('day')[0].textContent)
			.toBe(new Date().getDate().toString()
		)
	})
})

