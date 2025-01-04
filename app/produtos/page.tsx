'use client'

import React from 'react'
import useSWR from 'swr'
import { Product } from '@/models/interfaces'
import ProductCard from '@/components/ProductCard/ProductCard'

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher)

  if (error) return <div>Error loading data</div>
  if (isLoading) return <div>Loading...</div>
  if (!data || data.length === 0) return <div>No data!</div>

  return (
    <section className=" bg-gray-100">
       <h1 className="text-4xl font-bold text-center mb-8">Produtos</h1>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
