import ClassCardsList from "../../components/wrappers/ClassCardsList/ClassCardsList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledClassesPage } from "./ClassesPage.styled"
import { useContext } from "react"
import { StoreContext } from "../.."
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"

const ClassesPage = () => {

  const { t } = useTranslation()
	const classesStore = useContext(StoreContext).classesStore

	return (
		<StyledClassesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.classesPage")} </h1>
					<Header.BurgerButton/>
				</Header>

				<ClassCardsList 
					classes={classesStore.classes}
					removeClass={classesStore.removeClass.bind(classesStore)}
        />

			</Container>
		</StyledClassesPage>
	)
}

export default observer(ClassesPage)
