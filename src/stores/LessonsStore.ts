import { ILesson } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface ILessonsStore {
	lessons: ILesson[]
}
class LessonsStore implements ILessonsStore {
	lessons: ILesson[] = [{
		id: '1',
		cabinet: "232п",
		teacher: "Некий хуй",
		lesson_name: "ведёт некую хуйню"
	},{
		id: '2',
		cabinet: "666",
		teacher: "люблю хуи",
		lesson_name: "Ещё какая-то хуйня"
	},
]

	constructor() {
		makeAutoObservable(this)
	}
}

export default LessonsStore