import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'

export default function Login() {
    return (
        <div className='form'>
            <h1 className='header'>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className='input'>
                            <label htmlFor="email" className='label'>Email <span className='required'>*</span> </label>
                            <Field type="email" name="email" className="input-field" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className='error' />
                        </div>
                        <div className='input'>
                            <label htmlFor="password" className='label'>Password <span className='required'>*</span> </label>
                            <Field type="password" name="password" className="input-field" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className='button'>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
