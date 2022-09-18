import React from "react";
import { Form, Formik, Field } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const schema = Yup.object({
    fullName: Yup.string().required("Zorunlu alan."),
    email: Yup.string()
      .email("Email formatında girmelisiniz")
      .required("Email bilgisi zorunlu"),
    message: Yup.string().required("Zorunlu alan")
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm()
          }, 1000);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form noValidate>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Adınız
              </label>
              <Field
                name="fullName"
                className={
                  "form-control " +
                  (touched.fullName && errors.fullName ? "is-invalid" : null)
                }
                type="text"
              ></Field>
              {touched.fullName && errors.fullName ? (
                <div className="text-danger">{errors.fullName}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field
                name="email"
                className={
                  "form-control " +
                  (touched.email && errors.email ? "is-invalid" : null)
                }
                type="email"
              ></Field>
              {touched.email && errors.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mesajınız
              </label>
              <Field
                name="message"
                className={
                  "form-control " +
                  (touched.message && errors.message ? "is-invalid" : null)
                }
                type="text"
              ></Field>
              {touched.message && errors.message ? (
                <div className="text-danger">{errors.message}</div>
              ) : null}
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary mt-3"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Gönder"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;