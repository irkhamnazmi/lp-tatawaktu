
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ThemeList from '@/components/ThemeList';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <ThemeList />
        <Testimonials />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
