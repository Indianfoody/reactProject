import React from "react";
import "../assests/custom.css";
const Contact = () => {
  return (
    <><div className="contact-page text-white d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="text-center mb-4">

              <h1 className="fw-bold">Send Me a Message</h1>
              <p className="mt-3 fw-bold">Getting in touch is easy!</p>
            </div>

            <div className="text-center mb-4 fw-bold">
              <p>Ghaziabad</p>
              <p>8882863559</p>
              <p>kajalchandel2001gmail.com</p>
              <div>
                <a href="#" className="btn btn-outline-light btn-sm mx-1">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm mx-1">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm mx-1">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm mx-1">
                  <i className="bi bi-google"></i>
                </a>
              </div>
            </div>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write us about any project. We’d love to work with you!"
                  required
                ></textarea>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-warning text-uppercase fw-bold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></>
  )
}
export default Contact;