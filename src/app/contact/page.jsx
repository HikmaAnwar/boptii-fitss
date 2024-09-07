"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="bg-white ">
      <div className=" flex flex-col lg:flex-row">
        <div className="mt-56 ml-10  font-serif text-black w-1/2">
          <h1 className="text-black text-5xl mb-10">Contact Us</h1>
          <p className="text-lg mb-6 text-gray-700">
            If you have any questions or comments, please contact us via email,
            instagram DM, or send us a message using the contact form.
          </p>
          <div className="text-black text-lg py-2">
            <h3>Email</h3>
            <Link
              href="https://mailto/management@boptifits.com"
              target="_blank"
              className="text-brown-dark underline"
            >
              management@boptifits.com
            </Link>
            <h3 className="mt-8">Instagram</h3>
            <Link
              href="https://www.instagram.com/boptii/?hl=en"
              target="_blank"
              className="text-brown-dark underline"
            >
              boptii
            </Link>
          </div>
          <div className="w-1/3 flex text-xl justify-start mt-6">
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
      </div>
    </div>
  );
};
export default Contact;
