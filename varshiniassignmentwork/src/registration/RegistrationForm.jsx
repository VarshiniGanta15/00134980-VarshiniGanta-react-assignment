import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
    state: 'TG',
    gender: '',
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accepted) {
      alert('You must accept the contract to proceed.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Registration Successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>State:</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="TG">TG</option>
          <option value="AP">AP</option>
          <option value="TN">TN</option>
        </select>
      </div>

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === 'M'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === 'F'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
