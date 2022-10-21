import { StyledErrorFallback } from "./ErrorFallback.styled"
import { ReactComponent as WarningIcon } from "../../assets/warning-icon.svg" 
import { ReactComponent as ErrorIcon } from "../../assets/error-icon.svg" 


const ErrorFallback = ({ error }) => {

	if (error.type === 'error') return <>
		<StyledErrorFallback.Error>
			<div className="icon"><ErrorIcon /></div>
			<div className="message">
				{error.message}
			</div>
		</StyledErrorFallback.Error>
	</>

	if (error.type === 'warning') return <>
		<StyledErrorFallback.Warning>
				<div className="icon"><WarningIcon /></div>
				<div className="message">
					{error.message}
				</div>
		</StyledErrorFallback.Warning>
	</>

	if (error.type === 'message') return <>
		<StyledErrorFallback.Message>
			<div className="message">
				{error.message}
			</div>
		</StyledErrorFallback.Message>
	</>
}

export default ErrorFallback