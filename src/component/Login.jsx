// LoginForm.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    async function fetchData(email, password) {
        try {
            const response = await fetch("https://cakeback-rahuls-projects-44dfd132.vercel.app/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setData(data)
            return data; // Return the data for further use
        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    const formik = useFormik({
        initialValues: {
            email: 'aayushisoni488@gmail.com',
            password: 'aayu1015',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            fetchData(values.email, values.password)
            
            // if(data?.token){
            //     navigate(`/`)

            // }
            // else{
            //     alert("Credential Wrong")
            // }
        },
    });
    // if()
    if (data?.token) {
        localStorage.setItem('token', data?.token)
    }
    if (data?.token) {
        navigate('/add')
    }
    return (
        <div className="login-container mt-4">
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                </div>

                <button type="submit" className="submit-btn">
                    Login
                </button>
                
            </form>
            <div className="submit-btn" onClick={() => {
                    localStorage.clear()
                }}>
                    LogOut
                </div>
        </div>
        
    );
};

export default Login;
