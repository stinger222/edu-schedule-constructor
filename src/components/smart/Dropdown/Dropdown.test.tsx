
import { useContext } from "react"
import { StoreContext } from "../../.."
import { IUIStore } from "../../../core/types/store"
import { act, queryByAttribute, render, renderHook,  screen } from "../../../core/utils/test-utils"
import Dropdown from "./Dropdown"

describe("Testing Dropdown component", () => {
	let uiStore: IUIStore | null

	beforeEach(() => {
		uiStore = renderHook(() => useContext(StoreContext)).result.current.uiStore
	})

	afterEach(() => {
		uiStore = null
	})

	it("Renders Dropdown", () => {
		const { container } = render(<Dropdown />)
		const getByHref = queryByAttribute.bind(null, "href")
		
		act(() => {
			uiStore?.toggleDropdown(true)
		})
		
		expect(screen.queryByText("Меню")).not.toBe(null)
		expect(getByHref(container, "#/composed")).toBeInTheDocument()
		expect(getByHref(container, "#/rings")).toBeInTheDocument()
		expect(getByHref(container, "#/lessons")).toBeInTheDocument()
	})
	
	it("Tests that all anchor buttons in Dropdown are rendred", () => {
		const screen = render(<Dropdown />)
    
		act(() => {
			uiStore?.toggleDropdown(true)
		})
		
    const anchors = screen.getAllByText((content, element: HTMLElement) => {
      return element.tagName.toLowerCase() === "a"
    })

    expect(anchors).toHaveLength(3)

    const hrefs = anchors.map(a => a.getAttribute("href"))

    expect(hrefs.sort()).toEqual(["#/rings", "#/lessons", "#/composed"].sort())
	})
})
