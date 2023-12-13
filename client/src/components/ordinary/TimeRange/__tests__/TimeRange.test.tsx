import { render } from "../../../../core/utils/test-utils"
import TimeRange from "../TimeRange"

describe("Testing TimeRange component", () => {
  it("Renders TimeRange component", () => {

    const screen = render(
      <TimeRange index={4}/>
    )
    
    expect(screen.getByText(/Class #5/)).toBeInTheDocument()
  })
})