import React, { useState } from 'react';

function RadioGroup(props) {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <div>
      {props.options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;