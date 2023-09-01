import Container from "../../containers/Container/Container"
import { EmptyDay, Warning } from "../../../core/utils/CustomErrors"
import { StyledErrorFallback } from "./ErrorFallback.styled"

interface IProps {
  error: Warning | Error | EmptyDay
}

const ErrorFallback: React.FC<IProps> = ({ error }) => {
  
  return (
    <StyledErrorFallback>
      <Container>
        { error.name === Warning.name && <WarningLayout error={error}/> }
        { error.name === EmptyDay.name && <EmptyDayLayout error={error}/> }
        { error.name === Error.name && <ErrorLayout error={error}/> }

      </Container>
    </StyledErrorFallback>
  )
}

const WarningLayout: React.FC<IProps>= ({ error }) => {
  return <>
    <h1 className="warning-header header">Warning!</h1>
    <div className="warning-message-wrapper message-wrapper">
      <pre className="warning-message message">{error.message}</pre>
    </div>
  </>
}

const ErrorLayout: React.FC<IProps>= ({ error }) => {
  return <>
    <h1 className="error-header header">An Error occurred</h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">{error.message}</pre>
    </div>
  </>
}

const EmptyDayLayout: React.FC<IProps>= ({ error }) => {
  return <>
    <h1 className="empty-day-header header">Got Lucky!</h1>
    <div className="empty-day-message-wrapper message-wrapper">
      <pre className="empty-day-message message">{error.message}</pre>
    </div>
  </>
}

export default ErrorFallback
