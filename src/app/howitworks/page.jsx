import Link from "next/link";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-white w-full min-h-screen pb-16">
      <p className="font-semibold font-san my-6 text-black text-center text-4xl pt-52 pb-8">
        HOW IT WORKS
      </p>
      <div className="relative w-full flex space-x-4">
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-md flex-1">
          <Image
            src="/assets/check-list.jpg"
            alt="images"
            width={500}
            height={100}
          />
          <h3 className="text-xl text-center text-black font-serif font-semibold">
            STEP 1: STYLE QUIZ & PAYMENT
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Help our stylists create your personalized outfits by taking a 25
            question style quiz about your sizing, budget, aesthetic, and more!
            After the style quiz, your Lookbook will be added to your cart to
            check out and place your order.
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-sm flex-1">
          <Image src="/assets/card.jpg" alt="images" width={500} height={100} />
          <h3 className="text-xl text-center text-black font-serif font-semibold">
            STEP 2: WAITING PERIOD
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Once your order is processed, you may email us inspo pictures or
            products you already own that you would like to see styled in your
            Lookbook. Our stylists will start creating your Lookbook and send
            within the delivery time you chose!
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-sm flex-1">
          <Image
            src="/assets/hour-glass.jpg"
            alt="images"
            width={500}
            height={100}
          />
          <h3 className="text-xl font-semibold font-serif text-center text-black">
            STEP 3: RECEIVAL & DIRECT SHOPPING
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Receive your Personalized Lookbook via your preferred email and
            start shopping for your outfits directly from your Lookbook! All
            styled pieces in your Lookbook will be linked, enabling you to
            easily click and shop.
          </p>
        </div>
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-sm flex-1">
          <Image
            src="/assets/t-shirt.jpg"
            alt="images"
            width={500}
            height={100}
          />
          <h3 className="text-xl font-semibold font-serif text-center text-black">
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
          <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md">
            Get Styled
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
