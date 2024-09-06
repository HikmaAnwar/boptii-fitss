// /src/app/services/[gender]/page.js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PersonalizedLookbook = () => {
  const router = useRouter();
  const { gender } = router.query; // gender will be 'women' or 'men'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gender) {
      setLoading(false);
    }
  }, [gender]);

  if (loading) {
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
