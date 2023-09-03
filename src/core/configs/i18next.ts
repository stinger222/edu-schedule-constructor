import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // fallbackLng: "en",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    },
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
            composed: "Составленные распиания",
            rings: "Расписания звонков",
            lessons: "Добавленные предметы"
          },

          lessonCard: {
            cabinetPrefix: "каб."
          },
          ringsScheduleCard: {
            lessonsAmount: "Пар - ",
            start: "Начало - ",
            end: "Конец - "
          },
          composedScheduleCard: {
            lessonsAmount: "Пар - ",
            start: "Начало - ",
            end: "Конец - "
          },

          composeScheduleForm: {
            schNameInputCaption: "Название расписания",
            ringsSchForThisDayInputCaption: "Расписание звонков для этого дня",
            nthLesson: "lesson" // TODO: I believe i18 have tools for numerals (?) https://www.i18next.com/translation-function/formatting
          },
          addRingsScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Звонки на понедельник",
            startInputcaption: "Начало",
            endInputcaption: "Конец",
            dividerCaption: "пара"
          },
          addLessonForm: {
            lessonNameInputCaption: "Название пары",
            lessonNameInputPlaceholder: "Основа алгоритмизации",
            teacherNameInputCaption: "Имя препода",
            teacherNameInputPlaceholder: "Иванов Иван Иванович",
            cabinetInputCaption: "Имя препода",
            cabinetInputPlaceholder: "302п" // <= is there should be postfixes in english? 
          },

          button: {
            submit: "Готово"
          },
          ghostButton: {
            addLesson: "",
            addRingsSchedule: "",
            composeNewSchedule: "",
            fillScheduleFor: "Заполнить расписание на ",
            addNthLesson: "Add {n}th lesson" // TODO: (?) https://www.i18next.com/translation-function/formatting
          },

          emptyDayErr: {
            header: "Уиииии",
            caption: "На сегодня ничего OwO"
          },
          Warning: {
            header: "Внимание!"
          },
          Error: {
            header: "Ошибка"
          }
        }
      }
    }
  })

export default i18n