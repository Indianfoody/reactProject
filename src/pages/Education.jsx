import React from "react";
import slider1 from "../assests/images/sliderimage1.jpg";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2020 – 2024",
      highlights: [
        "Focused on programming, data structures, and web development.",
        "Completed projects using Java, JavaScript, and React.js.",
        "Participated in coding competitions and hackathons."
      ]
    },
    {
      title: "High School / Senior Secondary",
      institution: "ABC School",
      year: "2018 – 2020",
      highlights: [
        "Science Stream (Physics, Chemistry, Mathematics)",
        "Achieved top grades in Computer Science and Mathematics."
      ]
    }
  ];

  const certifications = [
    {
      title: "Front-End Development with React.js",
      platform: "Udemy / Coursera",
      details: [
        "Learned React.js, Hooks, Context API, Redux, and React Router.",
        "Built multiple responsive web applications."
      ]
    },
    {
      title: "Java Development",
      platform: "Oracle / Udemy",
      details: [
        "Completed Java fundamentals, OOP, collections, multithreading.",
        "Built console-based and GUI applications using Swing & JavaFX."
      ]
    },
    {
      title: "Web Development Essentials",
      platform: "FreeCodeCamp / Coursera",
      details: [
        "Covered HTML, CSS, JavaScript, Bootstrap, and responsive web design.",
        "Hands-on projects: landing pages, portfolio websites, interactive forms."
      ]
    },
    {
      title: "Additional Certifications",
      platform: "",
      details: [
        "Git & GitHub Version Control",
        "Problem Solving & Data Structures",
        "Tailwind CSS & Material-UI for UI design"
      ]
    }
  ];

  return (
    <div className="container-fluid px-5 py-5 text-white" style={{
    backgroundImage: `url(${slider1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "50px 0"}}>
      <h2 className="text-center mb-4">Education & Certifications</h2>

      {/* Academic Education Section */}
      <h4 className="mb-3">Academic Background</h4>
      <div className="row">
        {educationData.map((edu, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 text-animate">
              <div className="card-body">
                <h5 className="card-title">{edu.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{edu.institution}</h6>
                <p className="card-text"><strong>Year:</strong> {edu.year}</p>
                <ul>
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <h4 className="mb-3 mt-5">Certifications & Online Courses</h4>
      <div className="row">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 border-primary text-animate">
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                {cert.platform && <h6 className="card-subtitle mb-2 text-muted">{cert.platform}</h6>}
                <ul>
                  {cert.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm text-dark text-animate">
        <h5>Learning Philosophy</h5>
        <p>
          I strongly believe that learning never stops. Alongside formal education, I actively pursue online courses and real-world projects to sharpen my skills. This combination of academic knowledge and hands-on practice helps me build efficient, modern, and user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default Education;
