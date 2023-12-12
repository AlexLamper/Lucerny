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
        title: 'Lambdago',
        description: 'Lambdago: Lamper BedrijfsDienstverlening en Advisering.',
        image: '/images/projects/project9.png',
        link: 'https://www.lambdago.nl',
    },
    {
        id: 2,
        title: 'Persoonlijke Portfolio Website',
        description: 'Mijn persoonlijke website met mijn portfolio en wie ik ben',
        image: '/images/projects/project10.png',
        link: 'https://devap2.netlify.app/',
    },
    {
        id: 3,
        title: 'Reis Blog',
        description: 'A blog sharing travel experiences and tips.',
        image: '/images/projects/project3.png',
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
            Onze gerealiseerde projecten<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600">Ontdek ons portfolio van projecten</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
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
