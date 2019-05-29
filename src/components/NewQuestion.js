import React, { Component } from 'react'
import {connect} from 'react-redux'



class NewQuestion extends Component {


  state ={
    optionOne: '',
    optionTwo: '', 
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

    const {optionOne, optionTwo} = this.state
    dispatch(handleNewQuestion({
      
      optionOneText: optionOne, 
      optionTwoText: optionTwo, 
      author: authedUser
      }))

    
  }

  render(){



    return(

      <div className='base-component'>

        <form className='form-base-component' onSubmit ={this.handleSubmit}>

          <label for="optionOne">Option One</label>
          <input 
            onChange={this.handleChange}
            className='inputItems' 
            type="text" id='optionOne' 
            name='optionOne' 
            placeholder='enter option one' >

            </input>

          <label for="optionTwo">Option Two</label>
          <input 
            onChange={this.handleChange}
            className='inputItems' 
            type="text" 
            id='optionTwo' 
            name='optionTwo' 
            placeholder='enter option two' ></input>

          <button type='submit' className='inputItems'>
            Submit
          </button>
        </form>

      </div>


    )
  }
}

export default connect()(NewQuestion)

