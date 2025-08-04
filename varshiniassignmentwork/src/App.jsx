import { useState } from 'react'
import './App.css'
import Hello from './hello/Hello'
import EmployeeTable from './employee/EmployeeTable';
import Parent from './parent/Parent';
import RegistrationForm from './registration/RegistrationForm';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Hello></Hello>
      <EmployeeTable></EmployeeTable>
      <Parent></Parent>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App
