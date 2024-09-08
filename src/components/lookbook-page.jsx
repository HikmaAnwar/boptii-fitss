import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const WomensPersonalizedLookbook = () => {
  const [clientRender, setClientRender] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [outfitCount, setOutfitCount] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  useEffect(() => {
    setClientRender(true);
  }, []);

  const openModal = () => {
    if (!outfitCount || !deliveryTime) {
      setIsPopupOpen(true); // Show the pop-up if options are not selected
    } else {
      setIsModalOpen(true); // Show the modal if options are selected
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="bg-white px-4 py-8 sm:py-16 lg:px-8">
        <div className="container mx-auto px-4 py-6 mt-24 mb-12">
          <div className="text-lg font-normal text-gray-700 mb-6">
            <Link href="/services">Styling Services</Link> &gt;
            <Link href="/services/women">Women's Personalized Lookbook</Link>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0">
              <Image
                src="/assets/women-lookbook.jpg"
                alt="Lookbook Image"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4">
              <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
                Women's Personalized Lookbook
              </h1>
              <p className="text-black text-lg sm:text-xl mb-12 font-serif">
                from birr 1000.00
              </p>
              <p className="text-lg sm:text-xl py-1 mb-4 text-gray-800">
                This virtual lookbook contains styled outfits based on your
                personal preferences, sizing, and budget. All pieces will be
                linked allowing you to shop for your virtually styled outfits
                directly from your lookbook!
              </p>
              <ul className="list-disc italic text-lg py-2 text-gray-800 ml-6 mb-4">
                <li className="py-1">All lookbooks are delivered via email.</li>
                <li className="py-1">
                  After you place your order, we will email you to send inspo
                  pictures. Please note that your looks may not be as accurate
                  if inspo pictures are not sent.
                </li>
              </ul>
              <p className="text-gray-800 text-lg italic">
                Choose your delivery and outfit preferences, and click order to
                begin your style quiz
              </p>
              <p className="text-gray-800 italic text-lg mt-4 mb-8">
                Prices vary
              </p>
              <div className="space-y-4 mb-4">
                <label
                  htmlFor="Number of outfits"
                  className="block text-md font-serif text-gray-800"
                >
                  Number of Outfits:
                </label>
                <select
                  className="w-full sm:w-2/3 p-4 mb-4 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-colors-broken-white"
                  value={outfitCount}
                  onChange={(e) => setOutfitCount(e.target.value)}
                >
                  <option value="">Select number of outfits</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>

                <label
                  htmlFor="Delivery time"
                  className="block text-md font-serif text-gray-800"
                >
                  Delivery Time:
                </label>
                <select
                  className="w-full sm:w-2/3 p-4 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-colors-broken-white"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                >
                  <option value="">Select Delivery Time</option>
                  <option value="Priority(5-7 days)">Priority(5-7 days)</option>
                  <option value="General(12-15 days)">
                    General(12-15 days)
                  </option>
                </select>
              </div>

              {/* Button to open the modal */}
              <button
                onClick={openModal}
                className="bg-brown-dark w-full sm:w-2/3 text-white p-6 rounded-3xl text-lg my-6"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-xl text-black font-serif mb-4">
              WOMEN STYLE QUIZ
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-black mb-2">First Name: </label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Last Name:</label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Age: </label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Height: </label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">
                  Country of Residence:
                </label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">
                  Instagram:{" "}
                  <p className="text-gray-500">
                    Give your stylist a better feel of your style/aesthetic
                  </p>
                </label>
                <input
                  type="text"
                  className="w-full text-gray-700 p-2 border rounded-sm border-black"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-brown-dark text-white py-2 px-4 rounded-lg hover:bg-beige-dark"
                >
                  Submit Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-xl text-gray-800 font-serif flex justify-center items-center mb-4">
              Unable to Purchase Item
            </h2>
            <p className="text-gray-800 ml-4 font-serif">
              Please select the no of Outfits and Delivery Time options.
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={closePopup}
                className="bg-beige-dark text-sm text-black py-2 px-4 rounded-lg hover:bg-beige-light"
              >
                OKAY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WomensPersonalizedLookbook;
