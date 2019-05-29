import React, { Component } from 'react'



class NewQuestion extends Component {


  handleSubmit = () =>{
    //TODO: functionality for new question 
  }

  render(){



    return(

      <div className='base-component'>

        <form className='form-base-component' onSubmit ={this.handleSubmit}>

          <label for="optionOne">Option One</label>
          <input className='inputItems' type="text" id='optionOne' name='optionOne' placeholder='enter option one' ></input>

          <label for="optionTwo">Option Two</label>
          <input className='inputItems' type="text" id='optionTwo' name='optionTwo' placeholder='enter option two' ></input>

          <button type='submit' className='inputItems'>
            Submit
          </button>
        </form>

      </div>


    )


  }
}

export default NewQuestion

