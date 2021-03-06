const defaultState = {
  history: null,
  user: null,
  lessons: [],
  myLessons: [],
  editProfile: false,
  pickedLesson: null,
  editingLesson: false,
  replaceFile: false
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_HISTORY':
      return {...state, history: action.payload}
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'SET_MY_LESSONS':
      return {...state, myLessons: action.payload}
    case 'ADD_NEW_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_PICKED_LESSON':
      return {...state, pickedLesson: action.payload}
    case 'DELETE_LESSON':
      return {...state, lessons: [...state.lessons.filter(lesson => lesson.lesson_data.id !== action.payload.id)]}
    case 'SHOW_EDIT_PROFILE_FORM':
      return {...state, editProfile: true}
    case 'HIDE_EDIT_PROFILE_FORM':
      return {...state, editProfile: false}
    case 'SHOW_EDIT_LESSON_FORM':
      return {...state, editingLesson: true}
    case 'HIDE_EDIT_LESSON_FORM':
      return {...state, editingLesson: false}
    case 'SHOW_REPLACE_FILE_FIELD':
      return {...state, replaceFile: true}
    case 'HIDE_REPLACE_FILE_FIELD':
      return {...state, replaceFile: false}
    default:
      return state
  }
}
