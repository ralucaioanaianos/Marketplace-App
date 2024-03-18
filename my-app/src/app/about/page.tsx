import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutTitle}>About this project</h1>
      <div className={styles.aboutContent}>
        <p>The project we worked on together is a simple online marketplace. Users can list items they want to sell by filling out a form with details like the item's name, photo name, gender, and available sizes. Once submitted, the item is added to a list of items available for sale.</p>
        <p>The main component of the project is the "SellItemForm." This form handles user input, ensuring that all required information is provided before submission. When a user submits the form, the details of the item are passed to the main page, where they're displayed in a list alongside other items for sale.</p>
        <p>Overall, our project provides a basic framework for an online marketplace, allowing users to easily list items for sale. It's a user-friendly platform for buying and selling goods online.</p>
      </div>
    </div>
  );
}

export default About;
