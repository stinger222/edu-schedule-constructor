import { ReactNode } from "react"
import { StyledContainer } from "./Container.styled"

interface IProps {
	children: ReactNode
}

const Container: React.FC<IProps> = ({ children }) => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	)
}

export default Container
