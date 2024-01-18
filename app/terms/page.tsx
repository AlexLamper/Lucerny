import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms | Lucerny',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
};

  
export default function Terms() {
  return (
    <div className="container mx-auto py-10">

      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
            Terms and Conditions<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600">Our terms and conditions</p>
      </div>
      <div className="max-w-3xl max-sm:mx-8 mx-auto">
        <p className="text-base lg:text-lg leading-relaxed md:px-4 lg:px-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, libero ut
          ullamcorper posuere, felis elit molestie dolor, vitae placerat justo neque in mi.
          <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, fuga autem odio sed ipsa deserunt quisquam exercitationem veritatis minima, eligendi quae excepturi labore unde. Blanditiis numquam distinctio odio in dolorem.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eum vitae! Maxime nobis sapiente incidunt! Id consequatur perspiciatis autem veritatis nulla eligendi sunt rerum. Sapiente id quis in magnam.
        </p>
      </div>
    </div>
  );
}
