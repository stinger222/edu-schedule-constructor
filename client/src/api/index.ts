import { toast } from "sonner"
import axios from "axios"
import AuthStore from "../core/store/AuthStore"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_URI,
  headers: {
    "content-type": "application/json"
  },
  withCredentials: true
})


// For appending Authorization header
api.interceptors.request.use((config) => {
  const jwt: string | undefined = localStorage.getItem(AuthStore.JWTLocalStorageKey) || undefined

  if (!jwt) return config   // To prevent sending "Bearer undefined" for each unauthorized request

  config.headers.Authorization = `Bearer ${jwt}`
  return config
})

api.interceptors.response.use(
  (response) => {
    const displayMessage = response?.data?.displayMessage
    displayMessage && toast.message(displayMessage)
    return response
  },
  
  (error) => {
    const displayErrMessage = error.response?.data?.displayMessage
    displayErrMessage && toast.error(displayErrMessage)
    throw error
  }
)