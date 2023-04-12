import { fireEvent, render, screen, renderHook, act } from "../../../../core/utils/test-utils"
import { StoreContext } from "../../../.."
import { useContext } from "react"

import Dropdown from "../../Dropdown/Dropdown"
import BurgerButton from "./BurgerButton"

describe("Testing BurgerButton component", () => {
	it("Renders BurgerButton", () => {
		render(<BurgerButton />)
	})

	it("Tests if dropdown appears on click", () => {
		const { uiStore } = renderHook(() => useContext(StoreContext)).result.current
		const { container } = render(<>
			<BurgerButton />
			<Dropdown />
		</>)

		expect(screen.queryByText("Меню")).toBe(null)
		expect(uiStore.isDropdownOpen).toBe(false)
		
		act(() => {
			fireEvent.click(container.children[0])
			fireEvent.click(container.children[0])
		})
		expect(screen.queryByText("Меню")).toBe(null)
		expect(uiStore.isDropdownOpen).toBe(false)

		act(() => {
			fireEvent.click(container.children[0])
		})
		expect(screen.queryByText("Меню")).not.toBe(null)
		expect(uiStore.isDropdownOpen).toBe(true)
	})
})