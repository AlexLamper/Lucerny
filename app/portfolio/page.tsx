import Head from 'next/head';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'An online store built for selling various products.',
        image: '/images/projects/project1.png',
        link: 'https://www.google.com',
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A personal portfolio showcasing skills and projects.',
        image: '/images/projects/project2.png',
        link: 'https://www.google.com',
    },
    {
        id: 3,
        title: 'Reis Blog',
        description: 'A blog sharing travel experiences and tips.',
        image: '/images/projects/project3.png',
        link: 'https://www.google.com',
    },
    {
        id: 4,
        title: 'Online Leer Platform',
        description: 'A platform offering courses and educational content.',
        image: '/images/projects/project4.png',
        link: 'https://www.google.com',
    },
    {
        id: 5,
        title: 'Restaurant Website',
        description: 'A website for a restaurant showcasing menu and services.',
        image: '/images/projects/project5.png',
        link: 'https://www.google.com',
    },
    {
        id: 6,
        title: 'Hoveniers Website',
        description: 'A website for a restaurant showcasing menu and services.',
        image: '/images/projects/project6.png',
        link: 'https://www.google.com',
    },
    {
        id: 7,
        title: 'Stucadoor Website',
        description: 'A website for a restaurant showcasing menu and services.',
        image: '/images/projects/project7.png',
        link: 'https://www.google.com',
    },
    {
        id: 8,
        title: 'Bouwbedrijf Website',
        description: 'A website for a restaurant showcasing menu and services.',
        image: '/images/projects/project8.png',
        link: 'https://www.google.com',
      },
  ];
  
export default function Portfolio() {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Our portfolio of projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
            Onze gerealiseerde projecten<span className='text-[#0393c4]'>.</span>
        </h1>
        <p className="text-lg text-gray-600">Ontdek ons portfolio van projecten</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
                    <Link href={project.link || '#'}>
                        <div className="mb-4">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                        {/* Add more fields here */}
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
}
