import React, { useState } from 'react';
import './style.css';

function Converter() {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalResult, setDecimalResult] = useState('');

  function handleInputChange(e) {
    setBinaryInput(e.target.value);
  }

  function ConvertValue() {
    // Validation (basic)
    if (binaryInput.length === 0) {
      setDecimalResult("Input can't be empty");
      return;
    }

    if (!/^[01]+$/.test(binaryInput)) {
      setDecimalResult("Input must contain only 0s and 1s");
      return;
    }

    // Conversion
    const decimal = parseInt(binaryInput, 2);
    setDecimalResult(decimal);
  }

  return (
    <div className='converter-box'>
      <h1>Convert from Binary to Decimal</h1> <br />

      <input
        type="text"
        placeholder="Enter Binary Number here only 0s and 1s"
        maxLength={8}
        onChange={handleInputChange}
      />

      <p>
        {binaryInput.length === 0 ? "Input can't be empty" : ""}
      </p>

      <button onClick={ConvertValue}>Convert</button> <br />

      <h2>Result will be displayed here: {decimalResult}</h2><br />
    </div>
  );
}

export default Converter;
