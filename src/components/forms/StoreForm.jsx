import {  LeftArrow } from "../../assets/icons/Icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomSelect from "../forms/CustomSelect";
import "../../styles/StoreForm.css";
import arabic from '../../assets/images/languages/arabic.png'
import english from '../../assets/images/languages/english.png'

const languagesOptions = [
    { name: "Select Language", value: "" },
    {
        code: "us",
        name: "English",
        value: "English",
        flag: english,
    },
    {
        code: "eg",
        name: "Arabic",
        value: "Arabic",
        flag: arabic,
    },
];

const storeIndustryOptions = [
    { name: "Select fashion", value: "" },
    { name: "Baby", value: "Baby" },
    { name: "Boys fashion", value: "BoysFashion" },
    { name: "Girls fashion", value: "GirlsFashion" },
    { name: "Mens fashion", value: "MensFashion" },
];


const validationSchema = Yup.object({
    name: Yup.string().required("Store name is required."),
    url: Yup.string()
        .url("Must be a valid URL.")
        .required("Store URL is required."),
    language: Yup.string().required("Store language is required."),
    industry: Yup.string().required("Store industry is required."),
});

function StoreForm({ setPageNum }) {
    const initialValues = {
        name: "",
        url: "",
        language: "",
        industry: "",
    };

    const handleSubmit = (values) => {
        values.url = `${values.url}.markatty.com`;
        console.log("Form Data:", values);
        localStorage.setItem("store-form", JSON.stringify(values));
        alert("Store created");
        setPageNum(3);
    };

    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="store-form-ctr">
                        <div className="store-form-group">
                            <label htmlFor="name">Store name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="mystore"
                                className="store-name"
                            />
                            <ErrorMessage name="name" component="div" className="error-msg" />
                        </div>
                        <div className="store-form-group">
                            <label htmlFor="url">Store URL</label>
                            <div className="input-url-ctr">
                                <Field
                                    type="text"
                                    id="url"
                                    name="url"
                                    placeholder="My store"
                                    className="store-url"
                                />
                                <span>.markatty.com</span>
                            </div>
                            <ErrorMessage name="url" component="div" className="error-msg" />
                        </div>
                        <div className="store-form-group">
                            <label htmlFor="language">Store language</label>
                            <CustomSelect
                                options={languagesOptions}
                                id="language"
                                onChange={(value) => setFieldValue("language", value)}
                            />
                            <ErrorMessage
                                name="language"
                                component="div"
                                className="error-msg"
                            />
                        </div>
                        <div className="store-form-group">
                            <label htmlFor="industry">Store Industry</label>
                            <CustomSelect
                                options={storeIndustryOptions}
                                id="industry"
                                onChange={(value) => setFieldValue("industry", value)}
                            />
                            <ErrorMessage
                                name="industry"
                                component="div"
                                className="error-msg"
                            />
                            <span className="examples">
                                Ex.(Baby, Boys fashion, Girls fashion, Mens fashion, etc..).
                            </span>
                        </div>
                        <button type="submit" className="submit-btn">
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
            <p className="back-to-login">
                <LeftArrow />
                <p style={{ marginBottom: 0 }} onClick={() => setPageNum(0)}>
                    Back to log in
                </p>
            </p>
        </div>
    );
}

export default StoreForm;
