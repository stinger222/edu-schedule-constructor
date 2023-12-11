import { makeAutoObservable } from "mobx"
import { IClassesStore } from "../../types/store"
import { IClass } from "../../types/types"


class MockClassesStore implements IClassesStore {
  public _classes: IClass[] = [
    {
      title: "Some lesson #1",
      teacher: "Some Teacher #1",
      cabinet: "101C",
      uid: "yu6PYLpxnA"
    },
    {
      title: "Some lesson #2",
      teacher: "Some Teacher #2",
      cabinet: "102A",
      uid: "TRiz3CPnkU"
    },
    {
      title: "Some lesson #3",
      teacher: "Some Teacher #3",
      cabinet: "103B",
      uid: "cjb1ZM2jzJ"
    },
    {
      cabinet: "???",
      teacher: "<Никто>",
      title: "<Ничего>",
      uid: "hidden"
    }
  ]
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get classes() {
    return this._classes.filter((l) => l.uid !== "hidden")
  }

  restoreState = vi.fn()
  addNothingItem = vi.fn()
  addClass = vi.fn()
  removeClass = vi.fn()
  updateClass = vi.fn()
  findById = vi.fn()
  static formatClassObject = vi.fn()
}

export default MockClassesStore
