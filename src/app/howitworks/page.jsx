import Link from "next/link";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <p className="font-semibold font-san my-6 text-black text-center text-3xl md:text-4xl pt-32 md:pt-52 pb-8">
        HOW IT WORKS
      </p>
      <div className="relative w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 px-4 md:px-8">
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
          <Image
            src="/assets/check-list.jpg"
            alt="images"
            width={500}
            height={100}
            className="w-full h-auto"
          />
          <h3 className="text-lg md:text-xl text-center text-black font-serif font-semibold mt-4">
            STEP 1: STYLE QUIZ & PAYMENT
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Help our stylists create your personalized outfits by taking a 25
            question style quiz about your sizing, budget, aesthetic, and more!
            After the style quiz, your Lookbook will be added to your cart to
            check out and place your order.
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
          <Image
            src="/assets/card.jpg"
            alt="images"
            width={500}
            height={100}
            className="w-full h-auto"
          />
          <h3 className="text-lg md:text-xl text-center text-black font-serif font-semibold mt-4">
            STEP 2: WAITING PERIOD
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Once your order is processed, you may email us inspo pictures or
            products you already own that you would like to see styled in your
            Lookbook. Our stylists will start creating your Lookbook and send
            within the delivery time you chose!
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
          <Image
            src="/assets/hour-glass.jpg"
            alt="images"
            width={500}
            height={100}
            className="w-full h-auto"
          />
          <h3 className="text-lg md:text-xl text-center text-black font-serif font-semibold mt-4">
            STEP 3: RECEIVAL & DIRECT SHOPPING
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Receive your Personalized Lookbook via your preferred email and
            start shopping for your outfits directly from your Lookbook! All
            styled pieces in your Lookbook will be linked, enabling you to
            easily click and shop.
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg flex-1">
          <Image
            src="/assets/t-shirt.jpg"
            alt="images"
            width={500}
            height={100}
            className="w-full h-auto"
          />
          <h3 className="text-lg md:text-xl text-center text-black font-serif font-semibold mt-4">
            STEP 4: STYLE YOUR OUTFIT
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Now that you have your personalized Lookbook, you can start styling
            your outfit! Each piece is carefully selected to match your
            preferences, making your shopping experience seamless.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-12">
        <Link href="/services">
          <button className="bg-brown-dark text-white px-6 py-4 rounded-3xl text-md">
            Get Styled
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
