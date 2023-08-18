import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from backend and update students state
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleStudentSubmit = async (student) => {
    try {
      // Send student data to backend for validation and storage
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      const data = await response.json();
      // Update students state with the newly added student
      setStudents([...students, data]);
    } catch (error) {
      console.error('Error submitting student:', error);
    }
  };

  return (
    <div>
      <h1>Student Information</h1>
      <StudentForm onSubmit={handleStudentSubmit} />
      <StudentTable students={students} />
    </div>
  );
}

export default App;