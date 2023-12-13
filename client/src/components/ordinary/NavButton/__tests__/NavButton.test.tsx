import { act } from "react-dom/test-utils"
import { fireEvent, render } from "../../../../core/utils/test-utils"
import NavButton from "../NavButton"

describe("Testing NavButton component", () => {
  it("Renders NavButton component", () => {
    const screen = render(
      <NavButton date="01" label="A" index={0} selectedDayIndex={2} onSelect={() => null}/>
    )

    expect(screen.getByText(/A/)).toBeInTheDocument()
    expect(screen.getByText(/01/)).toBeInTheDocument()
  })

  it("Tests that passed callback (onSelect prop) is fired on click", () => {
    const handleSelect = vi.fn()

    const screen = render(
      <NavButton date="02" label="B" index={1} selectedDayIndex={2} onSelect={handleSelect}/>
    )
    const navButton = screen.container.children[0]

    act(() => {
      fireEvent.click(navButton)
      fireEvent.click(navButton)
      fireEvent.click(navButton)
    })

    expect(handleSelect).toBeCalledTimes(3)
  })

  it("Tests that NavButton have 'selected' class if it's id correspond with 'selectedDayIndex' prop", () => {
    const screen = render(
      <NavButton date="03" label="C" index={2} selectedDayIndex={2} onSelect={() => null}/>
    )
    let navButton = screen.container.children[0]

    expect(navButton.classList.contains("selected")).toBe(true)

    screen.rerender(
      <NavButton date="04" label="D" index={3} selectedDayIndex={2} onSelect={() => null}/>
    )
    navButton = screen.container.children[0]

    expect(navButton.classList.contains("selected")).toBe(false)
  })
})