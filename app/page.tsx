import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import DienstenSection from '@/components/DienstenSection';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <DienstenSection />
    </div>
  );
};

export default Home;
