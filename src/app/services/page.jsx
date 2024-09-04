import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white">
      <div>
        <h2 className="flex min-h-screen justify-center items-center text-black text-3xl">
          Styling Services
        </h2>
        <hr className="border-t border-gray-300 mb-6" />
        <div className="flex justify-center space-x-8 mb-6">
          <Image src="/assets/women-lookbook.jpg" width={500} height={100} />
          <Image src="/assets/men-lookbook.jpg" width={500} height={100} />
        </div>
      </div>
    </div>
  );
};
export default Services;
