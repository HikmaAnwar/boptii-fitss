'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cartItemCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 bg-white' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center bg-white rounded-sm shadow-md p-6 text-black mx-auto w-full h-76">
        <div className="text-gray-900 font-bold font-serif text-3xl">
          <Link href="/">BOPTII FITS</Link>
        </div>
        <ul className="flex space-x-6 list-none text-lg">
          <li className={`text-gray-900 pt-8 hover:text-gray-500 ${router.pathname === '/' && 'underline'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`text-gray-900 pt-8 hover:text-gray-500 ${router.pathname === '/howitworks' && 'underline'}`}>
            <Link href="/howitworks">How it works</Link>
          </li>
          <li className={`text-gray-900 pt-8 hover:text-gray-500 ${router.pathname === '/services' && 'underline'}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`text-gray-900 pt-8 hover:text-gray-500 ${router.pathname === '/contact' && 'underline'}`}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-black pt-8 hover:text-gray-500">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </li>
          <li className="relative text-black pt-8 hover:text-gray-500">
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="flex items-center p-2">
            <Link href="/services">
              <button className="bg-brown-dark text-white p-6 mr-2 ml-2 rounded-3xl text-md">Get Styled</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
