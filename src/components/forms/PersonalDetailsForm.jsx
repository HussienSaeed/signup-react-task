import React , {lazy} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { LanguageIcon } from "../../assets/icons/Icons";
import '../../styles/PersonalDetailsForm.css';


const PhoneInput = lazy(() => import("react-phone-input-2"))
function PersonalDetailsForm({setPageNum}) {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10,15}$/, "Invalid phone number"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    const handleSubmit = (values) => {
        console.log("Form Data:", values);
        localStorage.setItem("personal-form", JSON.stringify(values));
        setPageNum(1);
    };

    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                autoComplete="off"
                            />
                            <ErrorMessage name="name" component="p" className="error-msg" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <Field type="email" name="email" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="p" className="error-msg" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number*</label>
                            <PhoneInput
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                }}
                                country="eg"
                                value={values.phone}
                                onChange={(value) => setFieldValue("phone", value)}
                                placeholder="Enter your phone number"
                                dropdownStyle={{ zIndex: 100 }}
                            />
                            <ErrorMessage name="phone" component="p" className="error-msg" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                            />
                            <ErrorMessage
                                name="password"
                                component="p"
                                className="error-msg"
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Get Started
                        </button>
                        <p className="existed-account">
                            Already have an account? <a className="Log-In">Log in</a>
                        </p>
                    </Form>
                )}
            </Formik>
            <div className="Language">
                <p>عربى </p>
                <LanguageIcon />
            </div>
        </div>
    );
}

export default PersonalDetailsForm;
