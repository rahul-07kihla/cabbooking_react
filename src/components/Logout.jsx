import React from 'react'
import { removeUserSession } from '../utils/common';

const handleClick = (e) => {
    e.preventDefault();
    removeUserSession();
    window.location.replace('/login');
}

export default function Logout() {
  return (
    <>
        <button onClick={handleClick}>
            Logout
        </button>
    </>
  )
}
