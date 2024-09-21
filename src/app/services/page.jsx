/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white px-4 py-8 sm:py-16 lg:px-8 h-[915px]">
      <div className="text-center mt-32 mb-12">
        <h2 className="text-4xl font-serif text-gray-800 sm:text-5xl">
          Styling Services
        </h2>
        <div className="mt-14 text-lg text-gray-600">
          <span>Women</span>
          <span className="mx-6">|</span>
          <span>Men</span>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-8xl mx-2">
        <Link href="/services/women">
          <div className="text-center">
            <Image
              src="/assets/women-lookbook.jpg"
              width={1454}
              height={1400}
              alt="Women's Lookbook"
              className="object-cover rounded-sm shadow-sm"
            />
            <h3 className="text-xl font-medium text-gray-800 mt-4">
              Women&rsquo;s Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-lg mt-2">from birr 1000.00</p>
          </div>
        </Link>
        <Link href="/services/men">
          <div className="text-center">
            <Image
              src="/assets/men-lookbook.jpg"
              width={1454}
              height={1400}
              alt="Men's Lookbook"
              className="object-cover rounded-sm shadow-sm"
            />
            <h3 className="text-xl font-medium text-gray-800 mt-4">
              Men&rsquo;s Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-lg mt-2">from birr 1000.00</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
