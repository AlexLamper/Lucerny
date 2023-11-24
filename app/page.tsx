import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import DienstenSection from '@/components/DienstenSection';
import "animate.css/animate.min.css";
import Home2Section from '@/components/Home2Section';
import ServicesSection from '@/components/ServicesSection';
// import { AnimationOnScroll } from 'react-animation-on-scroll';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <Home2Section />
      <ServicesSection />
    </div>
  );
};

export default Home;
