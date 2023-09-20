import i18n from "../../../core/configs/i18next"
import { render, screen } from "../../../core/utils/test-utils"
import ClassCard from "./ClassCard"

const t = i18n.t

describe("Testing ClassCard render with different props", () => {
	it("renders ClassCard with valid props", () => {
    const validProps = {
      title: "Название пары",
      teacher: "Имя Перпода",
      cabinet: "202у"
    }

		render(<ClassCard {...validProps}/>)

		expect(screen.getByText("Название пары")).toBeInTheDocument()
		expect(screen.getByText("Имя Перпода")).toBeInTheDocument()
		expect(screen.getByText(`${t("classCard.cabinetPrefix")} 202у`)).toBeInTheDocument()
	})

	it("renders ClassCard with empty string porps", () => {
    const emptyStringProps = {
      title: "",
      teacher: "",
      cabinet: ""
    }
    
		render(<ClassCard {...emptyStringProps}/>)
		expect(screen.getByText(/^(<|&lt;)Название пары не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(/^(<|&lt;)Имя препода не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(`${t("classCard.cabinetPrefix")} ${t("classCard.noCabinet")}`)).toBeInTheDocument()
	})
  
	it("renders ClassCard with string props that filled with spaces", () => {
    const filledWithSpacesProps = {
      title: "   ",
      teacher: " ",
      cabinet: "      "
    }
    
		render(<ClassCard {...filledWithSpacesProps}/>)
    
		expect(screen.getByText(/^(<|&lt;)Название пары не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(/^(<|&lt;)Имя препода не указано(>|&gt;)$/)).toBeInTheDocument()
    expect(screen.getByText(`${t("classCard.cabinetPrefix")} ${t("classCard.noCabinet")}`)).toBeInTheDocument()
	})
})