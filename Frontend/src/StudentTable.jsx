import React from 'react';

function StudentTable({ students }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Class</th>
          <th>Division</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.admissionNumber}>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.class}</td>
            <td>{student.division}</td>
            <td>{student.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;