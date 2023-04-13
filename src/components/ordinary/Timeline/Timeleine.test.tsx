import { cleanup, render, screen } from "../../../core/utils/test-utils"
import Timeline from "./Timeline"


describe("Testing Timeline render with different props", () => {
	it("Renders Timeline with valid props", () => {
		render(<Timeline startTime="10:00" endTime="11:00"/>)

		expect(screen.getByText("10:00", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("11:00", {selector: ".label-end"})).toBeInTheDocument()
		expect(Timeline).toMatchSnapshot()
	})

	it("Renders Timeline with valid props, but values not formatted", () => {
		render(<Timeline startTime="7:3" endTime="9:5"/>)

		expect(screen.getByText("07:03", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("09:05", {selector: ".label-end"})).toBeInTheDocument()
		expect(Timeline).toMatchSnapshot()

		cleanup()

		render(<Timeline startTime="0:0" endTime="4:5"/>)

		expect(screen.getByText("00:00", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("04:05", {selector: ".label-end"})).toBeInTheDocument()
	})

	it("Renders Timeline with string props that filled with spaces", () => {
		render(<Timeline startTime="  " endTime="    "/>)

		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()

		cleanup()

		render(<Timeline startTime="10:00" endTime="    "/>)

		expect(screen.getByText("10:00", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()
		
		cleanup()

		render(<Timeline startTime=" " endTime="09:00"/>)

		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("09:00", {selector: ".label-end"})).toBeInTheDocument()
	})

	it("Renders Timeline with epmpty string props", () => {
		render(<Timeline startTime="" endTime=""/>)

		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()

		cleanup()

		render(<Timeline startTime="09:00" endTime=""/>)

		expect(screen.getByText("09:00", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()

		cleanup()

		render(<Timeline startTime="" endTime="10:00"/>)

		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("10:00", {selector: ".label-end"})).toBeInTheDocument()
	})

	it("Renders Timeline with invalid props", () => {
		render(<Timeline startTime="cum" endTime="sock"/>)
		
		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()
		expect(Timeline).toMatchSnapshot()

		cleanup()

		render(<Timeline startTime="08:30" endTime="sock"/>)
		
		expect(screen.getByText("08:30", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".label-end"})).toBeInTheDocument()

		cleanup()

		render(<Timeline startTime="cum" endTime="9:40"/>)
		
		expect(screen.getByText("??:??", {selector: ".label-start"})).toBeInTheDocument()
		expect(screen.getByText("09:40", {selector: ".label-end"})).toBeInTheDocument()
	})
})
