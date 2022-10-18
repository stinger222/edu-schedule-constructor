import { nanoid } from 'nanoid';
import { ILesson } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface ILessonsStore {
	lessons: ILesson[],
	addLesson: (
		cabinet: string,
		teacher: string,
		lesson_name: string,
		id?: string
	) => void
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
	},{
		id: '3',
		cabinet: "1111",
		teacher: "да",
		lesson_name: "Ещё пара "
	}
]

	constructor() {
		makeAutoObservable(this)
	}

	addLesson(cabinet: string, teacher: string, lesson_name: string, id?: string) {
		this.lessons.push({
			cabinet,
			teacher,
			lesson_name,
			id: id ?? nanoid(6)
		})
	}
}

export default LessonsStore