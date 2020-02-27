import React from 'react'
import { Button } from 'react-bootstrap';

const BasicButton = (props) => {
  const button = []
  if (props.disabled && props.block) {
    button.push(<Button key={props.value} type={props.type} size={props.size} onClick={props.handleClick} style={props.style} className={props.className} variant={props.variant} block disabled>{props.value}</Button>)
  } else if (props.disabled) {
    button.push(<Button key={props.value} type={props.type} size={props.size} onClick={props.handleClick} style={props.style} className={props.className} variant={props.variant} disabled>{props.value}</Button>)
  } else if (props.block) {
    button.push(<Button key={props.value} type={props.type} size={props.size} onClick={props.handleClick} style={props.style} className={props.className} variant={props.variant} block>{props.value}</Button>)
  } else {
    button.push(<Button key={props.value} type={props.type} size={props.size} onClick={props.handleClick} style={props.style} className={props.className} variant={props.variant}>{props.value}</Button>)
  }
  return (
    <>
      {button}
    </>
  )
}

export default BasicButton;