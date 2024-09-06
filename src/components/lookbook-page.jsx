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
      <div className="bg-white px-4 py-8 sm:py-16 lg:px-8 h-[915px]">
        <div className="container mx-auto px-4 py-6 mt-24 mb-12">
          <div className="text-lg font-thin  text-gray-600 mb-6">
            <Link href="/services">Styling Services</Link> &gt;
            <Link href="/services/women">Women's Personalized Lookbook</Link>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <Image
                src="/assets/women-lookbook.jpg"
                alt="Lookbook Image"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-2">
              <h1 className=" text-black text-lg font-bold ">
                Women's Personalized Lookbook
              </h1>
              <p className="text-lg mb-4">
                Description of the lookbook goes here. It can be a detailed
                description about the styling service.
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <div className="space-y-4 mb-4">
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
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
