import React from 'react'
import { Button } from 'react-bootstrap';

const BasicButton = (props) => {
  return (
    <>
      <Button type={props.type} size={props.size} onClick={props.handleClick} style={props.style} className={props.className} variant={props.variant}>{props.value}</Button>
    </>
  )
}

export default BasicButton;