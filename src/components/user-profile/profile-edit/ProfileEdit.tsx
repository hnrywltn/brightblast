import { getRegistrationData, setRegistrationData } from '@/components/login/Register';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Col, Form, Row } from 'react-bootstrap';
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from "yup";

// export interface RegistrationData {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phoneNumber: string;
//     address: string;
//     profilePhoto?: string;
//     description: string;
//     shippingAddress: string;
// }

interface FormValues {
    uid: string,
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    profilePhoto?: string;
    description: string;
    shippingAddress: string;
}

const ProfileEdit = () => {
    const router = useRouter()
    const [previewImage, setPreviewImage] = useState<any>(null);

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        phoneNumber: yup.string().min(10, "Conform Password must be at least 6 characters").required(),
        address: yup.string().required(),
        profilePhoto: yup.mixed().notRequired(),
        description: yup.string().required(),
        shippingAddress: yup.string().required(),
    });

    // const initialValues: FormValues = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phoneNumber: "",
    //     address: "",
    //     shippingAddress: "",
    //     profilePhoto: "",
    //     description: "",
    // };
    
    // const [validated, setValidated] = useState(false);
    const [initialValues, setInitialValues] = useState<FormValues>({
        uid: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        shippingAddress: "",
        profilePhoto: "",
        description: "",
    });

    useEffect(() => {
        const loginUserString = localStorage.getItem("login_user");
        const loginUser = !!loginUserString ? JSON.parse(loginUserString) : {};
        if (loginUser) {
            setPreviewImage(loginUser?.profilePhoto ?? "");
            setInitialValues({
                uid: loginUser?.uid ?? "",
                firstName: loginUser?.firstName ?? "",
                lastName: loginUser?.lastName ?? "",
                email: loginUser?.email ?? "",
                phoneNumber: loginUser?.phoneNumber ?? "",
                address: loginUser?.address ?? "",
                shippingAddress: loginUser?.shippingAddress ?? "",
                profilePhoto: loginUser?.profilePhoto ?? "",
                description: loginUser?.description ?? "",
            });
        }
    }, []);

    const handleFileChange = (e: any, setFieldValue: any) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setFieldValue("profilePhoto", reader.result);
            setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const onSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
        formikHelpers.setSubmitting(false);
        const loginUserString = localStorage.getItem("login_user");
        const loginUser = !!loginUserString ? JSON.parse(loginUserString) : {};
        if(loginUser) {
            const updatedData = [...getRegistrationData()];
            const index = updatedData.findIndex((user:any) => user.uid === loginUser.uid);
            updatedData[index] = {...values};
            setRegistrationData(updatedData);
            localStorage.setItem("login_user", JSON.stringify(values));    
        }
        router.push("/user-profile");
    }

    return (
        <section className="section-register padding-tb-50">
            <div className="container">
                <Row>
                    <Col sm={12}>
                        <Fade triggerOnce direction='up' duration={1000} delay={200} className="bb-register">
                            <Row>
                                <Col sm={12}>
                                    <div className="section-title bb-center">
                                        <div className="section-detail">
                                            <h2 className="bb-title">Edit Profile</h2>
                                            <p>Best place to buy and sell digital products</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    {initialValues.uid !== "" ? 
                                    <Formik
                                        validationSchema={schema}
                                        onSubmit={onSubmit}
                                        initialValues={initialValues}

                                    >{({
                                        setFieldValue,
                                        handleSubmit,
                                        handleChange,
                                        values,
                                        errors,
                                        touched
                                    }: FormikProps<FormValues>) => {
                                        return (
                                            <Form noValidate onSubmit={handleSubmit} method="post">
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>First Name*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.firstName} type="text" name="firstName" placeholder="Enter your first name" required isInvalid={!!errors.firstName} />
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.firstName}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>Last Name*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.lastName} type="text" name="lastName" placeholder="Enter your Last name" required isInvalid={!!errors.lastName} />
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.lastName}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>Email*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.email} type="email" name="email" placeholder="Enter your Email" required isInvalid={!!errors.email} />
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>Phone Number*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.phoneNumber} type="text" name="phoneNumber" placeholder="Enter your phone number" required isInvalid={!!errors.phoneNumber}/>
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.phoneNumber}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>Address*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.address} type="text" name="address" placeholder="Address Line 1" required isInvalid={!!errors.address}/>
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.address}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-50">
                                                    <label>Shipping Address*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={handleChange} value={values.shippingAddress} type="text" name="shippingAddress" placeholder="Shipping Address" required isInvalid={!!errors.shippingAddress}/>
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.shippingAddress}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-100">
                                                    <label>About Me*</label>
                                                    <Form.Group>
                                                        <Form.Control as="textarea" onChange={handleChange} value={values.description} rows={3} name="description" placeholder="Description" required isInvalid={!!errors.description}/>
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.description}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="bb-register-wrap bb-register-width-100">
                                                    <label>Profile Photo*</label>
                                                    <Form.Group>
                                                        <Form.Control onChange={(event) => handleFileChange(event, setFieldValue)} style={{ padding: "15px 20px" }} type="file" name="profilePhoto" required isInvalid={touched.profilePhoto && !!errors.profilePhoto}/>
                                                        <Form.Control.Feedback type='invalid'>
                                                            {errors.profilePhoto}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                    {/* Image Preview */}
                                                    {previewImage && (
                                                        <div className="mb-2 mt-2">
                                                            <img
                                                                src={previewImage}
                                                                alt="Preview"
                                                                className="img-thumbnail"
                                                                style={{ width: "120px", height: "120px" }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bb-register-button">
                                                    <button type="submit" className="bb-btn-2">Save</button>
                                                </div>
                                            </Form>
                                        )
                                    }}
                                    </Formik>:<></>}
                                </Col>
                            </Row>
                        </Fade>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ProfileEdit
