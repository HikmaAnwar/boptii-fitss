"use client";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/assets/wardrobe2.jpg"
          alt="wardrobe img"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="w-full h-full"
        />
        {/* Sand Grain Overlay */}
        <style jsx>{`
          @keyframes sandMotion {
            0% {
              background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 50% 50%, 80% 20%;
            }
            25% {
              background-position: 1% 1%, -1% 1%, 2% -1%, 10% 15%, 55% 45%, 75% 25%;
            }
            50% {
              background-position: 2% 0%, -2% 0%, 4% 2%, 20% 30%, 60% 40%, 70% 30%;
            }
            75% {
              background-position: 1% -1%, -1% -1%, 2% 1%, 10% 15%, 55% 45%, 75% 25%;
            }
            100% {
              background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 50% 50%, 80% 20%;
            }
          }
          .sand-grain-animated {
            animation: sandMotion 12s ease-in-out infinite;
          }
        `}</style>
        <div
          className="absolute inset-0 pointer-events-none z-[1] sand-grain-animated"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(210, 180, 140, 0.15) 1px, rgba(210, 180, 140, 0.15) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(222, 184, 135, 0.12) 1px, rgba(222, 184, 135, 0.12) 2px),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(244, 164, 96, 0.1) 2px, rgba(244, 164, 96, 0.1) 3px),
              radial-gradient(ellipse at 20% 30%, rgba(210, 180, 140, 0.2) 0%, transparent 1%),
              radial-gradient(ellipse at 60% 70%, rgba(222, 184, 135, 0.18) 0%, transparent 1%),
              radial-gradient(ellipse at 80% 20%, rgba(244, 164, 96, 0.15) 0%, transparent 1%)
            `,
            backgroundSize: '100% 100%, 100% 100%, 150% 150%, 300px 300px, 350px 350px, 400px 400px',
            mixBlendMode: 'multiply',
            opacity: 0.7
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-24 md:pt-44 text-center z-10">
          <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl font-serif mt-8 mb-6">
            VIRTUAL WARDROBE STYLING
          </p>
          <Link
            href="https://www.instagram.com/boptii/?hl=en"
            target="_blank"
            className="text-black underline italic mt-4 my-4 text-sm sm:text-base"
          >
            By Hikma Anwar
          </Link>
          <Link href="/services">
            <button className="bg-brown-dark text-white p-2 sm:p-3 pl-4 sm:pl-6 pr-4 sm:pr-6 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-3xl text-sm sm:text-md my-6">
              Get Styled
            </button>
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-0 px-0">
        <div className="relative">
          <Image
            src="/assets/vogue.jpg"
            alt="vogue cover"
            layout="responsive"
            width={1500}
            height={2000}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 mt-4 pb-16 md:pb-24">
            <p className="italic font-semibold font-serif text-black text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-16 pb-8 md:pb-14">
              HOW IT WORKS
            </p>
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4 pb-4 w-full max-w-5xl">
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
                <h3 className="text-lg sm:text-xl text-center text-black font-serif font-semibold">
                  STEP 1: STYLE QUIZ & PAYMENT
                </h3>
                <p className="mt-2 text-center text-black font-san text-sm sm:text-base">
                  Help our stylists create your personalized outfits by taking a
                  25 question style quiz about your sizing, budget, aesthetic,
                  and more! After the style quiz, your Lookbook will be added to
                  your cart to check out and place your order.
                </p>
              </div>
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
                <h3 className="text-lg sm:text-xl text-center text-black font-serif font-semibold">
                  STEP 2: WAITING PERIOD
                </h3>
                <p className="mt-2 text-center text-black font-san text-sm sm:text-base">
                  Once your order is processed, you may email us inspo pictures
                  or products you already own that you would like to see styled
                  in your lookbook. Our stylists will start creating your
                  Lookbook and send within the delivery time you chose!
                </p>
              </div>
              <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
                <h3 className="text-lg sm:text-xl font-semibold font-serif text-center text-black">
                  STEP 3: RECEIVAL & DIRECT SHOPPING
                </h3>
                <p className="mt-2 text-center text-black font-san text-sm sm:text-base">
                  Receive your Personalized Lookbook via your preferred email
                  and start shopping for your outfits directly from your
                  Lookbook! All styled pieces in your Lookbook will be linked,
                  enabling you to easily click and shop.
                </p>
              </div>
            </div>
            <Link className="pt-6" href="/services">
              <button className="bg-brown-dark text-white p-2 sm:p-3 pl-4 sm:pl-6 pr-4 sm:pr-6 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-3xl text-sm sm:text-md my-6">
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
