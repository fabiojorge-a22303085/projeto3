import React from 'react';
import tecnologias from '../data/tecnologias.json';
import Image from 'next/image';

export default function TecnologiasPage() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Tecnologias</h1>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {tecnologias.map((tecnologia) => (
          <div
            key={tecnologia.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Imagem da Tecnologia */}
            <Image
              src={tecnologia.image} // Caminho da imagem vindo do JSON
              alt={tecnologia.title}
              width={100}
              height={100}
              className="mb-4"
            />
            {/* Conteúdo */}
            <h2 className="text-xl font-semibold mb-2">{tecnologia.title}</h2>
            <p className="text-gray-600 mb-4">{tecnologia.description}</p>
            <p className="text-gray-700 font-bold">Rating: {tecnologia.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
