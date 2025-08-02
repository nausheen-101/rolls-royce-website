import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Branding from './components/Branding';
import TechnicalExcellence from './components/TechnicalExcellence';
import TechnicalVedio from './components/TechnicalVedio';
import SearchDealer from './components/SearchDealer';



 // ✅ import TechnicalExcellence
import PartSection from './components/PartSection';
import ModelPart from './components/ModelPart';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PhantomPart from './components/PhantomPart';
import GhostPart from './components/GhostPart';
import CullinanPart from './components/CullinanPart';
import DawnPart from './components/DawnPart';


function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'parts':
        return <PartSection />;
      case 'models':
        return <ModelPart />;
      case 'phantom':
        return <PhantomPart />;
      case 'ghost':
        return <GhostPart />;
      case 'cullinan':
        return <CullinanPart />;
      case 'dawn':
        return <DawnPart />;
      case 'contact':
        return <Contact />;
      case 'technical':  // ✅ Add this case if you want technical excellence as a page
        return <TechnicalExcellence />;
      default:
        return (
          <>
            <Hero />
            <Branding />
            <TechnicalExcellence /> 
            <TechnicalVedio />
            <SearchDealer/>


             {/* ✅ Show technical excellence on home page below branding */}
          </>
        );
    }
  };

  return (
    <div className="bg-black text-white">
      <Navbar setActive={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;