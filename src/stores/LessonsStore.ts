import { ILesson } from './interfaces';
import { action, makeAutoObservable } from 'mobx';

class LessonsStore {
	lessons: ILesson[] = [{
		id: 'df6g-2df4',
		cabinet: "232t",
		teacher: "teacher",
		lesson_name: "lesson"
	}]

	constructor() {
		makeAutoObservable(this)
	}

	dick() {
		this.lessons[0] = {
			id: Math.random()+'',
			cabinet: "232t",
			teacher: "teacher",
			lesson_name: "lesson"
		}
	}
}

export default LessonsStore