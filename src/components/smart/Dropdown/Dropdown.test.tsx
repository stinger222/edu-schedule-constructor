
import { useContext } from "react"
import { StoreContext } from "../../.."
import { IUIStore } from "../../../core/types/store"
import { act, render, renderHook } from "../../../core/utils/test-utils"
import Dropdown from "./Dropdown"
import i18n from "../../../core/configs/i18next"

const t = i18n.t
let uiStore: IUIStore | null

const wait = (ms: number = 0) => (
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
)

describe("Testing Dropdown component", () => {

	beforeEach(() => {
		uiStore = renderHook(() => useContext(StoreContext)).result.current.uiStore
	})

	afterEach(() => {
		uiStore = null
	})

	it("Tests that Dropdown's 'main' view rendered properly", () => {
		const screen = render(<Dropdown />)
    expect(uiStore?.isDropdownOpen).toBe(false)
    
		act(() => {
			uiStore?.toggleDropdown(true)
		})

    expect(uiStore?.activeDropdownMenu).toBe("main")
		
    const anchors = screen.getAllByText((content, element: HTMLElement) => {
      return element.tagName.toLowerCase() === "a"
    })
    expect(anchors).toHaveLength(3)

    const hrefs = anchors.map(a => a.getAttribute("href"))
    expect(hrefs.sort()).toEqual(["#/rings", "#/lessons", "#/composed"].sort())

    const settingsButton = screen.getByText(t("dropdown.main.settings"))
    expect(settingsButton).not.toBe(null)
	})

  it("Tests that Dropdown's 'settings' view rendered properly", () => {
		const screen = render(<Dropdown />)
    
		act(() => {
      uiStore!.activeDropdownMenu = "settings"
      expect(uiStore?.activeDropdownMenu).toBe("settings")
			uiStore?.toggleDropdown(true)
		})

    const selects = screen.container.getElementsByClassName("mantine-Select-root")
    
    expect(selects.length).toBeGreaterThanOrEqual(2)

    const backButton = screen.getByText(t("dropdown.settings.back"))
    expect(backButton).not.toBe(null)
	})

  it("Tests that Dropdown views can be changed", async () => {
		const screen = render(<Dropdown />)
    
		act(() => {
			uiStore?.toggleDropdown(true)
		})

    const settingsButton = screen.getByText(t("dropdown.main.settings"))
    settingsButton.click()
    expect(uiStore?.activeDropdownMenu).toBe("settings")
    await wait(200)

    const selects = screen.container.getElementsByClassName("mantine-Select-root")
    expect(selects.length).toBeGreaterThanOrEqual(2)

    const backButton = screen.getByText(t("dropdown.settings.back"))
    backButton.click()
    expect(uiStore?.activeDropdownMenu).toBe("main")
    await wait(200)
    expect(screen.findByText(t("dropdown.main.title"))).not.toBe(null)
	})

  it.todo("Tests that language change feature works")
  it.todo("Tests that theme change feature works")
})
