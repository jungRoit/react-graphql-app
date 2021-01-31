import React from 'react';
import './style.css';

const ListViewItem = (props) => {
  const { product } = props;
  return (
    <div className="listview-item">
      <a className="link" href={product.imageUrl}>
        <div className="listview-picture">
          <img src={product.imageUrl} className="image" alt={product.name} />
        </div>
        <div className="listview-details">
          <p className="product-title">{product.name}</p>
          <h1 className="product-price">${product.price}</h1>
        </div>
      </a>
    </div>
  );
};

export default ListViewItem;
