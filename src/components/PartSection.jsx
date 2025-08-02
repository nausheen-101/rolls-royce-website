import React from 'react';
import EnginePart from './EnginePart';
import WheelPart from './WheelPart';
import DashboardPart from './DashboardPart';
import SteeringPart from './SteeringPart';
import HeadlightPart from './HeadlightPart';

const PartSection = () => {
  return (
    <div className="bg-black text-blue-200 min-h-screen py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Parts</h2>

      <div className="space-y-10">
        <EnginePart />
        <WheelPart />
        <DashboardPart />
        <SteeringPart />
        <HeadlightPart />
      </div>
    </div>
  );
};

export default PartSection;