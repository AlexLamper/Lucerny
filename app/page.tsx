import type { Metadata } from 'next';
import "animate.css/animate.min.css";
import Hero from '@/components/Home/Hero';
import Diensten from '@/components/Home/Diensten';
import OverOns from '@/components/Home/OverOns';
import Casus from '@/components/Home/Casus';
import CTA from '@/components/Home/CTA';
import FAQ from '@/components/FAQ/FAQ';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
  icons: {
    icon: '/favicon.ico',
  },
};

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Diensten />
      <div className='border-b-2 max-w-[70%] mx-auto py-12'></div>
      <OverOns />
      <div className='border-b-2 max-w-[70%] mx-auto py-12'></div>
      <Casus />
      <div className='border-b-2 max-w-[70%] mx-auto py-12'></div>
      <CTA />
    </div>
  );
};

export default Home;
