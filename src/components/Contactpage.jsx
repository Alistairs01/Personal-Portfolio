import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Me</h2>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-6 flex space-x-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
          LinkedIn
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Contact;
