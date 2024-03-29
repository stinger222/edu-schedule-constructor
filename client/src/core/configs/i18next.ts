import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.NODE_ENV === "development",
    detection: {
      convertDetectedLanguage: (lng: string) => lng.split("-")[0]
    },
    fallbackLng: "ru",
    resources: {
      ru: {
        translation: {
          headerTitle: {
            classesPage: "Добавленные предметы",
            classSchedulesPage: "Расписания звонков",
            assembledPage: "Составленные расписания",
            editClass: "Редактировать предмет",
            editClassSchedule: "Редактировать расписание",
            editAssembledSchedule: "Редактировать расписание",
            addClass: "Добавить предмет",
            addClassSchedule: "Добавить расписание звонков",
            addAssembledSchedule: "Составить новое расписание"
          },
          dropdown: {
            main: {
              title: "Меню",
              assembled: "Составленные расписания",
              classSchedules: "Расписания звонков",
              classes: "Добавленные предметы",
              settings: "Настройки",
              signOut: "Выйти"
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
              impextTextareaPaceholder: "Вставьте сюда экспортированный ранее текст",
              impextBtnImport: "Импорт",
              impextBtnExport: "Экспорт",
              removeStoredDataBtn: "Удалить все карточки",
              removeStoredDataConfirm: "Вы уверены, что хотите удалить ВСЕ созданные/импортированные ранее карточки?\n\nуу, страшно? :D",

              back: "Назад =>"
            }
          },

          classCard: {
            cabinetPrefix: "каб.",
            classWasRemoved: "<Пара была удалена>",
            nobody: "<Никто>",
            nothing: "<Ничего>",
            noCabinet: "???"

          },
          classScheduleCard: {
            classesAmount: "Пар -",
            start: "Начало -",
            end: "Конец -"
          },
          assembledScheduleCard: {
            classesAmount: "Пар",
            start: "Начало",
            end: "Конец"
          },

          classesPage: {
            nothingHereMsg: "Создайте карточки предметов, из которых можно будет <Link>составлять расписания</Link> на неделю"
          },
          classSchedulesPage: {
            nothingHereMsg: "Добавьте расписание звонков, что бы приложение могло понимать когда начинаются и кончаются занятия"
          },
          assembledSchedulesPage: {
            nothingHereMsg: "Составьте своё первое расписание на неделю используя созданные <ClassSchLink>расписания звонков</ClassSchLink> и <ClassesLink>карточки занятий</ClassesLink>"
          },
          signInPage: {
            troubleshooting: "Если возникнут трудности, то можете <br /> ознакомиться с гайдом <a>здесь</a></p>",
            sourceCodeAndDetails: "Исходный код приложения, более подробное <br /> описание фич и информация об авторе доступны на <br /> <a>GitHub</a>",
            signInWith: "Войдите с помощью"
          },

          addClassForm: {
            classNameInputCaption: "Название пары",
            classNameInputPlaceholder: "Основы алгоритмизации",
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
          assembleScheduleForm: {
            schNameInputCaption: "Название расписания",
            schNameInputPlaceholder: "Верхняя неделя",
            classSchForThisDayInputCaption: "Расписание звонков для этого дня",
            nthClassSelectCaption: "{{value}}-ая пара"
          },
          authForm: {
            loginHeader: "Войти",
            registerHeader: "Регистрация",
            username: "Логин",
            password: "Пароль",
            confirmPassword: "Подтвердите пароль",
            noAccountYet: "Ещё не зарегистрировались?"
          },

          button: {
            done: "Готово",
            submit: "Готово"
          },
          ghostButton: {
            addClass: "Добавить предмет",
            addClassSchedule: "Добавить расписание звонков",
            assembleNewSchedule: "Составить новое расписание",
            fillScheduleFor: "Заполнить расписание на",
            addNthClass: "Добавить {{value}}-ую пару"
          },

          dayOffException: {
            header: "Ура!",
            message: "На сегодня ничего :D"
          },
          warningException: {
            header: "Внимание",
            messages: {
              noAssembledShcedules: "Вы ещё не составили ни одного расписания на неделю\n\nВы можете сделать это в меню"
            }
          },
          errorException: {
            header: "Ошибка",
            messages: {
              refferingDeletedClassSchedule: "Этот день в расписании \"{{scheduleName}}\", ссылается на расписание звонков, которое было удалено!\n\nЧто-бы исправить это, отредактируйте расписание \"{{scheduleName}}\" и укажите для этого дня существующее расписание звонков\n\nДля редактирования просто смахните карточку расписания вправо"
            }
          },
          fatalErrorException: {
            header: "Фатальная ошибка",
            messages: {
              notSureWhatHappened: "Судя по всему что-то сломалось, с чем это связано сказть сложно, но скорее всего это проблема на стороне сервера :("
            }
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
            classesPage: "Added classes",
            classSchedulesPage: "Class schedules",
            assembledPage: "Assembled schedules",
            editClass: "Edit class",
            editClassSchedule: "Edit class schedule",
            editAssembledSchedule: "Edit schedule",
            addClass: "Add new class",
            addClassSchedule: "Add class schedule",
            addAssembledSchedule: "Assemble new schedule"
          },
          dropdown: {
            main: {
              title: "Menu",
              assembled: "Assembled schedules",
              classSchedules: "Class schedules",
              classes: "Added classes",
              settings: "Settings",
              signOut: "Sign Out"
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

          classCard: {
            cabinetPrefix: "cab.",
            classWasRemoved: "<Class was removed>",
            nobody: "<Nobody>",
            nothing: "<Nothing>",
            noCabinet: "???"

          },
          classScheduleCard: {
            classesAmount: "Classes -",
            start: "Start -",
            end: "End -"
          },
          assembledScheduleCard: {
            classesAmount: "Classes",
            start: "Start",
            end: "End"
          },

          classesPage: {
            nothingHereMsg: "Add class cards, which you can then use to <Link>assemble schedules</Link> for the entire week"
          },
          classSchedulesPage: {
            nothingHereMsg: "Add a class schedule so the app can highlight the current/next class on the timeline"
          },
          assembledSchedulesPage: {
            nothingHereMsg: "Assemble your very first schedule using previously made <ClassesLink>class cards</ClassesLink> and <ClassSchLink>class schedules</ClassSchLink>"
          },
          signInPage: {
            troubleshooting: "Have any questions about app functionality? <br /> Then check out guide <a>here</a></p>",
            sourceCodeAndDetails: "Source code, more detailed <br /> features description and info about author <br /> is available on <br /> <a>GitHub</a>",
            signInWith: "Sign in with"
          },

          addClassForm: {
            classNameInputCaption: "Class name",
            classNameInputPlaceholder: "COBOL programming, idk",
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
            dividerCaption: "Class #{{value}}"
          },
          assembleScheduleForm: {
            schNameInputCaption: "Schedule name",
            schNameInputPlaceholder: "Week Schedule #1", // TODO: ???
            classSchForThisDayInputCaption: "Class schedule for this day",
            nthClassSelectCaption: "Class #{{value}}"
          },
          authForm: {
            loginHeader: "Login",
            registerHeader: "Register",
            username: "Username",
            password: "Password",
            confirmPassword: "Confirm Password",
            noAccountYet: "Doesn't have an accout yet?"
          },

          button: {
            done: "Done",
            submit: "Submit"
          },
          ghostButton: {
            addClass: "Add new class",
            addClassSchedule: "Add class schedule",
            assembleNewSchedule: "Assemble new schedule",
            fillScheduleFor: "Assemble schedule for",
            addNthClass: "Add class #{{value}}"
          },
          
          dayOffException: {
            header: "Got Lucky!",
            message: "Nothing for today :D"
          },
          warningException: {
            header: "Warning!",
            messages: {
              noAssembledShcedules: "You didn't assembled any schedules for the week yet!\n\nYou can do that in the menu"
            }
          },
          errorException: {
            header: "An Error occurred",
            messages: {
              refferingDeletedClassSchedule: "This day in \"{{scheduleName}}\" assembled schedule is refering to class schedule that was deleted!\n\nTo fix that, change class schedule for this day in \"{{scheduleName}}\" assembled schedule to existing one.\n\nYou can do that by swiping mentioned assembled schedule card to the right in:\nMenu > Assembled Schedules"
            }
          },
          fatalErrorException: {
            header: "Fatal Error",
            messages: {
              notSureWhatHappened: "Looks like something is broken, not sure what and why, but most likely problem is on the server side :("
            }
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
