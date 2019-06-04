import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

//DEV: change to login process
import {addAuthedUser} from '../actions/authedUser'
//const AUTHED_ID = 'sarahedo' //tylermcginnis'
const AUTHED_ID = null

export function handleInitialData (users, questions){
  return(
    (dispatch) =>{

      dispatch(showLoading())
      return getInitialData()
        .then(
          ({users, questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            AUTHED_ID !== null && dispatch(addAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
          })
    }
  )

}