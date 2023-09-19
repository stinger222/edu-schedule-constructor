import { StyledClassSchedulesPage } from "./ClassSchedulesPage.styled"
import { StoreContext } from "../.."
import { useContext } from "react"

import ClassScheduleCardsList from "../../components/wrappers/ClassScheduleCardsList/ClassScheduleCardsList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { useTranslation } from "react-i18next"

const ClassSchedulesPage = () => {
  const { t } = useTranslation()
  const classSchedulesStore = useContext(StoreContext).classSchedulesStore

	return (
		<StyledClassSchedulesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.classSchedulesPage")} </h1>
					<Header.BurgerButton/>
				</Header>

				<ClassScheduleCardsList
					classSchedules={classSchedulesStore.classSchedules}
					removeSchedule={classSchedulesStore.removeSchedule.bind(classSchedulesStore)}
				/>

			</Container>
		</StyledClassSchedulesPage>
	)
}

export default ClassSchedulesPage
