import { ReactNode } from "react"
import { StyledContainer } from "./Container.styled"

interface IProps {
	children: ReactNode,
  noPaddingBottom?: boolean
}

const Container = ({ children, noPaddingBottom = false }: IProps) => {
	return (
		<StyledContainer style={noPaddingBottom ? {paddingBottom: 0} : {}}>
			{children}
		</StyledContainer>
	)
}

export default Container
