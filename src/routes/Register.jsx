import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlprefix } from '../utils/common';
import axios from 'axios';

export function Register() {

    const history = useNavigate();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [password, setPassword] = useState();
    const url = urlprefix() + 'register';

    const handleLogin = () => {
        axios.post(url, { email: email,username: username, contact_number: contactNumber, password: password }).then(response => {
            history('/');
        }).catch(error => {
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
        });
    }

  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className='d-flex justify-content-center'>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setUserName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setContactNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <input type="button" className='font-semibold flex items-center justify-center px-3 bg-white text-black py-2 leading-none rounded-md border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150' onClick={handleLogin} value='Sign Up' /><br />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
