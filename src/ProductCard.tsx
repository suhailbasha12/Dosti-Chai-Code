import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={imageUrl} alt={name} className="h-48 w-full object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-2">
          <span className="text-green-600 font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
