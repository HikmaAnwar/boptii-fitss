import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-colors-broken-white text-black py-14">
            <div className="container mx-auto flex justify-between items-start">
                
                <div className="w-1/3 text-center">
                    <p className="text-xl font-san font-bold">BOPTII FITS</p>
                </div>
                
                <div className="w-1/3 flex text-xl justify-center">
                    <a href="https://www.linkedin.com/in/hikma-tsegaye/" target='blank' className="text-md mx-2 font-bold hover:text-gray-600" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/boptii/?hl=en" target='blank' className="text-md mx-2 font-bold hover:text-gray-600" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                
                
                <div className="w-1/3 text-center">
                <p className="text-md font-light mb-4">Contact Us</p>
                    <p className="text-md font-light"> Copyright &copy; {new Date().getFullYear()} Hikma Anwar. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
