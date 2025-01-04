import React from "react";
import Image from "next/image";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  onAddToCart: () => void;
}

const Card: React.FC<ProductProps> = ({ title, description, price, image, rating, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-72">
      {/* Imagem */}
      <Image
        src={image}
        alt={title}
        width={200}
        height={220}
        className="mb-4 rounded-md object-cover"
      />
      {/* Título */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {/* Descrição */}
      <p className="text-gray-600 mb-4">{description}</p>
      {/* Rating */}
      <p className="text-gray-700 text-sm mb-2">
        Avaliação: {rating.rate} ({rating.count} avaliações)
      </p>
      {/* Preço */}
      <p className="text-gray-800 font-bold mb-2">€{price.toFixed(2)}</p>
      {/* Botão Adicionar ao Carrinho */}
      <button
        onClick={onAddToCart}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Card;
