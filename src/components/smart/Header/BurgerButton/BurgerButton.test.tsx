import { useContext } from "react"
import { StoreContext } from "../../../.."
import i18n from "../../../../core/configs/i18next"
import { act, fireEvent, render, renderHook, screen } from "../../../../core/utils/test-utils"
import Dropdown from "../../Dropdown/Dropdown"
import BurgerButton from "./BurgerButton"

const t = i18n.t

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

		expect(screen.queryByText(t("dropdown.menu"))).toBe(null)
		expect(uiStore.isDropdownOpen).toBe(false)
		
		act(() => {
			fireEvent.click(container.children[0])
			fireEvent.click(container.children[0])
		})
		expect(screen.queryByText(t("dropdown.menu"))).toBe(null)
		expect(uiStore.isDropdownOpen).toBe(false)

		act(() => {
			fireEvent.click(container.children[0])
		})
		expect(screen.queryByText(t("dropdown.main.title"))).not.toBe(null)
		expect(uiStore.isDropdownOpen).toBe(true)
	})
})