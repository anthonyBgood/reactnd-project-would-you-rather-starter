import {RECEIVE_QUESTIONS, SAVE_NEW_QUESTION, SAVE_QUESTION_PREFERENCE} from '../actions/questions'


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

    case SAVE_QUESTION_PREFERENCE :
      const { authedUser, qid, answer } = action.info
      return{
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.concat([authedUser])
            }
          
        }

      }

    default :
      return state
  }
}