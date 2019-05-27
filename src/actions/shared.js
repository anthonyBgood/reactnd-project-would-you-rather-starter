import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
//import addAuthedUser from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

//TODO: change to login process
//const AUTHED_ID = 'tylermcginnis'


export function handleInitialData (users, questions){
  return(
    (dispatch) =>{

      dispatch(showLoading())
      return getInitialData()
        .then(
          ({users, questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            //dispatch(addAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
          })
    }
  )

}