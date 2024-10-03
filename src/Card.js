import React from 'react';
import './card.css'; // Create this file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-category">{product.category}</p>
        <p className="card-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
