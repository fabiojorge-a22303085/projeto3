import Image from "next/image";
import { Product } from '@/models/interfaces';
import React from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { title, category, price, image } = product; // 'image' está sendo desestruturada e será usada diretamente

  return (
    <article className="m-8 p-8 bg-purple-500 hover:bg-purple-600">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <Image
        src={image} // Agora estamos usando a variável 'image'
        alt={title}
        className="w-16 h-16 rounded-md object-cover"
      />
    </article>
  );
}
