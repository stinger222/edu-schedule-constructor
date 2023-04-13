import { act, render } from "../../../../core/utils/test-utils"
import NavHome from "./NavHome"

describe("Testing NavHome component", () => {
	it("Renders NavHome", () => {
		const { container } = render(<NavHome />)

		const ancors = container.getElementsByTagName("a")
		expect(ancors).toHaveLength(1)

	})

	it("Tests that clicking NavHome correctly affecting url", () => {
		const { container } = render(<NavHome />)

		window.location.hash = "#/something/something-else"
		expect(window.location.hash).toBe("#/something/something-else")

		const ancors = container.getElementsByTagName("a")
		act(() => {
			ancors[0].click()
		})
		expect(window.location.hash).toBe("#/")
	})
})