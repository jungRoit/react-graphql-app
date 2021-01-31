import React from 'react';
import './style.css';

const FormInput = (props) => {
  return (
    <div className="form-element">
      <span className="form-element-input-wrapper">
      <img src={props.icon} className="form-input-icon" alt="icon" />
      <input
        onChange={props.onChange}
        type={props.type || 'text'}
        className="form-element-input"
        name={props.name}
        value={props.value}
      />
      </span>

    </div>
  );
};

export default FormInput;
