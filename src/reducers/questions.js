import {RECEIVE_QUESTIONS, SAVE_NEW_QUESTION} from '../actions/questions'


export default function questions (state ={}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case SAVE_NEW_QUESTION :
      return{
        ...state ,
        [action.question.id]: action.question ,
      }

    default :
      return state
  }
}