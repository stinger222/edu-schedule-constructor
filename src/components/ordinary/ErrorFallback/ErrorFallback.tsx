import Container from "../../containers/Container/Container"  
import { StyledErrorFallback } from "./ErrorFallback.styled"

interface IProps {
  error: Error
}

const ErrorFallback: React.FC<IProps> = ({ error }) => {
  console.log(error.message)
  
  return (
    <StyledErrorFallback>
      <Container>
        <h1>Error occurred</h1>
        <div className="message-wrapper">
          <pre className="message">{error.message}</pre>
        </div>
      </Container>
    </StyledErrorFallback>
  )
}

export default ErrorFallback
