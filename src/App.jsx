import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import WhyFunnelsFailSection from './components/WhyFunnelsFailSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import HowItWorksSection from './components/HowItWorksSection';
import FinalCTASection from './components/FinalCTASection';
import DevNavigation from './components/DevNavigation';

function App() {
  return (
    <div className="min-h-screen bg-flowrise-navy-900 text-white font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeHelpSection />
        <WhyFunnelsFailSection />
        <WhatWeDoSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <DevNavigation />
    </div>
  );
}

export default App;
