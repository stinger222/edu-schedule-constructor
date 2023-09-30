import { ReactNode } from "react"
import { StyledContainer } from "./Container.styled"

interface IProps {
	children: ReactNode
}

const Container = ({ children }: IProps) => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	)
}

export default Container
