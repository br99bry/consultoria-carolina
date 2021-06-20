import React from 'react';

import './styles/Button.scss';

const Button = (props) =>{
  return (
    <div className="Button">
      <p> {props.message} </p>
    </div>
  )
}

export default Button;