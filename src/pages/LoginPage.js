import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeLogin } from '../helper/fakeLogin';

const LoginPage = () => {
  const navigate = useNavigate();

  // State for form data
  const initialFormState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialFormState);

  // Handle changes for form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Fake login function to mimic a real login request
    const login = await fakeLogin(formData.email, formData.password);
    console.log(login);
    if (login) {
      navigate('/', { replace: true });
    } else {
      console.log('FAILED');
    }
  };
  return (
    <div className='LoginPage'>
      <div>
        <h1>Login</h1>
        {/* Login form that requires the requested password pattern */}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            pattern='(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}'
            title='Must contain at least one uppercase and lowercase letter, one special character, and at least 6 or more characters'
            required
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
