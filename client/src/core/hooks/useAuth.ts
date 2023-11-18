import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../.."
import { useNavigate } from "react-router-dom"
import { useObserver } from "mobx-react"

const useAuth = () => {
  const { authStore } = useContext(StoreContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const isSignedIn = useObserver(() => authStore.isSignedIn)

  useEffect(() => {
    setIsLoading(false)
    if (isSignedIn === false) {
      navigate("/auth/login")
    }
  }, [authStore.isSignedIn])

  return isLoading
}

export default useAuth