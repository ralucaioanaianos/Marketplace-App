import React from 'react';
import styles from './ClothingItem.module.css';
import Image from 'next/image'

interface ClothingItemProps {
  name: string;
  image: string;
  gender: string;
  sizes: string[];
}

const ClothingItem: React.FC<ClothingItemProps> = ({ name, image, gender, sizes }) => {
  return (
    <div className={styles.clothingItem}>
     <div className={styles.imageContainer}>
        <Image 
          height={300} 
          width={300}
          alt="blabal" 
          src={image} 
        />
        <div className={styles.details}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.gender}>Gender: {gender}</p>
          <p className={styles.sizes}>Available Sizes: {sizes.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothingItem;
export type { ClothingItemProps };
