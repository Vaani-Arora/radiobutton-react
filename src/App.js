
import './App.css';
import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

function App() {

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="App">
      <RadioGroup options={options} defaultValue={selectedOption} onChange={handleOptionChange} />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default App;
