import React from 'react';
import Link from 'next/link';
import { ClothingItemProps } from './ClothingItem';
import ClothingItem from './ClothingItem';
import styles from './ClothesList.module.css';
import { clothingData } from '@/utils/ClothingData';

interface ClothesListProps {
  clothingData: ClothingItemProps[];
  itemsPerPage: number;
  currentPage: number;
}

const ClothesList: React.FC<ClothesListProps> = ({ itemsPerPage, currentPage }) => {
  const totalPages = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, clothingData.length);
  const currentItems = [];
  for (let i = startIndex; i < Math.min(endIndex, clothingData.length); i++) {
    currentItems.push(clothingData[i]);
  }
  console.log(currentItems);

  return (
    <div>
      <div className={styles.clothingList}>
        {currentItems.map((item) => (
          <div key={item.name}>
            <Link key={item.name} href={`/clothing/${encodeURIComponent(item.name)}`}>
            <div>
              <ClothingItem
                name={item.name}
                image={item.image}
                gender={item.gender}
                sizes={item.sizes}
              />
            </div>
          </Link>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index + 1} href={`/shop?page=${index + 1}`}>
            <div className={currentPage === index + 1 ? styles.activePage : ''}>
              {index + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClothesList;
