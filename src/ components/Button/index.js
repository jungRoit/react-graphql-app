import React from 'react';
import './style.css';

const Button = props => {

  return (
    <button type={props.type || 'submit'} className="button" style={{
      backgroundColor: props.backgroundColor || '#fddb3a',
      color: props.color || '#52575d'
    }}>
    {props.text}
    </button>
  )
}

export default Button;