import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
      const [error, setError] = useState(null);
      const { createUser } = useContext(AuthContext);

      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm.value;

            if (password.length < 6) {
                  setError("Password must be at least 6 characters");
                  return;
            }
            if (password !== confirm) {
                  setError("Your password didn't match");
                  return;
            }

            createUser(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        form.reset();
                  })
                  .catch(error => console.error(error))
            // console.log(email, password, confirm)

      }
      return (
            <div className='form-container'>
                  <h1 className='form-title'>Signup</h1>
                  <form onSubmit={handleSubmit}>
                        <div className="form-control">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="" required />
                        </div>
                        <div className="form-control">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="" required />
                        </div>
                        <div className="form-control">
                              <label htmlFor="confirm">Confirm Password</label>
                              <input type="password" name="confirm" id="" required />
                        </div>
                        <input className='btn-submit' type="submit" value="Signup" />
                  </form>
                  <p>Already have an account? <Link to='/login'>Login</Link></p>
                  <p className='text-error'>{error}</p>
            </div>
      );
};

export default SignUp;