import React from "react";
import {addNameCreator} from "../../redux/formReducer";


const Form = (props) => {

  const onChangeTextValue = (e) => {
    let bodyText = e.target.value
      props.state.newName = bodyText
  }
  const addName = (text) => {
    props.store.dispatch(addNameCreator(text))

      console.log(props.state)
  }


  return(
      <div>
          <input className='input' onChange={onChangeTextValue} value={props.newName}/>
          <button className='btn' onClick={addName}>Add</button>
      </div>
  )
}

export default Form;