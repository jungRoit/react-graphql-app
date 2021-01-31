import React from 'react';
import './style.css';

const Dropdown = (props) => {
  return (
    <div className="dropdown-box">
      <select onChange={props.onChange} className="dropdown-select">
        {props.options.map(item => (
          <option className="dropdown-option"value={item.value}>
          {item.label}
        </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;