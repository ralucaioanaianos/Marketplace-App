'use client'
import React, { useState } from 'react';
import styles from './SearchButton.module.css';
import ClothesList from './ClothesList'; 
import { clothingData } from '@/utils/ClothingData'; // Import clothingData

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClothing, setFilteredClothing] = useState(clothingData); // Initialize filteredClothing with all clothingData
  let filteredData = clothingData;
  const handleSearch = () => {
    const filteredData = clothingData.filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClothing(filteredData); 
  };

  return (
    <div className={styles.searchButtonContainer}>
      <div className={styles.searchButton}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}></button>
      </div>
      <div className={styles.clothesListContainer}>
        <ClothesList itemsPerPage={10} currentPage={1} clothingData={filteredData} /> 
      </div>
    </div>
  );
};

export default SearchButton;
