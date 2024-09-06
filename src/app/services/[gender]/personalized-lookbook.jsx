import { Router, useRouter } from "next/router";

const PersonalizedLookbook = () => {
  const router = useRouter();
  const { gender } = router.query;

  if (!gender) {
    return <p>Loading...</p>;
  }
};
