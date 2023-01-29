import { cleanup, render, screen } from "../../../core/utils/test-utils"
import ProgressBar from "./ProgressBar"

describe('Testing ProgressBar render with different props', () => {
	it("Renders ProgressBar with valid props", () => {
		const progressBar = render(<ProgressBar startTime="10:00" endTime="11:00"/>)

		expect(screen.getByText("10:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("11:00", {selector: ".caption-end"})).toBeInTheDocument()
		expect(progressBar).toMatchSnapshot()
	})

	it("Renders ProgressBar correctly with logically incorrect props", () => {
		const progressBar = render(<ProgressBar startTime="10:00" endTime="09:00"/>)

		expect(screen.getByText("09:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("10:00", {selector: ".caption-end"})).toBeInTheDocument()
		expect(progressBar).toMatchSnapshot()

		cleanup()

		render(<ProgressBar startTime="05:30" endTime="03:20"/>)

		expect(screen.getByText("03:20", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("05:30", {selector: ".caption-end"})).toBeInTheDocument()
		
		render(<ProgressBar startTime="08:01" endTime="08:00"/>)

		expect(screen.getByText("08:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("08:01", {selector: ".caption-end"})).toBeInTheDocument()
	})

	it("Renders ProgressBar with valid props, but values not formatted", () => {
		const progressBar = render(<ProgressBar startTime="7:3" endTime="9:5"/>)

		expect(screen.getByText("07:03", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("09:05", {selector: ".caption-end"})).toBeInTheDocument()
		expect(progressBar).toMatchSnapshot()

		cleanup()

		render(<ProgressBar startTime="0:0" endTime="4:5"/>)

		expect(screen.getByText("00:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("04:05", {selector: ".caption-end"})).toBeInTheDocument()
	})

	it("Renders ProgressBar with string props that filled with spaces", () => {
		render(<ProgressBar startTime="  " endTime="    "/>)

		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()

		cleanup()

		render(<ProgressBar startTime="10:00" endTime="    "/>)

		expect(screen.getByText("10:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()
		
		cleanup()

		render(<ProgressBar startTime=" " endTime="09:00"/>)

		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("09:00", {selector: ".caption-end"})).toBeInTheDocument()
	})

	it("Renders ProgressBar with epmpty string props", () => {
		render(<ProgressBar startTime="" endTime=""/>)

		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()

		cleanup()

		render(<ProgressBar startTime="09:00" endTime=""/>)

		expect(screen.getByText("09:00", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()

		cleanup()

		render(<ProgressBar startTime="" endTime="10:00"/>)

		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("10:00", {selector: ".caption-end"})).toBeInTheDocument()
	})

	it("Renders ProgressBar with invalid props", () => {
		const progressBar = render(<ProgressBar startTime="cum" endTime="sock"/>)
		
		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()
		expect(progressBar).toMatchSnapshot()

		cleanup()

		render(<ProgressBar startTime="08:30" endTime="sock"/>)
		
		expect(screen.getByText("08:30", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("??:??", {selector: ".caption-end"})).toBeInTheDocument()

		cleanup()

		render(<ProgressBar startTime="cum" endTime="9:40"/>)
		
		expect(screen.getByText("??:??", {selector: ".caption-start"})).toBeInTheDocument()
		expect(screen.getByText("09:40", {selector: ".caption-end"})).toBeInTheDocument()
	})
})
