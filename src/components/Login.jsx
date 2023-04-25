import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <li>
                <Link to="/login" className='text-secondary'>
                    Login
                </Link>
            </li>
            <li>
                <button className="font-semibold flex items-center justify-center px-3 bg-white text-black py-2 leading-none rounded-md border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150">
                    Sign Up
                </button>
            </li>
        </>
    )
}
