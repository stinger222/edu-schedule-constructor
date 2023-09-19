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
            classSchedulesPage: "Расписания звонков",
            composedPage: "Составленные расписания",
            editLesson: "Редактировать предмет",
            editClassSchedule: "Редактировать расписание",
            editComposedSchedule: "Редактировать расписане",
            addLesson: "Добавить предмет",
            addClassSchedule: "Добавить расписание звонков",
            addComposedSchedule: "Составить новое расписание"
          },
          dropdown: {
            main: {
              title: "Меню",
              composed: "Составленные расписания",
              classSchedules: "Расписания звонков",
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
              removeStoredDataBtn: "Удалить все карточки",
              removeStoredDataConfirm: "Вы уверены, что хотите удалить ВСЕ созданные/импортированные ранее карточки?\n\nуу, страшно? :D",

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
          classScheduleCard: {
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
          classSchedulesPage: {
            nothingHereMsg: "Добавьте расписание звонков, что бы приложение могло понимать когда начинаются и кончаются пары"
          },
          composedSchedulesPage: {
            nothingHereMsg: "Составьте своё первое расписание на неделю используя созданные <ClassSchLink>расписания звонков</ClassSchLink> и <LessonsLink>карточки пар</LessonsLink>"
          },

          addLessonForm: {
            lessonNameInputCaption: "Название пары",
            lessonNameInputPlaceholder: "Основы алгоритмизации",
            teacherNameInputCaption: "Имя препода",
            teacherNameInputPlaceholder: "Иванов Иван Иванович",
            cabinetInputCaption: "Кабинет",
            cabinetInputPlaceholder: "302п"
          },
          addClassScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Звонки на понедельник",
            startInputcaption: "Начало",
            endInputCaption: "Конец",
            dividerCaption: "{{value}}-я пара"
          },
          composeScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Верхняя неделя",
            classSchForThisDayInputCaption: "Расписание звонков для этого дня",
            nthLessonSelectCaption: "{{value}}-ая пара"
          },

          button: {
            done: "Готово"
          },
          ghostButton: {
            addLesson: "Добавить предмет",
            addClassSchedule: "Добавить расписание звонков",
            composeNewSchedule: "Составить новое расписание",
            fillScheduleFor: "Заполнить расписание на",
            addNthLesson: "Добавить {{value}}-ую пару"
          },

          emptyDayErr: {
            header: "Ура!",
            caption: "На сегодня ничего OwO"
          },
          warning: {
            header: "Внимание!"
          },
          error: {
            header: "Ошибка"
          },
          fatalError: {
            header: "Фатальная ошибка",
            message: "Судя по всему что-то сломалось, и скорее всего это вызвано повреждением импортированной информации <i>(ну или кто-то лазил своими шаловливыми ручками где не надо -_-)</i><br/><br/>Во всяком случае, что бы это починить, скорее всего придётся удалить все сохранённые карточки, Вы можете сделать это в меню настроек"
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
            classSchedulesPage: "Class schedules",
            composedPage: "Composed schedules",
            editLesson: "Edit lesson",
            editClassSchedule: "Edit schedule",
            editComposedSchedule: "Edit schedule",
            addLesson: "Add new lesson",
            addClassSchedule: "Add class schedule",
            addComposedSchedule: "Compose new schedule"
          },
          dropdown: {
            main: {
              title: "Menu",
              composed: "Composed schedules",
              classSchedules: "Class schedules",
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
              impextTextareaPaceholder: "Put here previously exported data",
              impextBtnImport: "Import",
              impextBtnExport: "Export",
              removeStoredDataBtn: "Clear stored data",
              removeStoredDataConfirm: "Are you sure you want to delete ALL information stored in the app?",

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
          classScheduleCard: {
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
          classSchedulesPage: {
            nothingHereMsg: "Add a class schedule so the app can highlight current/next class on the timeline"
          },
          composedSchedulesPage: {
            nothingHereMsg: "Assemble your very first schedule using previously made <LessonsLink>lesson cards</LessonsLink> and <ClassSchLink>class schedules</ClassSchLink>"
          },

          addLessonForm: {
            lessonNameInputCaption: "Lesson name",
            lessonNameInputPlaceholder: "COBOL programming",
            teacherNameInputCaption: "Teacher's name",
            teacherNameInputPlaceholder: "Mr. Dickhead",
            cabinetInputCaption: "Cabinet",
            cabinetInputPlaceholder: "302" // <= should there be postfixes in English? 
          },
          addClassScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Class schedule #1", // TODO: ??? 
            startInputcaption: "Start",
            endInputCaption: "End",
            dividerCaption: "Lesson #{{value}}"
          },
          composeScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Week Schedule #1", // TODO: ???
            classSchForThisDayInputCaption: "Class schedule for this day",
            nthLessonSelectCaption: "Lesson #{{value}}"
          },

          button: {
            done: "Done"
          },
          ghostButton: {
            addLesson: "Add new lesson",
            addClassSchedule: "Add class schedule",
            composeNewSchedule: "Compose new schedule",
            fillScheduleFor: "Compose schedule for",
            addNthLesson: "Add lesson #{{value}}"
          },
          
          emptyDayErr: {
            header: "Got Lucky!",
            caption: "Nothing for today :D" // TODO: rename to "message"
          },
          warning: {
            header: "Warning!"
          },
          error: {
            header: "An Error occurred"
          },
          fatalError: {
            header: "Fatal Error",
            message: "Looks like app completely broken, this is most likely caused by import of corrupted data.<br/><br/>To fix that, consider clearing all stored data, you can do that in the <i>settings menu</i>"
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
