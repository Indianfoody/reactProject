import React from "react";
const Footer = () => {
    return (
        <>
       <footer className="footer py-5 bg-dark bg-gradient text-white">
  <div className="container-fluid">
    <div className="row">
      
      {/* Find Us */}
      <div className="col-lg-4 col-md-4 col-12 text-center mb-4">
        <strong className="d-block mb-2 text-uppercase fw-bold">Find Us</strong>
        <p className="text-white mb-0">Address</p>
      </div>

      {/* Call Us */}
      <div className="col-lg-4 col-md-4 col-12 text-center mb-4">
        <strong className="d-block mb-2 text-uppercase fw-bold">Call Us</strong>
        <p className="text-white mb-0">8882863559</p>
      </div>

      {/* Mail Us */}
      <div className="col-lg-4 col-md-4 col-12 text-center mb-4">
        <strong className="d-block mb-2 text-uppercase fw-bold">Mail Us</strong>
        <p className="text-white mb-0">kajalchandel2001@gmail.com</p>
      </div>
    </div>

    {/* Copyright */}
    <div className="row mt-4 border-top border-secondary pt-3">
      <div className="col-12 text-center">
        <small className="text-secondary">
          &copy; {new Date().getFullYear()} <span className="fw-bold text-white">Your Company Name</span>. All Rights Reserved.
        </small>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}

export default Footer;