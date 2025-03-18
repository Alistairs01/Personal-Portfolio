import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("All fields are required!");
      return;
    }

    try {
      await emailjs.send(
        "service_3szuzrf",
        "template_ozyk69l",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "3bsKc--NGbYAkhUlM"
      );

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="contact-wrapper">
        {/* Contact Information */}
        <div className="contact-info">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            Feel free to reach out to me through this form. Alternatively, you
            can contact me directly via:
          </p>
          <p className="text-gray-300 mt-2">
            📧 Email:{" "}
            <a href="mailto:alistairsmunene@gmail.com" className="text-blue-400">
              alistairsmunene@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mt-1">
            📞 Mobile:{" "}
            <a href="tel:+254790601321" className="text-blue-400">
              +254 790 601 321
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Me</h2>

            <label className="block mb-4">
              <span className="text-gray-300">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="input-field"
                required
              ></textarea>
            </label>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
