'use client';

import { useState } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import AmbientWind from '@/components/AmbientWind';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FadeSection from '@/components/FadeSection';
import ServicesSection from '@/components/ServicesSection';
import ScrollWaves from '@/components/ScrollWaves';
import ValueProposition from '@/components/ValueProposition';
import AboutSection from '@/components/AboutSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <CustomCursor />

      {preloaderDone && (
        <>
          <AmbientWind />
          <Navbar />
          <main>
            <HeroSection />

            <FadeSection>
              <ServicesSection />
            </FadeSection>

            <ScrollWaves />

            <FadeSection delay={0.1}>
              <ValueProposition />
            </FadeSection>

            <FadeSection delay={0.1}>
              <AboutSection />
            </FadeSection>

            <FadeSection delay={0.1}>
              <ProcessTimeline />
            </FadeSection>

            <FadeSection>
              <FinalCTA />
            </FadeSection>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
