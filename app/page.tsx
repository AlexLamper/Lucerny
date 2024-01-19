import type { Metadata } from 'next';
import "animate.css/animate.min.css";
import Hero from '@/components/Home/Hero';
import Diensten from '@/components/Home/Diensten';
import OverOns from '@/components/Home/OverOns';
import Casus from '@/components/Home/Casus';
import CTA from '@/components/Home/CTA';
import FAQ from '@/components/FAQ/FAQ';
import Waarom from '@/components/Home/Waarom';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
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
      <Waarom />
      <div className='border-b-2 max-w-[70%] mx-auto py-12'></div>
      <Casus />
      <div className='border-b-2 max-w-[70%] mx-auto py-12'></div>
      <CTA />
    </div>
  );
};

export default Home;
