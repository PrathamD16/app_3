import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?!.*[@].*[^\w\s]).{8,}$/;

    if (!emailPattern.test(username.trim())) {
      setEmailError('Please enter a valid email address');
      setPasswordError('');
    } else {
      setEmailError('');
    }

    if (!passwordPattern.test(password.trim())) {
      setPasswordError('Password must contain at least 1 uppercase letter, 1 number, and @ only');
    } else {
      setPasswordError('');
    }

    if (emailPattern.test(username.trim()) && passwordPattern.test(password.trim())) {
      console.log('Login successful!');
      // Add your login logic or redirection here
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800">
      <div className="bg-slate-900 shadow-md rounded px-8 py-8 sm:px-12 sm:py-12 w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              placeholder='email'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
            {emailError && <p className="text-red-500 text-xs mt-1 w-full h-5">{emailError}</p>}
          </div>
          <div className="mb-6">
            <input
              placeholder='password'  
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
            {passwordError && <p className="text-red-500 text-xs mt-1 w-full h-5">{passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </form>
        <div className='flex justify-center text-gray-300 mt-3 text-sm'>
          <a href="" className='underline'  >Forgot your password</a>
        </div>
      </div>
    </div>
  );
};

export default App;
