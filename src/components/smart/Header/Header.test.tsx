
import { render } from "../../../core/utils/test-utils"
import Header from "./Header"

describe("Rendering different valiants of Header", () => {
	it("Renders Header with NavBar and BurgerButton", () => {
		render(
			<Header>
				<Header.NavBar />
				<Header.BurgerButton />
			</Header>
		)
	})

	it("Renders Header with NavHome button, title and BurgerButton", () => {
		render(
			<Header>
				<Header.NavHome/>
				<h1> Some title </h1>
				<Header.BurgerButton/>
			</Header>
		)
	})
})