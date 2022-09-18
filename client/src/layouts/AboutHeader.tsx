import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: 'url("/about-bg.jpg")',
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="page-heading">
              <h1>About Me</h1>
              <span className="subheading">This is what I do.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
