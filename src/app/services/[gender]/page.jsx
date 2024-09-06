"use client";

import { useParams } from "next/navigation";
import WomensPersonalizedLookbook from "@/components/lookbook-page";

const PersonalizedLookbook = () => {
  const { gender } = useParams();

  if (!gender) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{gender === "women" ? "Women's" : "Men's"} Personalized Lookbook</h1>

      {gender === "women" ? (
        <WomensPersonalizedLookbook />
      ) : (
        <p>This is the men's lookbook content.</p>
      )}
    </div>
  );
};

export default PersonalizedLookbook;
