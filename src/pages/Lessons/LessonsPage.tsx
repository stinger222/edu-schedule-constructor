import LessonCardsList from "../../components/wrappers/LessonCardsList/LessonCardsList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledLessonsPage } from "./LessonsPage.styled"
import { useContext } from "react"
import { StoreContext } from "../.."
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"

const LessonsPage = () => {

  const { t } = useTranslation()
	const lessonsStore = useContext(StoreContext).lessonsStore

	return (
		<StyledLessonsPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.lessonsPage")} </h1>
					<Header.BurgerButton/>
				</Header>

				<LessonCardsList 
					lessons={lessonsStore.lessons}
					removeLesson={lessonsStore.removeLesson.bind(lessonsStore)}
        />

			</Container>
		</StyledLessonsPage>
	)
}

export default observer(LessonsPage)
