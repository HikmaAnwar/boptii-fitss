"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ cartItemCount }) => {
  const router = useRouter();

  return (
    <nav className="fixed p-4 top-0 left-0 w-full z-10 bg-white bg-opacity-10 shadow-md backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-full h-20">
        <div className="text-gray-900 font-bold font-serif text-3xl">
          <Link href="/">BOPTII FITS</Link>
        </div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 list-none text-lg">
          <li
            className={`text-gray-900 hover:text-gray-500 ${
              router.pathname === "/" && "underline"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${
              router.pathname === "/howitworks" && "underline"
            }`}
          >
            <Link href="/howitworks">How it works</Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${
              router.pathname === "/services" && "underline"
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`text-gray-900 hover:text-gray-500 ${
              router.pathname === "/contact" && "underline"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-black hover:text-gray-500">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </li>
          <li className="relative text-black hover:text-gray-500">
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="flex items-center p-2 justify-center md:justify-end">
            <Link href="/services">
              <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md">
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
