import type { Metadata } from 'next';
import HeroSection from '@/components/Home/HeroSection';
import "animate.css/animate.min.css";
import Home2Section from '@/components/Home/Home2Section';
import Home3Section from '@/components/Home/Home3Section';
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
      <Home3Section />
    </div>
  );
};

export default Home;
