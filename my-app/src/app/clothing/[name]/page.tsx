import React from 'react';
import styles from './ClothingDetails.module.css'; // Import the CSS file
import { findClothingItemByName } from '@/utils/ClothingData';

const ClothingDetails = ({ params }: { params: { name: string } }) => {
  const decodedName = params.name ? decodeURIComponent(params.name.replace(/\+/g, ' ')) : '';

  const item = findClothingItemByName(decodedName);
  if (!item) {
    return <div>Item not found ${decodedName}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.details}>
        <h1>{item.name}</h1>
        <p>Gender: {item.gender}</p>
        <p>Sizes: {item.sizes.join(', ')}</p>
      </div>
    </div>
  );
};

export default ClothingDetails;
