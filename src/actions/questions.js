import { showLoading, hideLoading } from 'react-redux-loading'
import { saveNewQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION' 


export function receiveQuestions (questions){
  return {
    type: RECEIVE_QUESTIONS, 
    questions,
  }
}

export function saveQuestionInState(question){
  return{
    type: SAVE_NEW_QUESTION,
    question,
  }
}


export function handleNewQuestion(question){

  return (dispatch) =>{

    dispatch(showLoading())

    return saveNewQuestion({question})
      .then((question)=>(dispatch(saveQuestionInState(question))))
      .then(()=>(dispatch(hideLoading)))


}