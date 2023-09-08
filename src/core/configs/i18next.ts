import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "ru",
    resources: {
      ru: {
        translation: {
          headerTitle: {
            lessonsPage: "Добавленные предеметы",
            ringsPage: "Расписания звонков",
            composedPage: "Составленные расписания",
            editLesson: "Редактировать предмет",
            editRingsSchedule: "Редактировать расписание",
            editComposedSchedule: "Редактировать расписане",
            addLesson: "Добавить предмет",
            addRingsSchedule: "Добавить расписание звонков",
            addComposedSchedule: "Составить новое расписание"
          },
          dropdown: {
            menu: "Меню",
            composed: "Составленные расписания",
            rings: "Расписания звонков",
            lessons: "Добавленные предметы"
          },

          lessonCard: {
            cabinetPrefix: "каб.",
            lessonWasRemoved: "<Пара была удалена>",
            nobody: "<Никто>",
            noCabinet: "???"

          },
          ringsScheduleCard: {
            lessonsAmount: "Пар -",
            start: "Начало -",
            end: "Конец -"
          },
          composedScheduleCard: {
            lessonsAmount: "Пар",
            start: "Начало",
            end: "Конец"
          },

          composeScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Верхняя неделя",
            ringsSchForThisDayInputCaption: "Расписание звонков для этого дня",
            nthLessonSelectCaption: "{{value}}-ая пара"
          },
          addRingsScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Звонки на понедельник",
            startInputcaption: "Начало",
            endInputcaption: "Конец",
            dividerCaption: "{{value}}-я пара"
          },
          addLessonForm: {
            lessonNameInputCaption: "Название пары",
            lessonNameInputPlaceholder: "Основы алгоритмизации",
            teacherNameInputCaption: "Имя препода",
            teacherNameInputPlaceholder: "Иванов Иван Иванович",
            cabinetInputCaption: "Кабинет",
            cabinetInputPlaceholder: "302п"
          },

          button: {
            done: "Готово"
          },
          ghostButton: {
            addLesson: "Добавить предмет",
            addRingsSchedule: "Добавить расписание звонков",
            composeNewSchedule: "Составить новое расписание",
            fillScheduleFor: "Заполнить расписание на",
            addNthLesson: "Добавить {{value}}-ую пару"
          },

          emptyDayErr: {
            header: "Уиииии",
            caption: "На сегодня ничего OwO"
          },
          warning: {
            header: "Внимание!"
          },
          error: {
            header: "Ошибка"
          },

          select: { // it's just a draft, todo
            emptyPlaceholder: "<Пусто>",
            nothingCard: "<Ничего>"
          },

          confirmPrompt: {
            deleteCard: "Вы уверены, что хотите удалить эту карточку?"
          }
        }
      },
      en: {
        translation: {
          headerTitle: {
            lessonsPage: "Added lessons",
            ringsPage: "Rings schedules",
            composedPage: "Composed schedules",
            editLesson: "Edit lesson",
            editRingsSchedule: "Edit schedule",
            editComposedSchedule: "Edit schedule",
            addLesson: "Add new lesson",
            addRingsSchedule: "Add rings schedule",
            addComposedSchedule: "Compose new schedule"
          },
          dropdown: {
            menu: "Menu",
            composed: "Composed schedules",
            rings: "Rings schedules",
            lessons: "Added lessons"
          },

          lessonCard: {
            cabinetPrefix: "cab.",
            lessonWasRemoved: "<Lesson was removed>",
            nobody: "<Nobody>",
            noCabinet: "???"

          },
          ringsScheduleCard: {
            lessonsAmount: "Lessons -",
            start: "Start -",
            end: "End -"
          },
          composedScheduleCard: {
            lessonsAmount: "Lessons",
            start: "Start",
            end: "End"
          },

          composeScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Some name, idk", // TODO: ???
            ringsSchForThisDayInputCaption: "Rings schedule for this day",
            nthLessonSelectCaption: "Lesson #{{value}}"
          },
          addRingsScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "rings schedule #1? idk", // TODO: ??? 
            startInputcaption: "Start",
            endInputcaption: "End",
            dividerCaption: "Lesson #{{value}}"
          },
          addLessonForm: {
            lessonNameInputCaption: "Lesson name",
            lessonNameInputPlaceholder: "COBOL programming",
            teacherNameInputCaption: "Teacher's name",
            teacherNameInputPlaceholder: "Mr. Dickhead",
            cabinetInputCaption: "Cabinet",
            cabinetInputPlaceholder: "302m" // <= should there be postfixes in english? 
          },

          button: {
            done: "Done"
          },
          ghostButton: {
            addLesson: "Add new lesson",
            addRingsSchedule: "Add rings schedule",
            composeNewSchedule: "Compose new schedule",
            fillScheduleFor: "Compose schedule for",
            addNthLesson: "Add lesson #{{value}}"
          },

          emptyDayErr: {
            header: "Got Lucky!",
            caption: "Nothing for today :D"
          },
          warning: {
            header: "Warning!"
          },
          error: {
            header: "An Error occurred"
          },

          select: { // it's just a draft, todo
            emptyPlaceholder: "<Empty>",
            nothingCard: "<Nothing>"
          },

          confirmPrompt: {
            deleteCard: "Are you sure you want to delete this card?"
          }
        }
      }
    }
  })

export default i18n
