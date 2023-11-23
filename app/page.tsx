import type { Metadata } from 'next';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Lucerny | Web Development Experts</title>
      </Head>
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
