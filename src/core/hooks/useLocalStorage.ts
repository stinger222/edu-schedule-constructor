import { useEffect, useState } from "react"

export function useLocalStorage<T>(
  key: string, defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  
  const getValue = (key: string, defaultValue: T): T => {
    const storageValue = localStorage.getItem(key)

    if (storageValue === null) return defaultValue
    return JSON.parse(storageValue)
  }

  const [state, setState] = useState<T>(getValue(key, defaultValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}
