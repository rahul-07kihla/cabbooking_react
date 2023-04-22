import React, { useState } from 'react'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    console.log(username,password);

    const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className='d-flex justify-content-center'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUserName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
