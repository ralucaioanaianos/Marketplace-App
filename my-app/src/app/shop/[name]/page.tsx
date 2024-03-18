// pages/shop/[name].tsx
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { clothingData } from '@/utils/ClothingData';
import ClothesList from '@/app/components/ClothesList';

const ClothingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams() // Get URLSearchParams object
  
  const page = searchParams.get('page'); // Get the value of the 'page' parameter

  // Convert page number to integer
  const pageNumber = parseInt(page || '1', 10); // Use default value '1' if page is null or undefined

  // Calculate start and end indices based on page number
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter clothing data for the current page
  const currentClothingData = clothingData.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Shop Page {page}</h1>
      <ClothesList clothingData={currentClothingData} itemsPerPage={0} currentPage={0} />
    </div>
  );
};

export default ClothingPage;
