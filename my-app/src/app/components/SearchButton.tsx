// SearchButton.tsx
'use client'
import React, { useState } from 'react';
import styles from './SearchButton.module.css';
import ClothesList from './ClothesList'; // Import the ClothesList component
import { clothingData } from '@/utils/ClothingData'; // Import clothingData

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClothing, setFilteredClothing] = useState(clothingData); // Initialize filteredClothing with all clothingData
  let filteredData = clothingData;
  const handleSearch = () => {
   filteredData = clothingData.filter((item) => 
     { 
      console.log("alo");
      console.log(clothingData.length);
      item.name.toLowerCase().includes(searchTerm.toLowerCase())}
    );
    setFilteredClothing(filteredData); // Update filteredClothing state
  };

  return (
    <div className={styles.searchButtonContainer}>
      <div className={styles.searchButton}>
        <input
          type="text"
          placeholder="Search for clothing..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}></button>
      </div>
      <div className={styles.clothesListContainer}>
        <ClothesList itemsPerPage={10} currentPage={1} clothingData={filteredClothing} /> 
      </div>
    </div>
  );
};

export default SearchButton;
