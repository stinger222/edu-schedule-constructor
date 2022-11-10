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
	) => boolean
}
class LessonsStore implements ILessonsStore {
	lessons: ILesson[] = [{
		id: '1',
		cabinet: "232п",
		teacher: "Некий хуй",
		lesson_name: "Ведёт некую хуйню"
	}, {
		id: '2',
		cabinet: "1111",
		teacher: "да",
		lesson_name: "Ещё пара "
	}
]

	constructor() {
		makeAutoObservable(this)
	}

	addLesson(cabinet: string, teacher: string, lesson_name: string, id?: string): boolean {
		return this.lessons.length < this.lessons.push({
			cabinet,
			teacher,
			lesson_name,
			id: id ?? nanoid(6)
		})
	}
}

export default LessonsStore