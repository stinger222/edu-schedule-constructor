import { formatNumber } from "../../../../core/utils/stringUtils"
import { render } from "../../../../core/utils/test-utils"
import NavBar from "./NavBar"


describe("Testing NavBar component", () => {
	it("Checks that correct day with correct date is selected", () => {
		const { container } = render(
			<NavBar />
		)
		
		const selectedDays = container.getElementsByClassName("selected")
		expect(selectedDays.length).toBe(1)
		expect(selectedDays[0]
			.getElementsByClassName("day")[0].textContent)
			.toBe(formatNumber(new Date().getDate()))
	})
})

