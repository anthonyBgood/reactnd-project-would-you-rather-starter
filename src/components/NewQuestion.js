import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleNewQuestion} from '../actions/questions' 



class NewQuestion extends Component {


  state ={
    
    optionOneText: '', 
    optionTwoText: '',
  }


  handleChange = (e) => {

    const text = e.target.value
    const name = e.target.name
    let newState = {}
    newState[name]= text

    this.setState(() => (newState))

  }

  handleSubmit = (e) =>{
    //TODO: functionality for new question 
    
    e.preventDefault()

    const { dispatch, authedUser } = this.props
    const {optionOneText, optionTwoText} = this.state

    
    dispatch(handleNewQuestion({
      
      optionOneText , 
      optionTwoText , 
      author: authedUser ,
      }))

    
  }

  render(){



    return(

      <div className='base-component'>

        <form className='form-base-component' onSubmit ={this.handleSubmit}>

          <label for="optionOneText">Option One</label>
          <input 
            onChange={this.handleChange}
            className='inputItems' 
            type="text" id='optionOneText' 
            name='optionOneText' 
            placeholder='enter option one' >

            </input>

          <label for="optionTwoText">Option Two</label>
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
  return{authedUser}
}


export default connect(mapStateToProps)(NewQuestion)

