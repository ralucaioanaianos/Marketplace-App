// pages/clothing/[name].tsx
import { useRouter } from 'next/router';
import { clothingData } from '@/utils/ClothingData';
import ClothingItem from '@/app/components/ClothingItem';

const ClothingPage = () => {
  const router = useRouter();
  const { name } = router.query;

  // Find the clothing item by name
  const item = clothingData.find((item) => item.name === name);

  // If the item is not found, return a 404 page
  if (!item) {
    return <div>Item not found</div>;
  }

  // Render the clothing item
  return (
    <div>
      <h1>{item.name}</h1>
      <ClothingItem
        name={item.name}
        image={item.image}
        gender={item.gender}
        sizes={item.sizes}
      />
    </div>
  );
};

export default ClothingPage;
