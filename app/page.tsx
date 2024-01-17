import type { Metadata } from 'next';
import "animate.css/animate.min.css";
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/Home/Portfolio';
import CTA from '@/components/Home/CTA';
import Team from '@/components/Home/Team';
import FAQ from '@/components/Home/FAQ';

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
      <Services />
      <Portfolio />
      <CTA />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
