import ky from "ky"

export const api = ky.create({
  prefixUrl: "http://localhost:3001",
  credentials: "include",
  headers: {
    "content-type": "application/json"
  }
})