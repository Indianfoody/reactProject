import React from "react";
import { useNavigate } from "react-router-dom";
import aboutus from "../assests/images/aboutus.avif";
import animal from "../assests/images/images.jpg"
import "../assests/custom.css"
const About = () => {
    return (
        <>
            <section className="imageSection">
                <div
                    className="aboutUs"
                    style={{
                        backgroundImage: `url(${aboutus})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <div className="about-overlay">
                        <h1>About Us</h1>
                        <p>We are committed to delivering excellence and innovation.</p>
                    </div>
                </div></section>
                <section className="contentSection m-3">
                    <div className="container">
                        <div className="row">
                              <div className="col-12 col-md-6 text-animate">
                                <h1>About us</h1>
                                <p>We are a passionate team driven by innovation and excellence, dedicated to delivering creative solutions that inspire growth and success.</p></div>
                             <div className="col-12 col-md-6">
                                <img src={animal} alt="" style={{ width: "100%", height: "400px" }} className="flip-image"/></div>
                        </div>
                    </div>
                    </section></>
    )
}
export default About;