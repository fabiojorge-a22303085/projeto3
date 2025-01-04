import React from 'react';
import Link from 'next/link';

export default function homePage() {
  return (
    
      <section className="overflow-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Bem vindo!
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Esta é a minha App em React e Next.js, uma das tecnologias web mais usadas nos dias de hoje.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/tecnologias" legacyBehavior>
            <a className="bg-gray-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition">
              Tecnologias
            </a>
          </Link>
      
          <Link href="/deisi-shop" legacyBehavior>
            <a className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">
              DEISI Shop
            </a>
          </Link>
        </nav>
      </section>
    
  );
}
