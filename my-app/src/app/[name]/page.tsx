'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { clothingData } from '@/utils/ClothingData';
import ClothesList from '@/app/components/ClothesList';
import React, { useState } from 'react';

const ClothingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const page = searchParams.get('page'); 
  const pageNumber = parseInt(page || '1', 10); 
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const validStartIndex = Math.min(startIndex, clothingData.length);
  const validEndIndex = Math.min(endIndex, clothingData.length);
  const currentClothingData = clothingData.slice(validStartIndex, validEndIndex);
  const onPageChange = (page: number) => {
    router.push(`/clothing?page=${page}`);
  };

  return (
    <div>
      <h1>Shop Page {pageNumber}</h1>
      <ClothesList 
        clothingData={currentClothingData} 
        itemsPerPage={10} 
        currentPage={pageNumber} 
      />
    </div>
  );
};

export default ClothingPage;
