const defaultState = {
  history: null,
  user: null,
  lessons: [],
  pickedLesson: null,
  editingLesson: false
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_HISTORY':
      return {...state, history: action.payload}
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_NEW_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_PICKED_LESSON':
      return {...state, pickedLesson: action.payload}
    case 'DELETE_LESSON':
      return {...state, lessons: [...state.lessons.filter(lesson => lesson.lesson_data.id !== action.payload.id)]}
    case 'SHOW_EDIT_LESSON_FORM':
      return {...state, editingLesson: true}
    case 'HIDE_EDIT_LESSON_FORM':
      return {...state, editingLesson: false}
    default:
      return state
  }
}
