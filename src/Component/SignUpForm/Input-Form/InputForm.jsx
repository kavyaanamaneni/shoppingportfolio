import React from 'react'
import "./InputForm.css";
const InputForm = ({label,...otherProps}) => {
  return (
    <div className='group'>
      <input  className='form-input' {...otherProps}/>
      {label&& (<label className={`${otherProps.value.length?"shrink":null} form-input-label`}>
     {label}</label>)}
      
    </div>
  )
}

export default InputForm;
