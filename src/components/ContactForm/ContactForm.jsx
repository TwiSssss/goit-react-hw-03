import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = ({ contacts, setContacts }) => {
    const addContact = (values, { resetForm }) => {
        const newContact = {
            id: crypto.randomUUID(),
            name: values.username,
            number: values.number,
        };

        setContacts([...contacts, newContact]);
        resetForm();
    };

    return (
        <Formik validationSchema={FeedbackSchema} initialValues={{ username: "", number: "" }} onSubmit={addContact}>
            <Form className={style.formBox}>
                <label className={style.formLabel}>Name</label>
                <Field className={style.formInput} type="text" name="username" />
                <ErrorMessage name="username" component="div" className={style.error} />
                <label className={style.formLabel}>Number</label>
                <Field className={style.formInput} type="tel" name="number" />
                <ErrorMessage name="number" component="div" className={style.error} />
                <button className={style.formButton} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};
export default ContactForm;
