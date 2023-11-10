/**
 * Main dropdown menu with navigation and settings button
 */

import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"
import { useContext } from "react"
import { StoreContext } from "../../.."
import GitHubIcon from "../../../assets/icons/github.svg?react"

const DropdownMain = () => {
  const { t } = useTranslation()
  const { uiStore, authStore } = useContext(StoreContext)

  return (
    <div className="dropdown-content">
      <header>
        <h1>
          {t("dropdown.main.title")}
        </h1>

        <a
          className="git-icon"
          href="https://github.com/stinger222/edu-schedule-constructor"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
			</header>

      <div className="section-divider"></div>

			<Link to='/assembled'>
				<Button> {t("dropdown.main.assembled")} </Button>
			</Link>

			<Link to="/class-schedules">
				<Button> {t("dropdown.main.classSchedules")} </Button>
			</Link>

			<Link to='/classes'>
				<Button> {t("dropdown.main.classes")} </Button>
			</Link>

      <div className="section-divider"></div>

      <Button onClick={() => uiStore.activeDropdownMenu = "settings"}> {t("dropdown.main.settings")} </Button>
      
      <div className="section-divider"></div>

      {authStore.isSignedIn
        ? <Button onClick={() => authStore.signOut()}>{t("dropdown.main.signOut")}</Button>
        : <Link  to="/auth/sign-in"><Button>Sign In</Button></Link>
      }
    </div>
  )
}

export default DropdownMain
