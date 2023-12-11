
import "@testing-library/jest-dom"
import "jest-styled-components"

// Global mocks
beforeAll(() => {
  // vi.mock("", () => mockRootStore)
  
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: any) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
  }))
})
  
  // global.console.log = () => undefined
  global.console.warn = () => undefined
  global.console.error = () => undefined
})
