import Link from "next/link";
import Image from "next/image";
const HowItWorks = () => {
  return (
    <div className="bg-white">
      <p className=" font-semibold font-san  text-black text-center text-4xl pt-52 pb-14 ">
        HOW IT WORKS
      </p>
      <div className="relative h-screen w-full flex space-x-4">
        <div className="bg-colors-broken-white p-4 rounded-lg shadow-lg max-w-md  flex-1">
          <Image
            src="/assets/check-list.jpg"
            alt="images"
            width={500}
            height={100}
          />
          <h3 className="text-xl text-center text-black font-serif items-center font-semibold">
            STEP 1: STYLE QUIZ & PAYMENT
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Help our stylists create your personalized outfits by taking a 25
            question style quiz about your sizing, budget, aesthetic, and more!
            After the style quiz, your Lookbook will be added to your cart to
            check out and place your order.
          </p>
        </div>
        <div className="bg-colors-broken-white  p-4 rounded-lg shadow-lg max-w-sm flex-1">
          <Image src="/assets/card.jpg" alt="images" width={500} height={100} />
          <h3 className="text-xl text-center text-black font-serif font-semibold">
            STEP 2: WAITING PERIOD
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Once your order is processed, you may email us inspo pictures or
            products you already own that you would like to see styled in your
            lookbook. Our stylists will start creating your Lookbook and send
            within the delivery time you chose! .
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
            Receive your Personalized Loobook via your preferred email and start
            shopping for your outfits directly from your Lookbook! All styled
            pieces in your Lookbook will be linked, enabling you to easily click
            and shop.
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
            STEP 3: RECEIVAL & DIRECT SHOPPING
          </h3>
          <p className="mt-2 text-center text-black font-san">
            Receive your Personalized Loobook via your preferred email and start
            shopping for your outfits directly from your Lookbook! All styled
            pieces in your Lookbook will be linked, enabling you to easily click
            and shop.
          </p>
        </div>
      </div>
      <Link href="/services">
        <button className="bg-brown-dark text-white p-3 pl-6 pr-6 pt-4 pb-4 rounded-3xl text-md my-6">
          Get Styled
        </button>
      </Link>
    </div>
  );
};
export default HowItWorks;
