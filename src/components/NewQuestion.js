import React, { Component } from 'react'
import {connect} from 'react-redux'
//import { Redirect } from 'react-router-dom'

import {handleNewQuestion} from '../actions/questions' 



class NewQuestion extends Component {


  state ={
    
    optionOneText: '', 
    optionTwoText: '',
  }


  handleChange = (e) => {

    const text = e.target.value
    const nameOfTheInputSource = e.target.name
    let newState = {}
    newState[nameOfTheInputSource]= text

    this.setState(() => (newState))

  }

  handleSubmit = (e) =>{
    
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const {optionOneText, optionTwoText} = this.state

    
    dispatch(handleNewQuestion({
      
      optionOneText , 
      optionTwoText , 
      author: authedUser ,
      }))


      this.props.history.push('/')

    
  }

  render(){

    // handle not logged in
    if(!(this.props.loggedIn)){
      this.props.history.push('/authenticate/' )
    }



    return(

      <div className='base-component'>

        <form className='form-base-component' onSubmit ={this.handleSubmit}>

          <label htmlFor="optionOneText">Option One</label>
          <input 
            onChange={this.handleChange}
            className='inputItems' 
            type="text" id='optionOneText' 
            name='optionOneText' 
            placeholder='enter option one' >

            </input>

          <label htmlFor="optionTwoText">Option Two</label>
          <input 
            onChange={this.handleChange}
            className='inputItems' 
            type="text" 
            id='optionTwoText' 
            name='optionTwoText' 
            placeholder='enter option two' ></input>

          <button type='submit' className='inputItems'>
            Submit
          </button>
        </form>

      </div>


    )
  }
}

function mapStateToProps(state){

  const {authedUser } = state
  return{
    authedUser,
    loggedIn: authedUser !== null , 
  }
}


export default connect(mapStateToProps)(NewQuestion)

