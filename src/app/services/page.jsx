import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white px-4 py-8 sm:py-16 lg:px-8 h-[1000px]">
      <div className="text-center mt-36 mb-12">
        <h2 className="text-3xl font-semibold  text-gray-800 sm:text-4xl">
          Styling Services
        </h2>
        <div className="mt-14 text-lg text-gray-600">
          <span>Women</span>
          <span className="mx-6">|</span>
          <span>Men</span>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Link href="/services/women-personalized-lookbook">
          <div className="text-center">
            <Image
              src="/assets/women-lookbook.jpg"
              width={500}
              height={500}
              alt="Women's Lookbook"
              className="object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-medium text-gray-800 mt-4">
              Women's Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-lg mt-2">from $150.00</p>
          </div>
        </Link>
        <Link href="/services/men-personalized-lookbook">
          <div className="text-center">
            <Image
              src="/assets/men-lookbook.jpg"
              width={500}
              height={500}
              alt="Men's Lookbook"
              className="object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-medium text-gray-800 mt-4">
              Men's Personalized Lookbook
            </h3>
            <p className="text-gray-600 text-lg mt-2">from $150.00</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
