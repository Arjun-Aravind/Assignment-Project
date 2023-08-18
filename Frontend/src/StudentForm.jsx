import React, { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classValue, setClassValue] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      name,
      dob,
      class: classValue,
      division,
      gender,
    };
    onSubmit(student);
    setName('');
    setDob('');
    setClassValue('');
    setDivision('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="class">Class:</label>
        <select
          id="class"
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
          required
        >
          <option value="">Select Class</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="V1">V1</option>
          <option value="V11">V11</option>
          <option value="V111">V111</option>
          <option value="1X">1X</option>
          <option value="X">X</option>
          <option value="X11">X11</option>
          <option value="X12">X12</option>
        </select>
      </div>
      <div>
        <label htmlFor="division">Division:</label>
        <select
          id="division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
        >
          <option value="">Select Division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;