import { useRouter } from 'next/router';
import React from 'react';

const ClothingDetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return <h1>Clothing Details Page for: {name}</h1>;
};

export default ClothingDetailsPage;
