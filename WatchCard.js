import React from 'react';

function WatchCard({ watch, onClick }) {
  return (
    <div className="watch-card" onClick={onClick}>
      <img src={watch.logo} alt={watch.seller} className="watch-logo" />
      <h2>{watch.brand} {watch.model}</h2>
      <p>Price: {watch.currency} {watch.price}</p>
      <p className={watch.inStock ? 'in-stock' : 'out-stock'}>
        {watch.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      {watch.lastDrop && <p className="deal-tag">{watch.lastDrop}</p>}
      <a href={watch.link} target="_blank" rel="noopener noreferrer">
        <button>Visit Product</button>
      </a>
    </div>
  );
}

export default WatchCard;