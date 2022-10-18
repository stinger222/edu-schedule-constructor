import { ErrorBoundary } from "react-error-boundary"
import Container from "../../Container/Container"
import ComposedSchedule from "./ComposedSchedule"
import Header from "../../Header/Header"
import StyledMain from "./Main.styled"

export function ErrorFallback({ error }) {	
	return <div style={{color: "orange", fontWeight:500, fontSize:"1.2em", textAlign:"center"}}>
		{error.message}
	</div>
}

function Main() {
	return (
		<StyledMain>
			<Header/>
			<Container>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<ComposedSchedule />
				</ErrorBoundary>
			</Container>
		</StyledMain>
	)
}

export default Main