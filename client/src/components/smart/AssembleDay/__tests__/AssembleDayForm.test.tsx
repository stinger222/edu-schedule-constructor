import { render, renderHook } from "../../../../core/utils/test-utils"
import AssembleDayForm from "../AssembleDayForm"
import { FormProvider, useForm } from "react-hook-form"

describe("Testing AssembleDayForm component", () => {

  it("Should render form with correct 'Monday' header", async () => {
    const methods = renderHook(() => useForm({
      defaultValues: {
        name: "",
        days: [{ classScheduleId: "", classIds: ["undefined"] }]
      }, shouldFocusError: false
    })).result.current

    const screen = render(
      <FormProvider {...methods}>
        <AssembleDayForm dayIndex={0}/>
      </FormProvider>
    )
    
    expect(await screen.queryByTestId("assembled-day-form")).toBeInTheDocument()
    expect(await screen.queryByText(/^Monday.{0,}$/)).toBeInTheDocument()
    expect(await screen.queryByText(/^Tuesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Wednesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Thursday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Friday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Saturday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Sunday.{0,}$/)).not.toBeInTheDocument()


    screen.rerender(
      <FormProvider {...methods}>
        <AssembleDayForm dayIndex={4}/>
      </FormProvider>
    )

    expect(await screen.queryByTestId("assembled-day-form")).toBeInTheDocument()
    expect(await screen.queryByText(/^Monday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Tuesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Wednesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Thursday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Friday.{0,}$/)).toBeInTheDocument()
    expect(await screen.queryByText(/^Saturday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Sunday.{0,}$/)).not.toBeInTheDocument()
  })


  it("Should return null if dayIndex prop is greater that 4", async () => {
    const methods = renderHook(() => useForm({
      defaultValues: {
        name: "",
        days: [{ classScheduleId: "", classIds: ["undefined"] }]
      }, shouldFocusError: false
    })).result.current

    const screen = render(
      <FormProvider {...methods}>
        <AssembleDayForm dayIndex={5}/>
      </FormProvider>
    )
    
    expect(await screen.queryByTestId("assembled-day-form")).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Monday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Tuesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Wednesday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Thursday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Friday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Saturday.{0,}$/)).not.toBeInTheDocument()
    expect(await screen.queryByText(/^Sunday.{0,}$/)).not.toBeInTheDocument()
  })
})