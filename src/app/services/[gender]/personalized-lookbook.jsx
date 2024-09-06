import { Router, useRouter } from "next/router";

const PersonalizedLookbook = () => {
  const router = useRouter();
  const { gender } = router.query;

  if (!gender) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{gender === "women" ? "women's" : "Men's"} Personalized Lookbook</h1>
      {gender === "women" ? <p>....</p> : <p>mbnkdnj</p>}
    </div>
  );
};

export default PersonalizedLookbook;
