import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div style={styles.cardContainer}>
      {image && <img src={image} alt={title} style={styles.image} />}
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  cardContainer: {
    margin: '30px 0px 0px 565px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '20px',
    margin: '12px 0',
  },
  description: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Card;
