import React, {ComponentProps} from "react"
import { render } from "../../../core/utils/test-utils"
import ClassScheduleCard from "./ClassScheduleCard"

type Props = ComponentProps<typeof ClassScheduleCard>

const validProps: Props = {
  title: "Name Of Class Schedule",
  start: "08:40",
  end: "15:30",
  length: 4
}

const unformattedProps: Props = {
  title: "                                   name of class schedule                    ",
  start: "8:5",
  end: "9:9",
  length: 1
}

const invalidProps: Props = {
  title: "",
  start: "asl;dk:sdfs",
  end: "ldkjsf",
  length: NaN
}

describe("Testing ClassScheduleCard component", () => {
  it("Properly renders ClassScheduleCard component with valid props", () => {
    const screen = render(<ClassScheduleCard {...validProps}/>)
    expect(screen.getByTestId("card-title")).toHaveTextContent("Name Of Class Schedule")
    expect(screen.getByTestId("classes-amount")).toHaveTextContent("4")
    expect(screen.getByTestId("start-time")).toHaveTextContent("08:40")
    expect(screen.getByTestId("end-time")).toHaveTextContent("15:30")
  })

  it("Properly renders ClassScheduleCard component with unformatted props", () => {
    const screen = render(<ClassScheduleCard {...unformattedProps}/>)
    expect(screen.getByTestId("card-title")).toHaveTextContent("Name of class schedule")
    expect(screen.getByTestId("classes-amount")).toHaveTextContent("1")
    expect(screen.getByTestId("start-time")).toHaveTextContent("08:05")
    expect(screen.getByTestId("end-time")).toHaveTextContent("09:09")
  })

  it("Properly renders ClassScheduleCard component with invalid props", () => {
    const screen = render(<ClassScheduleCard {...invalidProps}/>)
    expect(screen.getByTestId("card-title")).toHaveTextContent("Untitled Class Schedule")
    expect(screen.getByTestId("classes-amount")).toHaveTextContent("?")
    expect(screen.getByTestId("start-time")).toHaveTextContent("??:??")
    expect(screen.getByTestId("end-time")).toHaveTextContent("??:??")
  })
})