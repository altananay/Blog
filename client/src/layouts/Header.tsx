import React from "react";

//"background-image: url('assets/img/home-bg.jpg')"

const Header = () => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: 'url("/home-bg.jpg")',
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>Blog</h1>
              <span className="subheading">
                Dilek Anay Blogu
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
