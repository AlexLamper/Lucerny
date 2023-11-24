import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Over Ons | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const About = () => {
  return (
    // <MainLayout>
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-16 px-6">
        {/* First section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-center">
            <Image
                src="/images/backgrounds/about.svg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Over Ons</h1>
            <p className="text-lg leading-relaxed mb-6">
              Lucerny is ontstaan uit een passie voor innovatie en creatieve digitale oplossingen. Ons team van experts brengt diverse vaardigheden en ervaringen samen om unieke en doelgerichte oplossingen te bieden. We streven naar excellentie in het leveren van hoogwaardige webdesigns en digitale ervaringen. Bij Lucerny gaat het niet alleen om het bouwen van websites; we streven ernaar om uw visie tot leven te brengen en uw online aanwezigheid te versterken.
            </p>
          </div>
        </div>

        {/* Second section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6">Overige Informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example cards */}
            <div className="bg-[#f3f4f6] rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Uw Tevredenheid Staat Voorop</h3>
              <p>Bij Lucerny draait alles om uw tevredenheid. We streven ernaar uw verwachtingen te overtreffen en zijn toegewijd aan een naadloze samenwerking voor uw succes.</p>
            </div>
            <div className="bg-[#f3f4f6] rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Kwaliteit Is Essentieel</h3>
              <p>Bij Lucerny leveren we geen halve producten of diensten, maar alleen van hoge kwaliteit waar de klant tevreden mee is. Ons doel is om zo hoog mogelijke kwaliteit te produceren.</p>
            </div>
            <div className="bg-[#f3f4f6] rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Waar Wij Voor Staan</h3>
              <p>Lucerny staat voor op maat gemaakte, creatieve oplossingen die uw online aanwezigheid versterken.</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
    // </MainLayout>
  )
}

export default About