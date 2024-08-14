"use client";

import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    let timer;
    if (result.message) {
      timer = setTimeout(() => {
        setResult({});
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [result]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
      if (response.status === 200) {
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setResult({
        message: "Message sending failed",
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100vw] p-3 bg-black">
      <h2 className="section-title text-white">Contact Us</h2>
      <h3 className="text-center text-white h-[1rem] ">
        {result?.message || ""}
      </h3>

      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input "
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="block form-input"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 inline-flex"
            disabled={loading}
          >
            {loading ? "Sending....." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
