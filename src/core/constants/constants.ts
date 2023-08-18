export const SWIPE_BOUND_PROCENTAGE = 20

export interface ILableConfig {
  left:  {
    caption: string,
    color: string
  },
  right: {
    caption: string,
    color: string
  }
}

export interface ILableConfigs {
  EDIT_DELETE: ILableConfig
}

export const lableConfigs = {
  EDIT_DELETE: {
    left: {
      caption: "Edit?",
      color: "#265ce8"
    },
    right: {
      caption: "Delete?",
      color: "#e82626"
    }
  }
}

export const LS_KEY = "cum"
export const MOCK_LESSONS = [
	{
		"cabinet": "111a",
		"teacher": "Ms. Smith",
		"title": "English Literature",
		"uid": "ab1-cd2"
	},
	{
		"cabinet": "222b",
		"teacher": "Mr. Johnson",
		"title": "World History",
		"uid": "ef3-gh4"
	},
	{
		"cabinet": "333c",
		"teacher": "Ms. Lee",
		"title": "Chemistry",
		"uid": "ij5-kl6"
	},
	{
		"cabinet": "444d",
		"teacher": "Mr. Davis",
		"title": "Algebra",
		"uid": "mn7-op8"
	},{
		"cabinet": "666f",
		"teacher": "Mr. Kim",
		"title": "Computer Programming",
		"uid": "uv11-wx12"
	},
	{
		"cabinet": "777g",
		"teacher": "Ms. Brown",
		"title": "Physical Education",
		"uid": "yz13-ab14"
	},
	{
		"cabinet": "888h",
		"teacher": "Mr. Singh",
		"title": "Calculus",
		"uid": "cd15-ef16"
	},
	{
		"cabinet": "999i",
		"teacher": "Ms. Garcia",
		"title": "Spanish Language",
		"uid": "gh17-ij18"
	},
	{
		"cabinet": "101j",
		"teacher": "Mr. Chen",
		"title": "Physics",
		"uid": "kl19-mn20"
	},
	{
		"cabinet": "???",
		"teacher": "<Никто>",
		"title": "<Ничего>",
		"uid":"hidden"
	}
]

export const MOCK_RINGS = [
	{
		"name": "Rings Schedule #1",
		"rings": [
			{"start": "08:00", "end": "09:30"},
			{"start": "10:00", "end": "11:30"},
			{"start": "12:00", "end": "13:30"},
			{"start": "14:00", "end": "15:30"}
		],
		"uid": "ab12-cd34"
	},
	{
		"name": "Rings Schedule #2",
		"rings": [
			{"start": "09:00", "end": "10:30"},
			{"start": "11:00", "end": "12:30"},
			{"start": "13:00", "end": "14:30"},
			{"start": "15:00", "end": "16:30"}
		],
		"uid": "ef56-gh78"
	},
	{
		"name": "Rings Schedule #3",
		"rings": [
			{"start": "08:30", "end": "10:00"},
			{"start": "10:30", "end": "12:00"},
			{"start": "12:30", "end": "14:00"},
			{"start": "14:30", "end": "16:00"}
		],
		"uid": "ij90-kl12"
	},
	{
		"name": "Rings Schedule #4",
		"rings": [
			{"start": "09:30", "end": "11:00"},
			{"start": "11:30", "end": "13:00"},
			{"start": "13:30", "end": "15:00"},
			{"start": "15:30", "end": "17:00"}
		],
		"uid": "mn34-op56"
	},
	{
		"name": "Rings Schedule #5",
		"rings": [
			{"start": "08:15", "end": "09:45"},
			{"start": "10:15", "end": "11:45"},
			{"start": "12:15", "end": "13:45"},
			{"start": "14:15", "end": "15:45"}
		],
		"uid": "qr78-st90"
	}
]