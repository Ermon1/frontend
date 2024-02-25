// src/ContactPage.tsx



import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="mx-auto mt-8 p-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <p className="mb-6 text-center text-gray-700">
        Have any questions, feedback, or suggestions? Feel free to get in touch
        with us using the form below.
      </p>

      <form className="flex flex-col items-center justify-center">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
