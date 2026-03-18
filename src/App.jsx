import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Ticker from './components/Ticker/Ticker';
import AppPreview from './components/AppPreview/AppPreview';
import Features from './components/Features/Features';
import Brands from './components/Brands/Brands';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Changelog from './components/Changelog/Changelog';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <AppPreview />
      <Features />
      <Brands />
      <HowItWorks />
      <Changelog />
      <CTA />
      <Footer />
    </>
  );
}
