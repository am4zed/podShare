import React from 'react';

import './login.scss';

export default function Login() {
  return (
    <div className='main'>
      <form className='login__form'>
        <label>
          <p>Username</p>
          <input type='text' />
        </label>
        <label>
          <p>Password</p>
          <input type='password' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
