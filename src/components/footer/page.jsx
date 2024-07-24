import React from 'react';

const Footer = () => {
    return(
        <footer className="bg-colors-broken-white text-black py-4">
            <div className="container mx-auto justify-between items-center">
                <div className="text-sm">
                    <p>BOPTII FITS</p>
                </div>
                <div className="text-sm">
                    &copy {new Date().getFullYear()} Boptii. All rights reserved.
                </div>
            
            </div>
        </footer>
    )
}

export default Footer;