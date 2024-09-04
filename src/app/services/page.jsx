import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white">
      <div>
        <h2 className="flex mb-6 min-h-screen justify-center items-center text-black text-3xl">
          Styling Services
        </h2>
      </div>
      <hr className="border-t border-gray-300 mb-6" />
      <div className="flex justify-center space-x-8 mb-12">
        <div>
          <Image src="/assets/women-lookbook.jpg" width={500} height={100} />
          <p className="text-black text-xl mt-2">
            Women's Personalized Lookbook
          </p>
          <p className="text-black text-md mt-2  mb-8">from $150.00</p>
        </div>
        <div>
          <Image src="/assets/men-lookbook.jpg" width={500} height={100} />
          <p className="text-black text-xl mt-2">Men's Personalized Lookbook</p>
          <p className="text-black text-md mt-2  mb-8">from $150.00</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
