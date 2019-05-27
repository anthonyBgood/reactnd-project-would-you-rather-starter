export const SET_AUTHED_USER  = 'AUTHED_USER'

export default function addAuthedUser (id){
  return{
    type: SET_AUTHED_USER ,
    id,
  }
}

