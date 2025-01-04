'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/models/interfaces';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Page() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR<Product[], Error>('/api/products', fetcher);

  if (error) return <div className="text-red-500 text-center">Error loading data: {error.message}</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;
  if (!data || data.length === 0) return <div className="text-center">No products available.</div>;

  return (
    <section className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
