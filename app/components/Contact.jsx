"use client";
import React, { useEffect, useState } from "react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="mt-10 w-full px-[10%] py-14
      bg-no-repeat bg-center"
    >
      <h2
        className={`text-center text-4xl font-semibold mb-6
        ${isDarkMode ? "text-white" : "text-violet-500"} `}
      >
        Contact
      </h2>
      <p
        className="text-center max-w-4xl mx-auto mt-5 mb-10 font-Outfit tracking-wide 
      dark:text-white  text-gray-800 opacity-80 leading-relaxed"
      >
        Got an idea or a question? I’m always open to new opportunities and
        would love to hear from you. Let’s connect and create something amazing
        together!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md shadow-gray-400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="p-4 rounded-md border border-gray-300 focus:outline-none 
            focus:ring-1 focus:ring-violet-400 focus:border-transparent hover:border-violet-300"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-400 hover:border-violet-300 focus:border-transparent"
          />
        </div>
        <textarea
          name="message"
          id=""
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-400 hover:border-violet-300 focus:border-transparent"
        ></textarea>

        <div className="w-full flex justify-center">
          <button type="submit" className="primary-btn mt-5 !w-1/3">
            Submit Now
          </button>
        </div>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
