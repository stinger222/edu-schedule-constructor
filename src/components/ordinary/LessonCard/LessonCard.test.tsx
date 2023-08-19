import { render, screen } from "../../../core/utils/test-utils"
import LessonCard from "./LessonCard"


describe("Testing LessonCard render with different props", () => {
	it("renders LessonCard with valid props", () => {
    const validProps = {
      title: "Название пары",
      teacher: "Имя Перпода",
      cabinet: "202у"
    }

		render(<LessonCard {...validProps}/>)

		expect(screen.getByText("Название пары")).toBeInTheDocument()
		expect(screen.getByText("Имя Перпода")).toBeInTheDocument()
		expect(screen.getByText("каб. 202у")).toBeInTheDocument()
	})

	it("renders LessonCard with empty string porps", () => {
    const emptyStringProps = {
      title: "",
      teacher: "",
      cabinet: ""
    }
    
		render(<LessonCard {...emptyStringProps}/>)
		expect(screen.getByText(/^(<|&lt;)Название пары не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(/^(<|&lt;)Имя препода не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText("каб. ???")).toBeInTheDocument()
	})

	it("renders LessonCard with string props that filled with spaces", () => {
    const filledWithSpacesProps = {
      title: "   ",
      teacher: " ",
      cabinet: "      "
    }

		render(<LessonCard {...filledWithSpacesProps}/>)

		expect(screen.getByText(/^(<|&lt;)Название пары не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(/^(<|&lt;)Имя препода не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText("каб. ???")).toBeInTheDocument()
	})
})