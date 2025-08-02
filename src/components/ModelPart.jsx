import React from 'react';
import CullinanPart from './CullinanPart';
import GhostPart from './GhostPart';
import PhantomPart from './PhantomPart';
import DawnPart from './DawnPart'; // Corrected: Ensure your filename matches this import

const ModelPart = () => {
  return (
    <section
      id="models"
      className="bg-black text-blue-200 py-10 px-4 grid gap-8 md:grid-cols-2"
    >
      <h2 className="text-4xl font-bold mb-6 col-span-full text-center">
        Rolls Royce Models
      </h2>

      <CullinanPart />
      <GhostPart />
      <PhantomPart />
      <DawnPart />
    </section>
  );
};

export default ModelPart;