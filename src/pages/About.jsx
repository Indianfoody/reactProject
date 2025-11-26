import React from "react";
import { useNavigate } from "react-router-dom";
import aboutus from "../assests/images/aboutus.avif";
import animal from "../assests/images/images.jpg";
import useScrollTo from "../components/UseScrollTo";
import "../assests/custom.css"
import { Container, Row, Col, Card } from "react-bootstrap";
const About = () => {
    const { ref, scrollTo } = useScrollTo();
    const PDF_URL = '/Resume.pdf';
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = PDF_URL;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
                        <div className="col-12 col-md-6 text-animate" onClick={scrollTo}>
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
                                            background: "linear-gradient(180deg, #e8f1ff 0%, #f5faff 100%)",
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
                        <div className="text-center mt-5"> {/* Added a wrapper for centering and margin */}
                            <button
                                ref={ref}
                                onClick={handleDownload}
                                style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                            >
                                Download Resume
                            </button>
                        </div>
                    </Container>
                </div></section></>
    )
}
export default About;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import aboutus from "../assests/images/aboutus.avif";
// import animal from "../assests/images/images.jpg";
// import useScrollTo from "../components/UseScrollTo";
// import "../assests/custom.css";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const About = () => {
//     const { ref, scrollTo } = useScrollTo();
//     // 1. State for Resume URL (from previous update)
//     const [currentResumeUrl, setCurrentResumeUrl] = useState('/Resume.pdf');
//     const [uploadedResumeFileName, setUploadedResumeFileName] = useState(null);
    
//     // 2. New State for Image Upload and Preview
//     const [uploadedImageUrl, setUploadedImageUrl] = useState(null); 
//     const [uploadedImageFile, setUploadedImageFile] = useState(null);

//     // Resume Download Handler
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = currentResumeUrl; 
//         link.download = 'Resume.pdf';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     // Resume Upload Handler (from previous update)
//     const handleResumeUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type === 'application/pdf') {
//             const newUrl = URL.createObjectURL(file);
//             setCurrentResumeUrl(newUrl);
//             setUploadedResumeFileName(file.name);
//             alert(`New resume file selected: ${file.name}.`);
//         } else if (file) {
//             alert('Please select a valid PDF file for the resume.');
//             e.target.value = null;
//         }
//     };
    
//     // 3. New Image Upload Handler
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             // Create a temporary URL for the image object
//             const newUrl = URL.createObjectURL(file);
            
//             // Update state to trigger preview
//             setUploadedImageUrl(newUrl);
//             setUploadedImageFile(file);
            
//             // Log for "Save" confirmation (client-side only)
//             console.log("Image uploaded successfully:", file.name);
//             alert(`Image uploaded: ${file.name}. Check the preview box.`);
//         } else if (file) {
//             alert('Please select a valid image file.');
//             setUploadedImageUrl(null);
//             setUploadedImageFile(null);
//         }
//     };

//     // 4. Placeholder for the "Save" action
//     const handleSaveImage = () => {
//         if (uploadedImageFile) {
//             // 🛑 IMPORTANT: This is where you would integrate your backend logic.
//             // Example: Using fetch to send the image file to a server endpoint.
//             /*
//             const formData = new FormData();
//             formData.append('image', uploadedImageFile);
//             fetch('/api/upload-image', {
//                 method: 'POST',
//                 body: formData,
//             }).then(response => {
//                 // handle server response...
//             });
//             */
            
//             alert(`Image "${uploadedImageFile.name}" is conceptually saved! (Needs a real backend for permanent storage)`);
//             // You might clear the preview after a successful save:
//             // setUploadedImageUrl(null);
//             // setUploadedImageFile(null);
//         } else {
//             alert("Please upload an image first.");
//         }
//     };

//     const messages = [
//         // ... (messages array unchanged) ...
//         { text: "I specialize in turning design concepts into fully functional, dynamic websites. My work revolves around writing clean, maintainable code and ensuring every project is optimized for performance and accessibility. I build responsive layouts, integrate APIs, and use modern tools like React, Bootstrap, Tailwind CSS, and Git to create seamless front-end experiences." },
//         { text: "My work involves creating RESTful APIs, connecting them to databases (MySQL, PostgreSQL, MongoDB), and integrating them into dynamic front-end interfaces. I follow best practices for testing, debugging, and version control to deliver maintainable and reliable software." },
//         { text: "I focus on building modern, component-based front-end applications using React.js.I work with Hooks, Context API, Redux, and React Router to manage state, routing, and UI logic efficiently. I also integrate RESTful APIs and ensure every application I build is responsive, accessible, and optimized for performance." },
//     ];

//     return (
//         <>
//             {/* ... Section 1 & 2 (Image Header and About Content - unchanged) ... */}
//             <section className="imageSection">
//                 {/* ... code for image header ... */}
//                 <div
//                     className="aboutUs"
//                     style={{
//                         backgroundImage: `url(${aboutus})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundAttachment: 'fixed',
//                         width: '100vw',
//                         height: '60vh',
//                     }}
//                 >
//                     <div className="about-overlay">
//                         <h1>About Us</h1>
//                     </div>
//                 </div>
//             </section>
            
//             <section className="contentSection m-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-6 text-animate" onClick={scrollTo}>
//                             <h1>About us</h1>
//                             <p>Hello!<br />
//                                 My name is Kajal Singh Chandel, and I’m a frontend web developer passionate about creating clean, responsive, and user-friendly web applications.
//                                 <br />
//                                 I have hands-on experience with HTML, CSS, JavaScript, React.js, and Bootstrap, and I enjoy turning ideas into interactive digital experiences. Recently, I’ve been working on React projects that include components like navigation bars, responsive layouts, and dynamic pages.
//                                 <br />
//                                 I’m constantly learning and improving my skills, especially in modern web technologies and frameworks. My goal is to grow as a full-stack developer and contribute to impactful software solutions.
//                                 <br />
//                                 In my free time, I like exploring UI design trends and improving my coding logic through problem-solving and mini-projects.</p>
//                         </div>
//                         <div className="col-12 col-md-6">
//                             <img src={animal} alt="" style={{ width: "100%", height: "400px" }} className="flip-image" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
            
//             {/* ... Section 3: Way You Develop Cards (unchanged) ... */}
//             <section>
//                 <div style={{ backgroundColor: "#f8f9fa", padding: "30px 0" }}>
//                     <Container>
//                         <h2 className="text-center mb-5" style={{ fontWeight: "600" }}>
//                             Way You Develop
//                         </h2>
//                         <Row className="justify-content-center">
//                             {messages.map((msg, index) => (
//                                 <Col
//                                     key={index}
//                                     md={4}
//                                     sm={6}
//                                     className="mb-4 d-flex align-items-stretch"
//                                 >
//                                     <Card
//                                         className="shadow-sm p-3 flex-fill"
//                                         style={{
//                                             border: "none",
//                                             borderRadius: "15px",
//                                             background: "linear-gradient(180deg, #e8f1ff 0%, #f5faff 100%)",
//                                             position: "relative",
//                                         }}
//                                     >
//                                         <Card.Text style={{ color: "#333", fontSize: "14px" }}>
//                                             {msg.text}
//                                         </Card.Text>
//                                         <div
//                                             style={{
//                                                 position: "absolute", bottom: "-10px", left: "30px", width: "0", height: "0",
//                                                 borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "10px solid #e8f1ff",
//                                             }}
//                                         ></div>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
                        
//                         {/* 5. Image Upload & Preview Section */}
//                         <div className="text-center mt-5 p-4" style={{ border: '2px dashed #007bff', borderRadius: '12px', backgroundColor: '#f0f8ff' }}>
//                             <h4 className="mb-4">🖼️ Upload and Preview Image</h4>
                            
//                             <input
//                                 type="file"
//                                 accept="image/*" // Accept any image type
//                                 onChange={handleImageUpload}
//                                 style={{ display: 'block', margin: '0 auto 15px auto', padding: '10px' }}
//                             />
                            
//                             {/* Preview Box */}
//                             <div style={{ 
//                                 height: '200px', 
//                                 width: '100%', 
//                                 border: '1px solid #ccc', 
//                                 margin: '20px auto', 
//                                 overflow: 'hidden',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 backgroundColor: '#fff'
//                             }}>
//                                 {uploadedImageUrl ? (
//                                     <img 
//                                         src={uploadedImageUrl} 
//                                         alt="Uploaded Preview" 
//                                         style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
//                                     />
//                                 ) : (
//                                     <p className="text-muted">Image preview will appear here.</p>
//                                 )}
//                             </div>

//                             {/* Save Button */}
//                             <button
//                                 onClick={handleSaveImage}
//                                 disabled={!uploadedImageFile}
//                                 style={{ 
//                                     padding: '10px 20px', 
//                                     backgroundColor: uploadedImageFile ? '#28a745' : '#888', 
//                                     color: 'white', 
//                                     border: 'none', 
//                                     borderRadius: '5px', 
//                                     cursor: uploadedImageFile ? 'pointer' : 'not-allowed',
//                                     marginTop: '10px'
//                                 }}
//                             >
//                                 Save Image (Needs Backend)
//                             </button>
//                         </div>
                        
//                         {/* Resume Download Section (moved down) */}
//                         <div className="text-center mt-5 p-3" style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
//                             <h4 className="mb-3">Update Resume File</h4>
//                             <input
//                                 type="file"
//                                 accept="application/pdf"
//                                 onChange={handleResumeUpload}
//                                 style={{ display: 'block', margin: '0 auto 15px auto', padding: '10px' }}
//                             />
//                             <p className={`small ${uploadedResumeFileName ? 'text-success' : 'text-muted'}`}>
//                                 {uploadedResumeFileName 
//                                     ? `✅ Ready to download: ${uploadedResumeFileName}`
//                                     : `Current file path: /Resume.pdf`
//                                 }
//                             </p>
//                             <button
//                                 ref={ref}
//                                 onClick={handleDownload}
//                                 style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
//                             >
//                                 Download Current Resume
//                             </button>
//                         </div>

//                     </Container>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default About;