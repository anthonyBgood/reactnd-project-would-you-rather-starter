import {RECEIVE_USERS} from '../actions/users'
import {SAVE_NEW_QUESTION} from '../actions/questions'


export default function users (state ={}, action){
  switch(action.type){
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case SAVE_NEW_QUESTION :

    //TODO: make this support the save new tweet process
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }

    default :
      return state
  }
}