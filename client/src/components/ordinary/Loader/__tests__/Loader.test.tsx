import { render } from "../../../../core/utils/test-utils"
import Loader from "../Loader"

describe("Testing Loader component", () => {
  it("Renders Loader component", () => {
    const screen = render(<Loader />)

    expect(screen.queryByTestId("loader")).toBeVisible()
  })
})