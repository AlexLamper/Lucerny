import type { Metadata } from 'next'
import Head from 'next/head';
import Image from 'next/image';

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

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-screen py-16 lg:py-0">
        {/* Content Section */}
        <div className="max-w-[80%] w-4/5 lg:w-1/2 mx-auto lg:mx-0 lg:order-1 lg:text-left lg:py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welkom bij Lucerny</h1>
          <p className="text-lg md:text-xl mb-8">Uw partner in op maat gemaakte websites</p>
          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 inline-block"
          >
            Bekijk onze diensten
          </a>
        </div>

        {/* Image Section */}
        <div className="max-w-[80%] w-4/5 lg:w-1/2 lg:order-2 lg:py-12">
          <Image
            src="/images/main02.svg" // Replace with your image path
            alt="Hero Image"
            className="w-full h-auto lg:rounded-lg"
            width={400}
            height={400}
          />
        </div>
      </section>

      {/* Other sections (to be added) */}
      {/* Information about us */}
      {/* Call to action */}
      {/* Footer */}
    </div>
  );
};

export default Home;