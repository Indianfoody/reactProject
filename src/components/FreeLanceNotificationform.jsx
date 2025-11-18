import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ⚠️ IMPORTANT: Replace these with your actual keys from EmailJS
const SERVICE_ID = 'YOUR_SERVICE_ID'; 
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

const FreelanceNotificationForm = () => {
  // State to hold ALL required form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '', // New field for contact number
    description: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to check if all fields are non-empty
  const validateForm = () => {
    const { name, email, contactNo, description } = formData;
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      contactNo.trim() !== '' &&
      description.trim() !== ''
    );
  };

  // Handles changes to any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Trigger submission attempt for error display

    if (!validateForm()) {
      alert('Please fill out all compulsory fields.');
      return;
    }
    
    setIsSending(true);

    // Data must be mapped to match your EmailJS template variable names
    const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_contact: formData.contactNo,
        description: formData.description,
    };

    // Use send() method as we are sending a direct object, not reading from DOM
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
    })
    .then(
      (result) => {
        console.log('EmailJS SUCCESS!', result.text);
        alert('Thank you! Your inquiry has been sent.');
        
        // Reset form
        setFormData({ name: '', email: '', contactNo: '', description: '' });
        setIsSubmitted(false);
      },
      (error) => {
        console.error('EmailJS FAILED...', error.text);
        alert(`Failed to send inquiry. Please try again later. Error: ${error.text}`);
      }
    )
    .finally(() => {
      setIsSending(false);
    });
  };
  
  // Helper component for error message
  const ErrorMessage = ({ fieldName }) => {
    if (isSubmitted && formData[fieldName].trim() === '') {
      return <p style={{ color: 'red', fontSize: '0.9em', marginTop: '4px' }}>This field is compulsory.</p>;
    }
    return null;
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>📞 Freelance Reachout Form</h2>
      <p>All fields are compulsory for a notification to be sent.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Input */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Your Name*</label>
          <input
            type="text"
            name="name" // Matches state key
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <ErrorMessage fieldName="name" />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Email Address*</label>
          <input
            type="email"
            name="email" // Matches state key
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <ErrorMessage fieldName="email" />
        </div>
        
        {/* Contact Number Input */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Contact Number*</label>
          <input
            type="tel"
            name="contactNo" // Matches state key
            value={formData.contactNo}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <ErrorMessage fieldName="contactNo" />
        </div>

        {/* Description Textarea */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Project Description*</label>
          <textarea
            name="description" // Matches state key
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your project..."
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          ></textarea>
          <ErrorMessage fieldName="description" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSending}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: isSending ? '#888' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: isSending ? 'not-allowed' : 'pointer'
          }}
        >
          {isSending ? 'SENDING...' : 'SEND INQUIRY'}
        </button>
      </form>
    </div>
  );
};

export default FreelanceNotificationForm;