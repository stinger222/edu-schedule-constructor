import CustomError from "../../../core/errors/CustomError"
import Container from "../../containers/Container/Container"
import { StyledErrorFallback } from "./ErrorFallback.styled"
import { Trans, useTranslation } from "react-i18next"

interface IProps {
  error: CustomError
}

const ErrorFallback = ({ error }: IProps) => {

  return (
    <StyledErrorFallback>
      <Container>
        {error.errorType === "warning" ? (
          <WarningLayout error={error} />
        ) : error.errorType === "day_off" ? (
          <DayOffLayout />
        ) : error.name === Error.name ? (
          <ErrorLayout error={error} />
        ) : (
          <FatalErrorLayout />
        )}
      </Container>
    </StyledErrorFallback>
  )
}

const WarningLayout = ({ error }: IProps) => {
  const { t } = useTranslation()

  return <>
    <h1 className="warning-header header"> {t("warningException.header")} </h1>
    <div className="warning-message-wrapper message-wrapper">
      <pre className="warning-message message">{error.message}</pre>
    </div>
  </>
}

const ErrorLayout = ({ error }: IProps) => {
  const { t } = useTranslation()

  return <>
    <h1 className="error-header header"> {t("errorException.header")} </h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">{error.message}</pre>
    </div>
  </>
}

const DayOffLayout = () => {
  const { t } = useTranslation()

  return <>
    <h1 className="day-off-header header"> {t("dayOffException.header")} </h1>
    <div className="day-off-message-wrapper message-wrapper">
      <pre className="day-off-message message">{t("dayOffException.message")}</pre>
    </div>
  </>
}

const FatalErrorLayout = () => {
  const { t } = useTranslation()

  return <>
    <h1 className="error-header header"> {t("fatalErrorException.header")} </h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">
        <Trans i18nKey="fatalErrorException.messages.notSureWhatHappened" components={{ br: <br/>, i: <i></i> }}/> 
      </pre>
    </div>
  </>
}
 

export default ErrorFallback
