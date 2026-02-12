'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientOnly from '@/components/ClientOnly';
import ResetOnRouteChange from '@/components/ResetOnRouteChange';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ServicesSection from '@/components/ServicesSection';
import MarqueeSection from '@/components/MarqueeSection';
import CounterSection from '@/components/CounterSection';
import ChallengesSection from '@/components/ChallengesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalendlySection from '@/components/CalendlySection';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize animations on pathname change
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Initialize WOW.js
        if ((window as any).WOW) {
          new (window as any).WOW().init();
        }

        // Initialize custom animations if available
        if ((window as any).initCustomAnimations) {
          (window as any).initCustomAnimations();
        }
      }
    }, 300);
  }, [pathname]);

  return (
    <ClientOnly>
      <Header />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.kevalai.com/#webpage",
          "url": "https://www.kevalai.com/",
          "name": "Keval AI – AI Automation, Chatbots & CRM Solutions",
          "description": "Keval AI helps businesses scale using AI automation, intelligent chatbots, CRM systems, and custom digital solutions.",
          "isPartOf": {
            "@id": "https://www.kevalai.com/#website"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.kevalai.com/"
          },
          "inLanguage": "en"
        })}
      </script>
      <main style={{ backgroundColor: '#ffffff' }}>
        <HeroSection />
        <BrandSection />
        <ResetOnRouteChange>
          <ProjectSection />
        </ResetOnRouteChange>
        <ResetOnRouteChange>
          <TestimonialSection />
        </ResetOnRouteChange>
        {/* <TechnologiesSection /> */}
        <ServicesSection />
        <ChallengesSection />
        <FeaturesSection />
        <CounterSection />
        <CalendlySection />
        <MarqueeSection />
      </main>
      <Footer />
      <BackToTop />
    </ClientOnly>
  );
}

