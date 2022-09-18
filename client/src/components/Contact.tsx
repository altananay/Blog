import React from "react";
import ContactHeader from "../layouts/ContactHeader";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContactHeader></ContactHeader>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
