// import React from "react";
// import "../assests/custom.css";
// const Contact = () => {
//   return (
//     <><div className="contact-page text-white d-flex align-items-center">
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-md-8 col-lg-7">
//             <div className="text-center mb-4">

//               <h1 className="fw-bold">Send Me a Message</h1>
//               <p className="mt-3 fw-bold">Getting in touch is easy!</p>
//             </div>

//             <div className="text-center mb-4 fw-bold">
//               <p>Ghaziabad</p>
//               <p>8882863559</p>
//               <p>kajalchandel2001gmail.com</p>
//               <div>
//                 <a href="#" className="btn btn-outline-light btn-sm mx-1">
//                   <i className="bi bi-pinterest"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm mx-1">
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm mx-1">
//                   <i className="bi bi-twitter"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm mx-1">
//                   <i className="bi bi-google"></i>
//                 </a>
//               </div>
//             </div>

//             <form>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-control"
//                   rows="4"
//                   placeholder="Write us about any project. We’d love to work with you!"
//                   required
//                 ></textarea>
//               </div>
//               <div className="text-end">
//                 <button type="submit" className="btn btn-warning text-uppercase fw-bold">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div></>
//   )
// }
// export default Contact;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assests/custom.css";

// ⚠️ IMPORTANT: Replace these with your actual keys from EmailJS
const SERVICE_ID = "service_sow89bp";
const TEMPLATE_ID = "template_ojxzyak";
const PUBLIC_KEY = "hry528eQkmDLyCV5q";

const Contact = () => {
  // Hook to reference the <form> element
  const form = useRef();
  // State to manage the button text/loading state
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Disable button and show loading text

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear the form fields on success
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert(`Failed to send message: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSending(false); // Re-enable the button
      });
  };

  return (
    <>
      <div className="contact-page text-white d-flex align-items-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              {/* ... Header and Contact Info (omitted for brevity) ... */}
              <div className="text-center mb-4">
                <h1 className="fw-bold">Send Me a Message</h1>
                <p className="mt-3 fw-bold">Getting in touch is easy!</p>
              </div>
              <div className="text-center mb-4 fw-bold">
                <p>Ghaziabad</p>
                <p>8882863559</p>
                <p>kajalchandel2001gmail.com</p>
                {/* ... Social Icons (omitted for brevity) ... */}
              </div>

              {/* 🎯 Updated Form Element */}
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    // 1. Add the 'name' attribute matching the template variable
                    name="user_name" 
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    // 2. Add the 'name' attribute matching the template variable
                    name="user_email" 
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    // 3. Add the 'name' attribute matching the template variable
                    name="message" 
                    className="form-control"
                    rows="4"
                    placeholder="Write us about any project. We’d love to work with you!"
                    required
                  ></textarea>
                </div>
                <div className="text-end">
                  {/* 4. Use the isSending state to manage button state/text */}
                  <button 
                    type="submit" 
                    className="btn btn-warning text-uppercase fw-bold"
                    disabled={isSending}
                  >
                    {isSending ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;