import { useContext } from "react"
import { StoreContext } from "../.."
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"

import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ClassCardsList from "../../components/wrappers/ClassCardsList/ClassCardsList"

import { StyledClassesPage } from "./ClassesPage.styled"
import useAuth from "../../core/hooks/useAuth"
import Loader from "../../components/ordinary/Loader/Loader"

const ClassesPage = () => {
  const { t } = useTranslation()
	const classesStore = useContext(StoreContext).classesStore

  const isLoading = useAuth()
  if (isLoading) return <Loader />

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
          isLoading={classesStore.isLoading}
        />

			</Container>
		</StyledClassesPage>
	)
}

export default observer(ClassesPage)
