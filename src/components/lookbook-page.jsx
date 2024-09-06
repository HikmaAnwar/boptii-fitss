import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const WomensPersonalizedLookbook = () => {
  const [clientRender, setClientRender] = useState(false);

  useEffect(() => {
    setClientRender(true);
  }, []);

  return (
    <>
      <div className="bg-white px-4 py-8 sm:py-16 lg:px-8">
        <div className="container mx-auto px-4 py-6 mt-24 mb-12">
          <div className="text-lg font-normal text-gray-700 mb-6">
            <Link href="/services">Styling Services</Link> &gt;
            <Link href="/services/women">Women's Personalized Lookbook</Link>
          </div>

          <div className="flex">
            <div className="w-1/2 pr-4">
              {" "}
              {/* Image container */}
              <Image
                src="/assets/women-lookbook.jpg"
                alt="Lookbook Image"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-4">
              {" "}
              {/* Text content container */}
              <h1 className="text-black text-5xl font-serif mb-4">
                Women's Personalized Lookbook
              </h1>
              <p className="text-black text-xl mb-6 font-serif">
                from birr 1000.00
              </p>
              <p className="text-lg mb-4 text-black">
                This virtual lookbook contains styled outfits based on your
                personal preferences, sizing, and budget. All pieces will be
                linked allowing you to shop for your virtually styled outfits
                directly from your lookbook!
              </p>
              <ul className="list-disc text-black ml-6 mb-4">
                <li>All lookbooks are delivered via email.</li>
                <li>
                  After you place your order, we will email you to send inspo
                  pictures. Please note that your looks may not be as accurate
                  if inspo pictures are not sent.
                </li>
              </ul>
              <p className="text-black">
                Choose your delivery and outfit preferences, and click order to
                begin your style quiz
              </p>
              <p className="text-black mt-4 mb-8">Prices vary</p>
              <div className="space-y-4 mb-4">
                <select className="w-full p-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Delivery Preference</option>
                  <option value="standard">Standard</option>
                  <option value="express">Express</option>
                </select>
                <select className="w-full p-2  text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Outfit Preference</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                </select>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomensPersonalizedLookbook;
