"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PersonalizedLookbook = () => {
  const router = useRouter();
  const { gender } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gender) {
      setLoading(false);
    }
  }, [gender]);

  if (loading) {
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
