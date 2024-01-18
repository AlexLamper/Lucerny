import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casus | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const projects = [
    {
        id: 1,
        title: 'Lambdago',
        description: 'Een website voor het bedrijf Lambdago: Lamper BedrijfsDienstverlening en Advisering.',
        image: '/images/projects/lambdago.png',
        link: 'https://www.lambdago.nl',
    },
    {
        id: 2,
        title: 'Persoonlijke Portfolio Website',
        description: 'Mijn persoonlijke website met mijn portfolio en wie ik ben',
        image: '/images/projects/project10.png',
        link: 'https://alexlamper.nl/',
    },
    {
        id: 3,
        title: 'Uw Website',
        description: 'Hier kan uw website staan.',
        image: '/images/projects/project3.png',
        link: '',
    },
  ];
  
export default function Casus() {
  return (

    <>
      <div className='min-h-screen' style={{ backgroundImage: 'url("/images/backgrounds/casus/background.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <section className="text-center pt-20">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
                Onze gerealiseerde projecten<span className='text-black'>.</span>
            </h1>
            <p className="text-lg text-gray-900">Ontdek ons portfolio van projecten</p>
          </div>
        </section>

        <section className="bg-transparent max-w-[70%] max-sm:max-w-[90%] max- pt-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
              {projects.map((project) => (

                  <div key={project.id} className="bg-white shadow-md p-6 border border-black">
                      <a target='_blank'  href={project.link || '#'}>
                          <div className="mb-4">
                          <Image
                              src={project.image}
                              alt={project.title}
                              width={500}
                              height={300}
                              className="w-full h-full object-cover"
                          />
                          </div>
                          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                          <p className="text-gray-600">{project.description}</p>
                      </a>
                  </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
