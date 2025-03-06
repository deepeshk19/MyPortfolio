import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000); // Simulate API delay
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        {submitted ? (
          <p className="success-message">✅ Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
              required
            />
            {errors.message && <p className="error-text">{errors.message}</p>}

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
