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
                        height: '60vh',
                    }}
                >
                    <div className="about-overlay">
                        <h1>About Us</h1>
                    </div>
                </div></section>
                <section className="contentSection m-3">
                    <div className="container">
                        <div className="row">
                              <div className="col-12 col-md-6 text-animate">
                                <h1>About us</h1>
                                <p>Hello!<br/>
                                    My name is Kajal Singh Chandel, and I’m a frontend web developer passionate about creating clean, responsive, and user-friendly web applications.
                                    <br/>
                                    I have hands-on experience with HTML, CSS, JavaScript, React.js, and Bootstrap, and I enjoy turning ideas into interactive digital experiences. Recently, I’ve been working on React projects that include components like navigation bars, responsive layouts, and dynamic pages.
                                    <br/>
                                    I’m constantly learning and improving my skills, especially in modern web technologies and frameworks. My goal is to grow as a full-stack developer and contribute to impactful software solutions.
                                    <br/>
                                    In my free time, I like exploring UI design trends and improving my coding logic through problem-solving and mini-projects.</p></div>
                             <div className="col-12 col-md-6">
                                <img src={animal} alt="" style={{ width: "100%", height: "400px" }} className="flip-image"/></div>
                        </div>
                    </div>
                    </section></>
    )
}
export default About;