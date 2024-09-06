"use client";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative h-screen w-full">
        <Image
          src="/assets/wardrobe.jpg"
          alt="wardrobe img"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-28 text-center">
          <p className="text-black font-bold text-4xl font-serif mt-8 mb-6">
            VIRTUAL WARDROBE STYLING
          </p>
          <Link
            href="https://www.instagram.com/boptii/?hl=en"
            target="_blank"
            className="text-black underline italic mt-4 my-4"
          >
            By Hikma Anwar
          </Link>
          <Link href="/services">
            <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md my-6">
              Get Styled
            </button>
          </Link>
        </div>
      </div>

      <div className="py-0 px-0">
        <div className="relative">
          <Image
            src="/assets/vogue.jpg"
            alt="vogue cover"
            layout="responsive"
            width={1500}
            height={2000}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-4 pb-24">
            <p className="italic font-semibold font-serif text-black text-4xl mb-16 pb-14">
              HOW IT WORKS
            </p>
            <div className="flex space-x-4">
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-md flex-1">
                <h3 className="text-xl text-center text-black font-serif items-center font-semibold">
                  STEP 1: STYLE QUIZ & PAYMENT
                </h3>
                <p className="mt-2 text-center text-black font-san">
                  Help our stylists create your personalized outfits by taking a
                  25 question style quiz about your sizing, budget, aesthetic,
                  and more! After the style quiz, your Lookbook will be added to
                  your cart to check out and place your order.
                </p>
              </div>
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-sm flex-1">
                <h3 className="text-xl text-center text-black font-serif font-semibold">
                  STEP 2: WAITING PERIOD
                </h3>
                <p className="mt-2 text-center text-black font-san">
                  Once your order is processed, you may email us inspo pictures
                  or products you already own that you would like to see styled
                  in your lookbook. Our stylists will start creating your
                  Lookbook and send within the delivery time you chose! .
                </p>
              </div>
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-sm flex-1">
                <h3 className="text-xl font-semibold font-serif text-center text-black">
                  STEP 3: RECEIVAL & DIRECT SHOPPING
                </h3>
                <p className="mt-2 text-center text-black font-san">
                  Receive your Personalized Lookbook via your preferred email
                  and start shopping for your outfits directly from your
                  Lookbook! All styled pieces in your Lookbook will be linked,
                  enabling you to easily click and shop.
                </p>
              </div>
            </div>
            <Link href="/services">
              <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md my-6">
                Get Styled
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
