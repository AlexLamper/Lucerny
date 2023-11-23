import type { Metadata } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Alex Page',
  description: 'Description of Alex Page',
}

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Lucerny | Web Development Experts</title>
      </Head>
      <HeroSection />
      <div className="h-90vh"> {/* Main Section */}
        <ServicesSection />
        {/* Other content */}
      </div>
    </div>
  );
};

export default Home;