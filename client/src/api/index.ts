import axios from "axios"
import AuthStore from "../core/store/AuthStore"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_URI,
  headers: {
    "content-type": "application/json"
  },
  withCredentials: true
})

api.interceptors.request.use((config) => {
  const jwt: string | undefined = localStorage.getItem(AuthStore.JWTLocalStorageKey) || undefined

  if (!jwt) return config   // To prevent sending "Bearer undefined" for each unauthorized request

  config.headers.Authorization = `Bearer ${jwt}`
  return config
})