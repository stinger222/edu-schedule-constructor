import { IClass, IClassSchedule, IAssembledSchedule, DropdownMenu, ISettings } from "./types"
export interface IUIStore extends IRestoreable {
	selectedDayIndex: number,
	isDropdownOpen: boolean,
  activeDropdownMenu: DropdownMenu,
  defaultSettings: ISettings,
  userSettings: ISettings,
  memorizeState(): void,
	toggleDropdown: (newState?: boolean) => void,
	selectDayIndex: (newIndex: number) => void
}


interface IRestoreable {
	restoreState(): void
}

export interface IClassesStore extends IRestoreable {
	_classes: IClass[],
	classes: IClass[],
  isLoading: boolean,
  addNothingItem(): void,
	addClass(newClass: Omit<IClass, "uid">, uid?: string): void,
	removeClass(uid: string): void,
	updateClass(uid: string, newClass: Partial<Omit<IClass, "uid">>): void,
  findById(uid: string): IClass | undefined
}

export interface IClassSchedulesStore extends IRestoreable {
	classSchedules: IClassSchedule[],
  isLoading: boolean,
	addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string): void,
	removeSchedule(uid: string): void,
  updateSchedule(uid: string, newSchedule: Partial<Omit<IClassSchedule, "uid">>): void,
  getById(uid: string): IClassSchedule | undefined
}

export interface IAssembledSchedulesStore extends IRestoreable {
	assembledSchedules: IAssembledSchedule[],
  activeScheduleUid: string | null,
  isLoading: boolean,
	addSchedule(newSchedule: Omit<IAssembledSchedule, "uid">,  uid?: string): void,
  updateSchedule(uid: string, newSchedule: Partial<Omit<IAssembledSchedule, "uid">>): void,
	removeSchedule(uid: string): void,
  getById(uid: string): IAssembledSchedule | undefined,

  /**
   * "Activates" assembled schedule with passed uid, witch results in this schedule to be rendered on the main page
   */
	activateSchedule(uid: string): void,

  /**
   * This method tries to return you assembled schedule that user chose to be displayed on the main page,
   * 
   * but if there is no "active" schedule, it will try to activate first one from the store and return IT to you,
   * 
   * and ONLY if there is no assembled schedules whatsoever, then `null` will be returned
   * 
   * _"get" perfectly fits here..._
   */
  getActiveSchedule(): IAssembledSchedule | null,

  /**
   * This method checks if passed day in passed schedule is either:
   * 1. `undefined` (this can occur if user assembled just first few days of the week)
   * 2. or if all classes in this day are default \<nothing\> cards with id "hidden" (this is essentially means that this day have no classes, therefore it's "empty")
   * 
   * @returns In both described cases `true` will be returned. Otherwise - false
  */
  dayIsEmptyOrUndefined(scheduleUid: string, dayIndex: number): boolean 
}

export interface IAuthStore  {
  isSignedIn: boolean,
  setSignedIn(isSignedIn: boolean): void,
  signOut(): void,
  validateSession(): void
}
