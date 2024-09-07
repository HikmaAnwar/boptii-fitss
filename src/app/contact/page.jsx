"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="mt-10 lg:mt-56 mx-4 lg:mx-10 font-serif text-black lg:w-1/2">
          <h1 className="text-black text-4xl lg:text-5xl mb-6 lg:mb-10">
            Contact Us
          </h1>
          <p className="text-lg mb-6 lg:mb-10 text-gray-700">
            If you have any questions or comments, please contact us via email,
            Instagram DM, or send us a message using the contact form.
          </p>
          <div className="text-black text-lg py-2">
            <h3 className="font-semibold">Email</h3>
            <Link
              href="https://mailto/management@boptifits.com"
              target="_blank"
              className="text-brown-dark underline"
            >
              management@boptifits.com
            </Link>
            <h3 className="mt-8 font-semibold">Instagram</h3>
            <Link
              href="https://www.instagram.com/boptii/?hl=en"
              target="_blank"
              className="text-brown-dark underline"
            >
              boptii
            </Link>
          </div>
          <div className="text-xl justify-start mt-6 mb-4">
            <a
              href="https://www.tiktok.com/@itsbopti?lang=en"
              target="_blank"
              className="text-md mx-2 font-bold hover:text-gray-600"
              aria-label="Tiktok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://www.linkedin.com/in/hikma-tsegaye/"
              target="_blank"
              className="text-md mx-2 font-bold hover:text-gray-600"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/boptii/?hl=en"
              target="_blank"
              className="text-md mx-2 font-bold hover:text-gray-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-4 mt-10 lg:mt-64 mb-10 px-4 lg:px-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-brown-dark font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full lg:w-2/3 px-3 py-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-dark"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-brown-dark font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full lg:w-2/3 px-3 py-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-dark"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-brown-dark font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full lg:w-2/3 px-3 py-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-dark"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-brown-dark font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full lg:w-2/3 px-3 py-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-dark"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-brown-dark font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full lg:w-2/3 px-3 py-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-dark"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-brown-dark text-white font-serif text-lg py-4 px-6 my-4 rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
