import { ILesson, IRingsSchedule, IComposedSchedule, DropdownMenu, ISettings } from "./types"
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
	storageKey: string,
	memorizeState(): void,
	restoreState(): void
}

export interface ILessonsStore extends IStoreable {
	_lessons: ILesson[],
	lessons: ILesson[],
	addLesson(newLesson: Omit<ILesson, "uid">, uid?: string): void,
	removeLesson(uid: string): boolean,
	updateLesson(uid: string, newLesson: Partial<Omit<ILesson, "uid">>): void,
  findById(uid: string): ILesson | undefined
}

export interface IRingsSchedulesStore extends IStoreable {
	ringsSchedules: IRingsSchedule[],
	addSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">): void,
	removeSchedule(uid: string): boolean,
  updateSchedule(uid: string, newSchedule: Partial<Omit<IRingsSchedule, "uid">>): boolean,
  getById(uid: string): IRingsSchedule | undefined
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
   * 2. or if all lessons in this day are default \<nothing\> cards with id "hidden" (this is essentially means that this day have no lessons, therefore it's "empty")
   * 
   * @returns In both described cases `true` will be returned. Otherwise - false
  */
  dayIsEmptyOrUndefined(shceduleUid: string, dayIndex: number): boolean 
}
