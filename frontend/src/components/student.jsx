import axios from "axios";
import { useEffect, useState } from "react";

function Student() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classValue, setClassValue] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState(''); 
  const [students, setUsers] = useState([]);
  const [error, setError] = useState('');
  // eslint-disable-next-line
  const [submitting, setSubmitting] = useState(false);

  const classOptions = [
    'I', 'II', 'III', 'IV', 'V', 'V1', 'V11', 'V111',
    '1X', 'X', 'X11', 'X12'
  ];

  const divisionOptions = ['A', 'B', 'C'];

  useEffect(() => {
    if (!name.match(/^[A-Za-z\s]+$/)) {
      setError('Name should contain only letters and spaces');
    } else if (!dob) {
      setError('Please select a Date of Birth');
    } else if (!classValue) {
      setError('Please select a Class');
    } else if (!division) {
      setError('Please select a Division');
    } else if (!gender) {
      setError('Please select a Gender');
    } else {
      setError('');
    }
  }, [name, dob, classValue, division, gender]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    setSubmitting(true);
    // Perform form submission or other actions
  };

  // Load student data using useEffect
  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://localhost:8080/api/v1/students");
      setUsers(result.data);
      console.log(result.data);
    } catch (err) {
      console.error("Error loading students:", err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/students", {
        name: name,
        dob: dob,
        classValue: classValue,
        division: division,
        gender: gender,
      });
      alert("Student Registration Successfull");
      setName("");
      setDob("");
      setClassValue("");
      setDivision("");
      setGender("");
      Load();
    } catch (err) {
      alert("Student Registration Failed");
    }
  }


   return (
    <div>
      <h1>Student Registration Form</h1>
      <div class="container mt-4" ></div>
      <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Name: &nbsp;</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="[A-Za-z\s]+"
          required
        />
        </div>
        <br/>

        <div class="form-group"></div>
        <label>Date of Birth:&nbsp;</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <div class="form-group">
            <br/>
        <label>Class:&nbsp;</label>
        <select
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
          required
        >
          <option value="">Select Class</option>
          {classOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
        <br/>

        <div class="form-group"></div>
        <label>Division:&nbsp;</label>
        <select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
        >
          <option value="">Select Division</option>
          {divisionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        

        <div class="form-group"></div>
        <br/>
        <label>Gender:&nbsp;</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          Male &nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />
          Female
        </label>
        <br/>
            {error && <p className="error">{error}</p>}
            <div class="form-group"></div>  
            <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
      </form>
      <br/>
      <br/>

        <div class="container">
      <table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Admission Number</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Class</th>      
      <th scope="col">Division</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    {students.sort((a, b) => a.name.localeCompare(b.name)).map(function fn(student) {
      return (
        <tr key={student.admissionNumber}>
          <td>{student.name}</td>
          <td>{student.admissionNumber}</td> 
          <td>{student.dob}</td>
          <td>{student.classValue}</td>
          <td>{student.division}</td>
          <td>{student.gender}</td>          
        </tr>
      );
    })}
  </tbody>
</table>
</div>

    </div>
    

            
  );
};
export default Student;
