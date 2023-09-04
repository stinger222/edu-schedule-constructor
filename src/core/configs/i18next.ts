import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    // fallbackLng: "en",
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
            nthLessonSelectCaption: "{{value}}-ая пара" // TODO: I believe i18 have tools for numerals (?) https://www.i18next.com/translation-function/formatting
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
            cabinetInputPlaceholder: "302п" // <= should there be postfixes in english? 
          },

          button: {
            submit: "Готово"
          },
          ghostButton: {
            addLesson: "Добавить предмет",
            addRingsSchedule: "Добавить расписание звонков",
            composeNewSchedule: "",
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
            header: "Ошибка" // An Error occurred 
          },

          select: { // it's just a draft, todo
            emptyPlaceholder: "<Пусто>",
            nothingCard: "<Ничего>"
          },

          confirmPrompt: {
            deleteCard: "Вы уверены, что хотите удалить эту карточку?"
          }
        }
      }
    }
  })

export default i18n
