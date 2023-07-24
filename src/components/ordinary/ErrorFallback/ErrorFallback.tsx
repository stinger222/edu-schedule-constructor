import Warning from "../../../core/utils/Warning"
import Container from "../../containers/Container/Container"  
import { StyledErrorFallback } from "./ErrorFallback.styled"

interface IProps {
  error: Warning | Error
}

const ErrorFallback: React.FC<IProps> = ({ error }) => {

  const isWarning = error instanceof Warning
  
  return (
    <StyledErrorFallback>
      <Container>
        {isWarning ? <WarningLayout warning={error} /> : <ErrorLayout error={error}/>}
      </Container>
    </StyledErrorFallback>
  )
}

const ErrorLayout: React.FC<IProps>= ({ error }) => {
  return <>
    <h1 className="error-header header">An Error occurred</h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">{error.message}</pre>
    </div>
  </>
}

const WarningLayout = ({ warning }: {warning: Warning}) => {
  return <>
    <h1 className="warning-header header">Warning!</h1>
    <div className="warning-message-wrapper message-wrapper">
      <pre className="warning-message message">{warning.message}</pre>
    </div>
  </>
}

export default ErrorFallback
