import Image from "next/image";

import { Product } from '@/models/interfaces'
import React from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { title, category, price, image } = product

  return (
    <article className="m-8 p-8 bg-purple-500 hover:bg-purple-600">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <Image
  src={product.image}
  alt={product.title}
  width={200}
  height={200}
  className="rounded-md mb-4 object-cover"
/>

    </article>
  )
}
