import React from 'react';

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onClick={props.handleClick}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
      />
    </>
  )
}

export default Input;