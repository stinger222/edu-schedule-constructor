import StyledContainer from "./Container.styled"

const Container = ({children}) => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	)
}

export default Container
