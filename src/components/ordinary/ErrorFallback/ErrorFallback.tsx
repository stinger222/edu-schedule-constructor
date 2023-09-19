import Container from "../../containers/Container/Container"
import { EmptyDay, Warning } from "../../../core/utils/CustomErrors"
import { StyledErrorFallback } from "./ErrorFallback.styled"
import { Trans, useTranslation } from "react-i18next"

interface IProps {
  error: Warning | Error | EmptyDay
}

const ErrorFallback: React.FC<IProps> = ({ error }) => {

  return (
    <StyledErrorFallback>
      <Container>
        {error.name === Warning.name ? (
          <WarningLayout error={error} />
        ) : error.name === EmptyDay.name ? (
          <EmptyDayLayout error={error} />
        ) : error.name === Error.name ? (
          <ErrorLayout error={error} />
        ) : (
          <OtherErrorLayout error={new Error("")} />
        )}


      </Container>
    </StyledErrorFallback>
  )
}

const WarningLayout: React.FC<IProps>= ({ error }) => {
  const { t } = useTranslation()

  return <>
    <h1 className="warning-header header"> {t("warning.header")} </h1>
    <div className="warning-message-wrapper message-wrapper">
      <pre className="warning-message message">{error.message}</pre>
    </div>
  </>
}

const ErrorLayout: React.FC<IProps>= ({ error }) => {
  const { t } = useTranslation()

  return <>
    <h1 className="error-header header"> {t("error.header")} </h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">{error.message}</pre>
    </div>
  </>
}

const EmptyDayLayout: React.FC<IProps>= () => {
  const { t } = useTranslation()

  return <>
    <h1 className="empty-day-header header"> {t("emptyDayErr.header")} </h1>
    <div className="empty-day-message-wrapper message-wrapper">
      <pre className="empty-day-message message">{t("emptyDayErr.caption")}</pre>
    </div>
  </>
}

const OtherErrorLayout: React.FC<IProps>= () => {
  const { t } = useTranslation()

  return <>
    <h1 className="error-header header"> {t("fatalError.header")} </h1>
    <div className="error-message-wrapper message-wrapper">
      <pre className="error-message message">
        <Trans i18nKey="fatalError.message" components={{ br: <br/>, i: <i></i> }}/> 
      </pre>
    </div>
  </>
}
 

export default ErrorFallback
