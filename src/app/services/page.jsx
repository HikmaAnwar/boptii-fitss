/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white px-4 py-8 sm:py-16 lg:px-8 h-screen sm:h-[915px]">
      <div className="text-center mt-16 sm:mt-32 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800">
          Styling Services
        </h2>
        <div className="mt-8 sm:mt-14 text-base sm:text-lg text-gray-600 flex justify-center items-center flex-wrap">
          <span>Women</span>
          <span className="mx-2 sm:mx-6">|</span>
          <span>Men</span>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-8 sm:mb-12 mx-auto w-3/4 sm:w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-8xl mx-2">
        <Link href="/services/women">
          <div className="text-center">
            <Image
              src="/assets/women-lookbook.jpg"
              width={1454}
              height={1400}
              alt="Women's Lookbook"
              className="object-cover rounded-sm shadow-sm w-full h-auto"
            />
            <h3 className="text-lg sm:text-xl font-medium text-gray-800 mt-4">
              Women’s Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              from birr 1000.00
            </p>
          </div>
        </Link>
        <Link href="/services/men">
          <div className="text-center">
            <Image
              src="/assets/men-lookbook.jpg"
              width={1454}
              height={1400}
              alt="Men's Lookbook"
              className="object-cover rounded-sm shadow-sm w-full h-auto"
            />
            <h3 className="text-lg sm:text-xl font-medium text-gray-800 mt-4">
              Men’s Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              from birr 1000.00
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
