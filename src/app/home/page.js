'use client';
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative h-screen w-full">
        <Image src="/assets/wardrobe.jpg" alt="wardrope img" layout="fill" objectFit="cover" className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-28 text-center">
          <p className="text-black font-bold text-4xl font-serif mt-8 mb-6">VIRTUAL WARDROBE STYLING</p>
          <Link href="https://www.instagram.com/boptii/?hl=en" target="blank" className="text-black underline italic mt-4 my-4">By Hikma Anwar</Link>
          <Link href="/services">
            <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md my-6">Get Styled</button>
          </Link>
        </div>
      </div>

      <div className="py-0 px-0">
        <div className="relative">
          <Image src="/assets/vogue.jpg" alt="vogue cover" layout="responsive" width={1500} height={2000} />
          {/* Cards */}
          <div className="absolute inset-0 flex justify-center items-center mt-12">
            <div className="flex space-x-4">
              <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg max-w-sm flex-1">
                <h3 className="text-xl font-semibold">Card 1</h3>
                <p className="mt-2">Card description goes here.</p>
              </div>
              <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg max-w-sm flex-1">
                <h3 className="text-xl font-semibold">Card 2</h3>
                <p className="mt-2">Card description goes here.</p>
              </div>
              <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg max-w-sm flex-1">
                <h3 className="text-xl font-semibold">Card 3</h3>
                <p className="mt-2">Card description goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
