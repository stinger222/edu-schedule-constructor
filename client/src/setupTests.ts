
import "@testing-library/jest-dom"

const CRUD_mock =  vi.fn().mockReturnValue(Promise.resolve({
  status: 200,
  data: {
    classes: [],
    classSchedules: [],
    assembledSchedules: []
  }
}))

// Global mocks:
beforeAll(() => {
  vi.mock("axios", () => {
    return {
      default: {
        post: CRUD_mock,
        get: CRUD_mock,
        delete: CRUD_mock,
        put: CRUD_mock,
        create: vi.fn().mockReturnThis(),
        interceptors: {
          request: {
            use: vi.fn(),
            eject: vi.fn()
          },
          response: {
            use: vi.fn(),
            eject: vi.fn()
          }
        }
      }
    }
  })
  
  // global.console.log = () => undefined
  global.console.warn = () => undefined
  global.console.error = () => undefined
})
