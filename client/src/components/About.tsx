import React from "react";
import AboutHeader from "../layouts/AboutHeader";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutHeader></AboutHeader>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Halam buraya kendini tanıt.
              </p>
              <p>
                Adım dilek anay. Şu üniden mezunum. Bu işi yapıyorum. falan filan.
              </p>
              <p>
                Hobilerim bunlar, cart curt. İstersen senin resmini de koyabilirim bu sayfaya.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default About;
