'use client'
import React, { useState } from 'react';
import styles from './Add.module.css'; // Import CSS file
import { add, clothingData } from '@/utils/ClothingData';

interface Component {
  name: string;
  gender: string;
  image: string;
  sizes: string;
}

const AddComponentForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [sizes, setSizes] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem: Component = { "name":name, "image":image, "gender":gender, "sizes": sizes };
    add(newItem)
    console.log( "Miau")
    console.log( clothingData)
    setName('');
    setSizes('');
    setImage('');
    setGender('');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add an Item to Sell</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="imageUrl">Image Address:</label>
        <input type="text" id="imageUrl" value={image} onChange={(e) => setImage(e.target.value)} required />

        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required />

        <label htmlFor="sizes">Available Sizes:</label>
        <input type="text" id="sizes" value={sizes} onChange={(e) => setSizes(e.target.value)} required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddComponentForm;
