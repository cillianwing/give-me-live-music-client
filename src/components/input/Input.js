import React from 'react';

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      {props.required ? 
        <input
        className={props.className}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onClick={props.handleClick}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
        required
        /> : 
        <input
        className={props.className}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onClick={props.handleClick}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
        />}

    </>
  )
}

export default Input;