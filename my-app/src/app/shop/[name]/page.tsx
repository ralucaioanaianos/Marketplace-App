'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { clothingData } from '@/utils/ClothingData';
import ClothesList from '@/app/components/ClothesList';

const ClothingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams() 
  
  const page = searchParams.get('page'); 
  const pageNumber = parseInt(page || '1', 10);
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, clothingData.length) ;
  const currentClothingData = clothingData.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Shop Page {page}</h1>
      <ClothesList clothingData={clothingData} itemsPerPage={10} currentPage={0} />
    </div>
  );
};

export default ClothingPage;
