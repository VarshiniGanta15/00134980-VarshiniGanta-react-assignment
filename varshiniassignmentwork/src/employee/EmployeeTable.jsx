import React from 'react';

const EmployeeTable = () => {
  const employees = [
    { name: 'Varsh', salary: 70000 },
    { name: 'Sunny', salary: 60000 },
    { name: 'Harshini', salary: 80000 },
    { name: 'Siri', salary: 75000 },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <table style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Salary (Rs./-)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emp.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {emp.salary.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
