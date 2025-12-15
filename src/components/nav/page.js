"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ cartItemCount }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed p-4 top-0 left-0 w-full z-10 bg-white bg-opacity-10 shadow-md backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-full h-20">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-gray-900 font-bold font-serif text-3xl">
            <Link href="/">BOPTII FITS</Link>
          </div>
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 list-none text-lg w-full md:w-auto absolute md:static top-20 left-0 bg-white md:bg-transparent bg-opacity-90 md:bg-opacity-10 p-4 md:p-0 transition-all duration-300`}
        >
          <li
            className={`text-gray-900 hover:text-gray-500 ${router.pathname === "/" && "underline"
              }`}
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${router.pathname === "/howitworks" && "underline"
              }`}
          >
            <Link href="/howitworks" onClick={() => setIsMobileMenuOpen(false)}>
              How it works
            </Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${router.pathname === "/services" && "underline"
              }`}
          >
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${router.pathname === "/contact" && "underline"
              }`}
          >
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="text-black hover:text-gray-500">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </li>
          <li className="relative text-black hover:text-gray-500">
            <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="flex items-center justify-center md:justify-end">
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-brown-dark text-white px-5 py-2 rounded-3xl text-md -mt-2">
                Get Styled
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
