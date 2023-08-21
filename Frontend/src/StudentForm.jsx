import React, { useState } from 'react';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classValue, setClassValue] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any further actions with the captured student information here
    console.log('Student Information:', { name, dob, classValue, division, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          pattern="[A-Za-z\s]+"
          required
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={handleDobChange}
          required
        />
      </div>
      <div>
        <label htmlFor="class">Class:</label>
        <select id="class" value={classValue} onChange={handleClassChange} required>
          <option value="">Select Class</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="XI">XI</option>
          <option value="XII">XII</option>
        </select>
      </div>
      <div>
        <label htmlFor="division">Division:</label>
        <select id="division" value={division} onChange={handleDivisionChange} required>
          <option value="">Select Division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={handleGenderChange}
            required
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={handleGenderChange}
            required
          />
          Female
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;