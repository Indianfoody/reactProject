import React from "react";
import { useNavigate } from "react-router-dom";
import aboutus from "../assests/images/aboutus.avif";
import animal from "../assests/images/images.jpg"
import "../assests/custom.css"
import { Container, Row, Col, Card } from "react-bootstrap";
const About = () => {
    const messages = [
        {
            text: "I specialize in turning design concepts into fully functional, dynamic websites. My work revolves around writing clean, maintainable code and ensuring every project is optimized for performance and accessibility. I build responsive layouts, integrate APIs, and use modern tools like React, Bootstrap, Tailwind CSS, and Git to create seamless front-end experiences."
        },
        {
            text: "My work involves creating RESTful APIs, connecting them to databases (MySQL, PostgreSQL, MongoDB), and integrating them into dynamic front-end interfaces. I follow best practices for testing, debugging, and version control to deliver maintainable and reliable software.",
        },
        {
            text: "I focus on building modern, component-based front-end applications using React.js.I work with Hooks, Context API, Redux, and React Router to manage state, routing, and UI logic efficiently. I also integrate RESTful APIs and ensure every application I build is responsive, accessible, and optimized for performance.",
        },
        
    ];
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
                            <p>Hello!<br />
                                My name is Kajal Singh Chandel, and I’m a frontend web developer passionate about creating clean, responsive, and user-friendly web applications.
                                <br />
                                I have hands-on experience with HTML, CSS, JavaScript, React.js, and Bootstrap, and I enjoy turning ideas into interactive digital experiences. Recently, I’ve been working on React projects that include components like navigation bars, responsive layouts, and dynamic pages.
                                <br />
                                I’m constantly learning and improving my skills, especially in modern web technologies and frameworks. My goal is to grow as a full-stack developer and contribute to impactful software solutions.
                                <br />
                                In my free time, I like exploring UI design trends and improving my coding logic through problem-solving and mini-projects.</p></div>
                        <div className="col-12 col-md-6">
                            <img src={animal} alt="" style={{ width: "100%", height: "400px" }} className="flip-image" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "#f8f9fa", padding: "30px 0" }}>
                    <Container>
                        <h2 className="text-center mb-5" style={{ fontWeight: "600" }}>
                            Way You Develop
                        </h2>
                        <Row className="justify-content-center">
                            {messages.map((msg, index) => (
                                <Col
                                    key={index}
                                    md={4}
                                    sm={6}
                                    className="mb-4 d-flex align-items-stretch"
                                >
                                    <Card
                                        className="shadow-sm p-3 flex-fill"
                                        style={{
                                            border: "none",
                                            borderRadius: "15px",
                                            background:
                                                "linear-gradient(180deg, #e8f1ff 0%, #f5faff 100%)",
                                            position: "relative",
                                        }}
                                    >
                                        <Card.Text style={{ color: "#333", fontSize: "14px" }}>
                                            {msg.text}
                                        </Card.Text>

                                        {/* Message tail effect */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "-10px",
                                                left: "30px",
                                                width: "0",
                                                height: "0",
                                                borderLeft: "10px solid transparent",
                                                borderRight: "10px solid transparent",
                                                borderTop: "10px solid #e8f1ff",
                                            }}
                                        ></div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div></section></>
    )
}
export default About;