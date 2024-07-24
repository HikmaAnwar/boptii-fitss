import Link from "next/link";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav className="flex justify-between items-center bg-white rounded-sm p-10 text-black mx-auto w-full h-76">
      <div className="text-black font-bold font-serif text-3xl">
        <Link href="/">BOPTII FITS</Link>
      </div>
      <ul className="flex space-x-6 list-none">
        <li className="text-black hover:text-gray-500">
          <Link href="/">Home</Link>
        </li>
        <li className="text-black hover:text-gray-500">
          <Link href="/howitworks">How it works</Link>
        </li>
        <li className="text-black hover:text-gray-500">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-black hover:text-gray-500">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="text-black hover:text-gray-500">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
        </li>
        <li className="relative text-black hover:text-gray-500">
          <Link href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
        <li>
          <button href="/services" className="bg-brown text-black p-4 rounded-3xl">Get Styled</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
