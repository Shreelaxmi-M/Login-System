import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

const FormSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be atleast 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
});

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className='form'>
            <h1 className='header'>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={FormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    localStorage.setItem("email", JSON.stringify(values.email));
                    navigate("/home");
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className='input'>
                            <label htmlFor="email" className='label'>Email <span className='required'>*</span> </label>
                            <Field type="email" name="email" className="input-field" placeholder="Email" />
                            {touched.email && errors.email && (
                                <div className='error'>{errors.email}</div>
                            )}
                        </div>
                        <div className='input'>
                            <label htmlFor="password" className='label'>Password <span className='required'>*</span> </label>
                            <Field type="password" name="password" className="input-field" placeholder="Password" />
                            {touched.password && errors.password && (
                                <div className='error'>{errors.password}</div>
                            )}
                        </div>
                        <button type="submit" disabled={isSubmitting} className='button' style={{ opacity: errors.email || errors.password ? 0.5 : 1 }}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
