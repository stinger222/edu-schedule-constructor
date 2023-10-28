// import { defineConfig } from "vite"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import commonjs from "vite-plugin-commonjs"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    commonjs(),
    react(),
    svgr(),
    {
      name: "singleHMR",
      handleHotUpdate({ modules }) {
        modules.map((m: any) => {
          m.importedModules = new Set()
          m.importers = new Set()
        })

        return modules
      }
    }
  ],
  test: {
    setupFiles: ["./src/setupTests.ts"],
    environment: "jsdom",
    globals: true
  },
  server: {
    port: 3000
  }
})
