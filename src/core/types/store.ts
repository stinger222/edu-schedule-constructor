import { IClass, IClassSchedule, IComposedSchedule, DropdownMenu, ISettings } from "./types"
export interface IUIStore extends IStoreable {
	selectedDayIndex: number,
	isDropdownOpen: boolean,
  activeDropdownMenu: DropdownMenu,
  defaultSettings: ISettings,
  userSettings: ISettings,
	toggleDropdown: (newState?: boolean) => void,
	selectDayIndex: (newIndex: number) => void
}


interface IStoreable {
  // also "storageKey: string" should be here, but I need it to be static,
  // and typescript CAN'T declare static field in the interface,
  // soo.. yea, all classes that implement IStoreable have static "storageKey" filed, I GUESS...
	memorizeState(): void,
	restoreState(): void
}

export interface IClassesStore extends IStoreable {
	_classes: IClass[],
	classes: IClass[],
  setDefaultItems(): void,
	addClass(newClass: Omit<IClass, "uid">, uid?: string): void,
	removeClass(uid: string): boolean,
	updateClass(uid: string, newClass: Partial<Omit<IClass, "uid">>): void,
  findById(uid: string): IClass | undefined
}

export interface IClassSchedulesStore extends IStoreable {
	classSchedules: IClassSchedule[],
	addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string): void,
	removeSchedule(uid: string): boolean,
  updateSchedule(uid: string, newSchedule: Partial<Omit<IClassSchedule, "uid">>): boolean,
  getById(uid: string): IClassSchedule | undefined
}

export interface IComposedSchedulesStore extends IStoreable {
	composedSchedules: IComposedSchedule[],
  activeScheduleUid: string | null,
	addSchedule(newSchedule: Omit<IComposedSchedule, "uid">,  uid?: string): void,
  updateSchedule(uid: string, newSchedule: Partial<Omit<IComposedSchedule, "uid">>): boolean,
	removeSchedule(uid: string): boolean,
  getById(uid: string): IComposedSchedule | undefined,

  /**
   * "Activates" composed schedule with passed uid, witch results in this schedule to be rendered on the main page
   */
	activateSchedule(uid: string): void,

  /**
   * This method tries to return you composed schedule that user chose to be displayed on the main page,
   * 
   * but if there is no "active" schedule, it will try to activate first one from the store and return IT to you,
   * 
   * and ONLY if there is no composed schedules whatsoever, then `null` will be returned
   * 
   * _"get" perfectly fits here..._
   */
  getActiveSchedule(): IComposedSchedule | null,

  /**
   * This method checks if passed day in passed schedule is either:
   * 1. `undefined` (this can occur if user composed just first few days of the week)
   * 2. or if all classes in this day are default \<nothing\> cards with id "hidden" (this is essentially means that this day have no classes, therefore it's "empty")
   * 
   * @returns In both described cases `true` will be returned. Otherwise - false
  */
  dayIsEmptyOrUndefined(scheduleUid: string, dayIndex: number): boolean 
}
