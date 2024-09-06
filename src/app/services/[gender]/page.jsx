"use client";

import { useParams } from "next/navigation";

const PersonalizedLookbook = () => {
  const { gender } = useParams();

  if (!gender) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{gender === "women" ? "Women's" : "Men's"} Personalized Lookbook</h1>

      {gender === "women" ? (
        <p>This is the women's lookbook content.</p>
      ) : (
        <p>This is the men's lookbook content.</p>
      )}
    </div>
  );
};

export default PersonalizedLookbook;
