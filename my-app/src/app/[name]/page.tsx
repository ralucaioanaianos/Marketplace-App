'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { clothingData } from '@/utils/ClothingData';
import ClothesList from '@/app/components/ClothesList';
import React, { useState } from 'react';

const ClothingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get URLSearchParams object
  const page = searchParams.get('page'); // Get the value of the 'page' parameter

  // Convert page number to integer
  const pageNumber = parseInt(page || '1', 10); // Use default value '1' if page is null or undefined

  // Calculate start and end indices based on page number
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Ensure startIndex and endIndex are within the bounds of clothingData array
  const validStartIndex = Math.min(startIndex, clothingData.length);
  const validEndIndex = Math.min(endIndex, clothingData.length);

  // Filter clothing data for the current page
  const currentClothingData = clothingData.slice(validStartIndex, validEndIndex);

  // Function to handle page change
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
