"use client";

import { useParams } from "next/navigation";

const PersonalizedLookbook = () => {
  const { gender } = useParams(); // 'gender' will be 'women' or 'men'

  if (!gender) {
    return <p>Loading...</p>; // Handle loading state or invalid routes
  }

  return (
    <div>
      <h1>{gender === "women" ? "Women's" : "Men's"} Personalized Lookbook</h1>
      {/* Render specific content based on gender */}
      {gender === "women" ? (
        <p>This is the women's lookbook content.</p>
      ) : (
        <p>This is the men's lookbook content.</p>
      )}
    </div>
  );
};

export default PersonalizedLookbook;
