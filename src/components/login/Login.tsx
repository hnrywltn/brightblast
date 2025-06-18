"use client"
import { RootState } from '@/store';
import { login } from '@/store/reducer/loginSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useDispatch, useSelector } from 'react-redux';
import { showErrorToast, showSuccessToast } from '../toast-popup/Toastify';
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from "yup";
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import Link from 'next/link';

interface Registration {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    postCode: string;
    country: string;
    state: string;
    password: string;
    uid: any;
}
interface FormValues {
    email: string;
    password: string;
}

const Login = () => {
    const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
    const dispatch = useDispatch()
    const router = useRouter()
    const [registrations, setRegistrations] = useState<Registration[]>([]);

    useEffect(() => {
        const storedRegistration = JSON.parse(localStorage.getItem("registrationData") || '[]');
        setRegistrations(storedRegistration)
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    const handleLoginBtn = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
        formikHelpers.setSubmitting(false);

        const loginUser = registrations.find((user) => user.email === values.email && user.password === values.password)
        if (loginUser) {
            const findUser = { uid: loginUser.uid, email: values.email, password: values.password }
            localStorage.setItem("login_user", JSON.stringify(findUser));
            dispatch(login(loginUser))
            showSuccessToast("User login successfull!")
        } else {
            showErrorToast("Invalid email and password")
        }
    }

    return (
        <section className="section-login padding-tb-50">
            <div className="container">
                <Row>
                    <Col sm={12}>
                        <Fade triggerOnce direction='up' duration={1000} delay={200} className="section-title bb-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="section-detail">
                                <h2 className="bb-title">Log <span>In</span></h2>
                                <p>Best place to buy and sell digital products</p>
                            </div>
                        </Fade>
                    </Col>
                    <Col sm={12}>
                        <Fade triggerOnce direction='up' duration={1000} delay={200} className="bb-login-contact">
                            <Formik
                                validationSchema={schema}
                                onSubmit={handleLoginBtn}
                                initialValues={initialValues}>{({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    errors,
                                }: FormikProps<FormValues>) => {
                                    return (
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <div className="bb-login-wrap">
                                                <label htmlFor="email">Email*</label>
                                                <Form.Group>
                                                    <InputGroup>
                                                        <Form.Control onChange={handleChange} value={values.email} type="email" id="email" name="email" placeholder="Enter Your Email" required isInvalid={!!errors.email} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </div>
                                            <div className="bb-login-wrap">
                                                <label htmlFor="email">Password*</label>
                                                <Form.Group>
                                                    <InputGroup>
                                                        <Form.Control onChange={handleChange} value={values.password} type="password" id="password" name="password" placeholder="Enter Your Password" isInvalid={!!errors.password} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.password}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </div>
                                            <div className="bb-login-wrap">
                                                <a onClick={(e) => e.preventDefault()} href="#">Forgot Password?</a>
                                            </div>
                                            <div className="bb-login-button">
                                                <button className="bb-btn-2" type="submit">Login</button>
                                                <Link href="/register">Register</Link>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </Fade>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Login
