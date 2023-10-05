import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Student() {
  // State variables for form inputs and data
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [classValue, setClassValue] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");
  const [students, setStudents] = useState([]);
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line
  const [submitting, setSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Options for class and division select inputs
  const classOptions = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "V1",
    "V11",
    "V111",
    "1X",
    "X",
    "X11",
    "X12",
  ];

  const divisionOptions = ["A", "B", "C"];

  useEffect(() => {
    const validationErrors = {};

    if (name && !name.match(/^[A-Za-z\s]+$/)) {
      validationErrors.name = "Name should contain only letters and spaces";
    }

    if (dob && !dob) {
      validationErrors.dob = "Please select a Date of Birth";
    }

    if (classValue && !classValue) {
      validationErrors.classValue = "Please select a Class";
    }

    if (division && !division) {
      validationErrors.division = "Please select a Division";
    }

    if (gender && !gender) {
      validationErrors.gender = "Please select a Gender";
    }

    setErrors(validationErrors);
  }, [name, dob, classValue, division, gender]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      // Perform form submission or other actions
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
      setStudents(result.data);
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
      setRegistrationSuccess(true);
      Load();
    } catch (err) {
      alert("Student Registration Failed");
    }
  }

  return (
    <div className="form">
      <h1>Student Registration Form</h1>
      <br />
      <div className="container mt-4"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: &nbsp;</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <br />

        <div className="form-group"></div>
        <label>Date of Birth:&nbsp;</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        {errors.dob && <p className="error">{errors.dob}</p>}

        <div className="form-group">
          <br />
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
          {errors.classValue && <p className="error">{errors.classValue}</p>}
        </div>
        <br />

        <div className="form-group"></div>
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
        {errors.division && <p className="error">{errors.division}</p>}

        <div className="form-group"></div>
        <br />
        <label>Gender:&nbsp;</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
            className="radio-button"
          />
          Male &nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
            className="radio-button"
          />
          Female
        </label>
        {errors.gender && <p className="error">{errors.gender}</p>}
        <br />
        <div className="form-group"></div>
        <button
          className="btn btn-primary mt-4"
          onClick={save}
          disabled={Object.keys(errors).length > 0}
        >
          {" "}
          Register{" "}
        </button>
      </form>
      <br />
      <br />

      {registrationSuccess && (
        <div className="container">
          <table className="table table-dark" align="center">
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
              {students
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(function fn(student) {
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
      )}
    </div>
  );
}
export default Student;
