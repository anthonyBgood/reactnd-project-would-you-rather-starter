import {RECEIVE_USERS} from '../actions/users'
import {SAVE_NEW_QUESTION, SAVE_QUESTION_PREFERENCE} from '../actions/questions'


export default function users (state ={}, action){
  switch(action.type){
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case SAVE_NEW_QUESTION :
        return {
          ...state,
          [action.question.author]: {
            ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
          }
        }

      case SAVE_QUESTION_PREFERENCE :
          const { authedUser, qid, answer } = action.info
          return{

            ...state,
            [authedUser]: {
              ...state[authedUser],
              answers: {
                ...state[authedUser].answers,
                [qid]: answer
              }
            }
          }

    default :
      return state
  }
}