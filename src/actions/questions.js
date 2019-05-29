import { showLoading, hideLoading } from 'react-redux-loading'
import { saveNewQuestion , saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION' 
export const SAVE_QUESTION_PREFERENCE = 'SAVE_QUESTION_PREFERENCE'

export const  OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'


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

export function savePreferenceToState(info){
  return{
    type: SAVE_QUESTION_PREFERENCE ,
    info,
  }
}


export function handleNewQuestion(question){

  return (dispatch) =>{

    dispatch(showLoading())

    return saveNewQuestion(question)
      .then((question)=>(dispatch(saveQuestionInState(question))))
      .then(()=>(dispatch(hideLoading())))
  }
}

export function handlePreferenceRecord(info){
  return (dispatch) =>{

    //TODO: change to suit async - make a unroll action to deal with failure

    return saveQuestionAnswer(info)
      .then(()=>(dispatch(savePreferenceToState(info))))
  }
}