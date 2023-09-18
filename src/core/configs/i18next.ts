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
            main: {
              title: "Меню",
              composed: "Составленные расписания",
              rings: "Расписания звонков",
              lessons: "Добавленные предметы",
              settings: "Настройки"
            },
            settings: {
              title: "Настройки",
              language: "Язык",
              rus: "Русский",
              eng: "Английский",

              theme: "Тема",
              dark: "Тёмная",
              light: "Светлая",

              impextTextareaTitle: "И/Э созданные карточки",
              impextTextareaPaceholder: "Вставьте сюда ранее экспортированный текст",
              impextBtnImport: "Импорт",
              impextBtnExport: "Экспорт",

              back: "Назад =>"
            }
          },

          lessonCard: {
            cabinetPrefix: "каб.",
            lessonWasRemoved: "<Пара была удалена>",
            nobody: "<Никто>",
            nothing: "<Ничего>",
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

          lessonsPage: {
            nothingHereMsg: "Добавьте предметы из которых можно будет <Link>составлять расписания</Link> на неделю"
          },
          ringsSchedulesPage: {
            nothingHereMsg: "Добавьте расписание звонков, что бы приложение могло понимать когда начинаются и кончаются пары"
          },
          composedSchedulesPage: {
            nothingHereMsg: "Составьте своё первое расписание на неделю используя созданные <RingsLink>расписания звонков</RingsLink> и <LessonsLink>карточки пар</LessonsLink>"
          },

          addLessonForm: {
            lessonNameInputCaption: "Название пары",
            lessonNameInputPlaceholder: "Основы алгоритмизации",
            teacherNameInputCaption: "Имя препода",
            teacherNameInputPlaceholder: "Иванов Иван Иванович",
            cabinetInputCaption: "Кабинет",
            cabinetInputPlaceholder: "302п"
          },
          addRingsScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Звонки на понедельник",
            startInputcaption: "Начало",
            endInputCaption: "Конец",
            dividerCaption: "{{value}}-я пара"
          },
          composeScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Верхняя неделя",
            ringsSchForThisDayInputCaption: "Расписание звонков для этого дня",
            nthLessonSelectCaption: "{{value}}-ая пара"
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

          select: {
            emptyPlaceholder: "<Пусто>",
            notSelectedPlaceholder: "<Не выбрано>"
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
            main: {
              title: "Menu",
              composed: "Composed schedules",
              rings: "Rings schedules",
              lessons: "Added lessons",
              settings: "Settings"
            },
            settings: {
              title: "Settings",
              language: "Language",
              rus: "Russiаn",
              eng: "English",

              theme: "Theme",
              dark: "Dark",
              light: "Light",

              impextTextareaTitle: "I/E created cards:",
              impextTextareaPaceholder: "Put here previously exported state",
              impextBtnImport: "Import",
              impextBtnExport: "Export",

              back: "Back =>"
            }
        },

          lessonCard: {
            cabinetPrefix: "cab.",
            lessonWasRemoved: "<Lesson was removed>",
            nobody: "<Nobody>",
            nothing: "<Nothing>",
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

          lessonsPage: {
            nothingHereMsg: "Add lesson cards which you can then use to <Link>compose schedules</Link> for the entire week"
          },
          ringsSchedulesPage: {
            nothingHereMsg: "Add a class schedule so the app can highlight current/next class on the timeline"
          },
          composedSchedulesPage: {
            nothingHereMsg: "Assemble your very first schedule using previously made <LessonsLink>lesson cards</LessonsLink> and <RingsLink>class schedules</RingsLink>"
          },

          addLessonForm: {
            lessonNameInputCaption: "Lesson name",
            lessonNameInputPlaceholder: "COBOL programming",
            teacherNameInputCaption: "Teacher's name",
            teacherNameInputPlaceholder: "Mr. Dickhead",
            cabinetInputCaption: "Cabinet",
            cabinetInputPlaceholder: "302" // <= should there be postfixes in English? 
          },
          addRingsScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Class schedule #1", // TODO: ??? 
            startInputcaption: "Start",
            endInputCaption: "End",
            dividerCaption: "Lesson #{{value}}"
          },
          composeScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Week Schedule #1", // TODO: ???
            ringsSchForThisDayInputCaption: "Rings schedule for this day",
            nthLessonSelectCaption: "Lesson #{{value}}"
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

          select: {
            emptyPlaceholder: "<Empty>",
            notSelectedPlaceholder: "<Not Selected>"
          },

          confirmPrompt: {
            deleteCard: "Are you sure you want to delete this card?"
          }
        }
      }
    }
  })

export default i18n
