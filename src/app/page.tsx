'use client';

import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type SectionId = 'hero' | 'about' | 'features' | 'reviews' | 'premium';

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const scrollToSection = (sectionId: SectionId) => {
    if (isScrolling) return;
    
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollY(window.scrollY);

        if (!isScrolling) {
          const sections: SectionId[] = ['hero', 'about', 'features', 'reviews', 'premium'];
          const scrollPosition = window.scrollY + 100; 
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/70 to-slate-900 text-white">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        scrollY={scrollY} 
      />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}