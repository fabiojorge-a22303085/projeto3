import { Product } from '@/models/interfaces'
import React from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { id, title, category, price, image } = product

  return (
    <article className="m-8 p-8 bg-purple-500 hover:bg-purple-600">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <img src={image} alt={title} className="w-full h-auto" />
    </article>
  )
}
