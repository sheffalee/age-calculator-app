import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="form-group">
        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <p className="result">Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;
