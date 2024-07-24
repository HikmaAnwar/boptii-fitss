'use client';
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
  return (
    <div className= "flex bg-white">
      <Image src="/assets/wardrope.jpg" alt="wardrope img"layout="fill" objectFit="cover" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-24">
        <p className="text-black mx-auto font-bold text-4xl font-serif mt-8 mb-6">VIRTUAL WARDROBE STYLING</p>
        <Link href="https://www.instagram.com/boptii/?hl=en" target="blank" className="text-black underline italic mt-4 my-4">By Hikma Anwar</Link>
        <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md my-6">Get Styled</button>
        
      </div>
    </div>
  );
}

export default Home;
