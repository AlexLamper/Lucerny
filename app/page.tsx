import type { Metadata } from 'next';
import HeroSection from '@/components/Home/HeroSection';
import "animate.css/animate.min.css";
import Home2Section from '@/components/Home/Home2Section';
import Home3Section from '@/components/Home/Home3Section';
import Head from 'next/head';
import Home4Section from '@/components/Home/Home4Section';
// import { AnimationOnScroll } from 'react-animation-on-scroll';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
  icons: {
    icon: '/favicon.ico',
  },
};

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Home2Section />
      <Home3Section />
      <Home4Section />
    </div>
  );
};

export default Home;
