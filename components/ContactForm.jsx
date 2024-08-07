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
    <div className="w-[100vw] p-3">
      <h2 className="text-center text-xl bg-gidiYellow w-[40%] m-auto mb-2">
        Contact Us
      </h2>
      <h3 className="text-center text-white h-[1rem] ">{result?.message || ""}</h3>

      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-yellow-400 hover:bg-yellow-500 w-full focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
