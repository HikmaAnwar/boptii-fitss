'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cartItemCount }) => {
  const router = useRouter();

  return (
    <nav className="fixed p-10 top-0 left-0 w-full z-10 bg-white bg-opacity-35 shadow-md transition-all duration-300">
      <div className="flex justify-between items-center p-0.5 text-black mx-auto w-full h-20">
        <div className="text-gray-900 font-bold font-serif text-3xl">
          <Link href="/">BOPTII FITS</Link>
        </div>
        <ul className="flex space-x-6 list-none text-lg">
          <li className={`text-gray-900 pt-2 hover:text-gray-500 mt-6 ${router.pathname === '/' && 'underline'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`text-gray-900 pt-2 hover:text-gray-500  mt-6 ${router.pathname === '/howitworks' && 'underline'}`}>
            <Link href="/howitworks">How it works</Link>
          </li>
          <li className={`text-gray-900 pt-2 hover:text-gray-500  mt-6 ${router.pathname === '/services' && 'underline'}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`text-gray-900 pt-2 hover:text-gray-500  mt-6 ${router.pathname === '/contact' && 'underline'}`}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-black pt-2 hover:text-gray-500  mt-6">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </li>
          <li className="relative text-black pt-2 hover:text-gray-500 mt-6">
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="flex items-center p-2 mt-2 justify-end">
            <Link href="/services">
              <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md">Get Styled</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
