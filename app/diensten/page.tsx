import React from 'react'
import { Metadata } from "next";
import DienstenSection from '@/components/Diensten/DienstenSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/service-card';

export const metadata: Metadata = {
  title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['webdesign', 'webontwikkeling', 'website', 'webdesigner', 'webdeveloper', 'webdevelopment', 'webdesignbureau', 'webdesignbedrijf', 'webdevelopmentbureau', 'webdevelopmentbedrijf', 'webdesignerbedrijf', 'webdeveloperbedrijf', 'webdeveloperbureau', 'lucerny', 'lucerny webdesign', 'lucerny webdevelopment', 'lucerny webdesignbureau', 'lucerny webdevelopmentbureau', 'lucerny webdesignbedrijf', 'lucerny webdevelopmentbedrijf', 'lucerny webdesignerbedrijf', 'lucerny webdeveloperbedrijf', 'lucerny webdeveloperbureau', 'op maat gemaakte websites', 'op maat gemaakte webdesign', 'op maat', 'gemaakte', 'websites', 'webdesign', 'webdevelopment', 'webdesignbureau', 'webdevelopmentbureau', 'webdesignbedrijf', 'ontwikkeling', 'webontwikkeling', 'Nederland', 'goedkoop', 'cheap', 'goedkope', 'betaalbaar', 'affordable', 'professioneel', 'professional', 'professionele', 'professionaliteit', 'kwaliteit', 'quality', 'kwalitatief', 'kwalitatieve', 'kwalitatief hoogstaand', 'kwalitatief hoogstaande', 'hoogstaand', 'hoogstaande', 'middelharnis', 'middelharnis webdesign', 'middelharnis webdevelopment', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'Goeree-overflakkee', 'goeree-overflakkee webdesign', 'goeree-overflakkee webdevelopment', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesign', 'sommelsdijk', 'sommelsdijk webdesign', 'sommelsdijk webdevelopment', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf'],
  openGraph: {
    title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
    description: "Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.",
    url: "https://lucerny.nl",
    siteName: "Lucerny | Webdesign & Webdevelopment",
    type: "website",
    locale: "nl_NL",
  },
  metadataBase: new URL("https://lucerny.nl"),
};

const Diensten = () => {

  const services = [
    {
      title: "Onepager",
      description: "Een simpele website met één pagina. Perfect voor een portfolio of een kleine onderneming.",
      oneTimeFee: "Eenmalig €299,99",
      price: "daarna vanaf €12,50/maand",
      features: [
        "1 lange pagina's gevuld",
        "Inclusief gratis stockfoto's",
        "Ontwerp op maat",
        "Geschikt voor alle apparaten",
        "1 herzieningsronde",
        "hosting en domeinnaam",
      ],
      nonFeatures: [
        "Geavanceerde web functionaliteiten",
        "SEO optimalisatie",
        "Maandelijks onderhoud",
        "Contactformulier",
      ],
      image: "/placeholder.svg?height=400&width=600",
      link: "/diensten/onepager",
    },
    {
      title: "Volledige Website",
      description:
        "Alles-in-één oplossing: Een exclusieve, aangepaste website snel online, inclusief design, hosting, beveiliging en domein.",
      oneTimeFee: "Vanaf €549,99",
      price: "daarna vanaf €17,50/maand",
      features: [
        "Aangepast web design naar uw wensen",
        "Web hosting",
        "Domeinnaam",
        "max. 10 pagina's gevuld",
        "Inclusief gratis stockfoto's",
        "Geschikt voor alle apparaten",
        "2 herzieningsronden",
        "Maandelijks onderhoud (max. 3 uur per maand)",
        "SEO-optimalisatie",
        "Blog functionaliteiten",
      ],
      nonFeatures: [],
      image: "/placeholder.svg?height=400&width=600",
      link: "/diensten/volledige-website",
      isPopular: true,
    },
    {
      title: "Website Redesign",
      description:
        "Een redesign van uw website. Perfect voor een nieuwe look of een rebranding van uw bestaande website.",
      oneTimeFee: "Vanaf €449,99",
      price: "daarna vanaf €12,50/maand",
      features: [
        "1 lange pagina's gevuld",
        "Inclusief gratis stockfoto's",
        "Ontwerp op maat",
        "Geschikt voor alle apparaten",
        "1 herzieningsronde",
        "hosting en domeinnaam",
        "SEO optimalisatie",
        "Geavanceerde web functionaliteiten",
      ],
      nonFeatures: ["Maandelijks onderhoud", "Contactformulier"],
      image: "/placeholder.svg?height=400&width=600",
      link: "/diensten/website-redesign",
    },
    {
      title: "Webdesign (Ontwerp)",
      description:
        "Een gepersonaliseerd design voor uw website. Ideaal voor als u een nieuwe look of een rebranding wilt uitwerken.",
      oneTimeFee: "Eenmalig €149,99",
      price: "",
      features: [
        "Ontwerp op maat",
        "2 herzieningsronden",
        "Verschillende bestandstypes",
        "Unieke merkgerichte ontwerpen",
        "Gebruiksvriendelijke interface",
        "Aanpasbare kleurenschema's",
      ],
      nonFeatures: ["Site ontwikkeling", "Hosting en domeinnaam"],
      image: "/placeholder.svg?height=400&width=600",
      link: "/diensten/webdesign",
    },
    {
      title: "Logo Ontwerp",
      description:
        "Een professioneel logo dat past bij uw bedrijf. Ideaal voor een nieuwe onderneming of een rebranding.",
      oneTimeFee: "Eenmalig €99,99",
      price: "",
      features: [
        "3 unieke logo concepten",
        "Logo in diverse formaten/grootte",
        "Logo in verschillende kleuren",
        "Logo in andere stijlen",
        "Diverse bestandstypes beschikbaar",
        "Gratis herzieningen van het logo",
        "Zwart-wit versies van het logo",
      ],
      featureLink: "voorbeelden",
      nonFeatures: [],
      image: "/placeholder.svg?height=400&width=600",
      link: "/diensten/logo-ontwerp",
    },
  ]

  return (
    <>
      <div className='min-h-screen'>
        <section className="text-center pt-20">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[55%] mx-auto">
            Ontdek wat wij te <span className="text-[#7664F3]">bieden</span> hebben<span className='text-black'>.</span>
            </h1>
            <p className="text-xl text-[#6b6b6b] max-sm:max-w-[90%] max-w-[60%] mx-auto">Verken welke dienst het best bij u past.</p>
          </div>
        </section>

        <section className="bg-transparent max-w-[85%] max-sm:max-w-[95%] pt-6 mx-auto">
          {/* Main Services Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Process Section */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Ons Werkproces</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We volgen een gestructureerd proces om ervoor te zorgen dat uw project succesvol wordt opgeleverd.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7665f3]/20 dark:bg-[#8a7bf5]/20"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7665f3] dark:bg-[#8a7bf5] flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Ontdekking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We beginnen met een gesprek om uw behoeften, doelen en visie te begrijpen. Dit helpt ons om een
                      duidelijk beeld te krijgen van wat u wilt bereiken.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7665f3] dark:bg-[#8a7bf5] flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Ontwerp</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We creëren een uniek ontwerp dat perfect aansluit bij uw merk en doelstellingen. U krijgt de
                      mogelijkheid om feedback te geven en aanpassingen te vragen.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7665f3] dark:bg-[#8a7bf5] flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Ontwikkeling</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We bouwen uw website met de nieuwste technologieën voor optimale prestaties. We zorgen ervoor dat
                      alles perfect werkt op alle apparaten.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7665f3] dark:bg-[#8a7bf5] flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Testen</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We testen grondig op verschillende apparaten en browsers voor een perfecte ervaring. We zorgen
                      ervoor dat alles soepel werkt voordat we live gaan.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7665f3] dark:bg-[#8a7bf5] flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Lancering</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Na uw goedkeuring lanceren we uw website en zorgen we voor een soepele overgang. We blijven
                      beschikbaar voor ondersteuning na de lancering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om Uw Project te Starten?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
            </p>
            <Link href="/contact">
              <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white px-8 py-6 text-lg">Neem Contact Op</Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Diensten;