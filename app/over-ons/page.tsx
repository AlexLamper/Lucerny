import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function OverOns() {
  const teamMembers = [
    {
      name: "Jan de Vries",
      role: "Oprichter & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Jan heeft meer dan 10 jaar ervaring in de digitale wereld en is gepassioneerd over het creëren van unieke online ervaringen.",
    },
    {
      name: "Lisa Jansen",
      role: "Web Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Lisa is gespecialiseerd in front-end ontwikkeling en zorgt ervoor dat elk ontwerp perfect wordt omgezet naar code.",
    },
    {
      name: "Mark Bakker",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mark heeft een oog voor detail en creëert gebruiksvriendelijke interfaces die zowel mooi als functioneel zijn.",
    },
    {
      name: "Sophie Visser",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophie zorgt ervoor dat elk project soepel verloopt en dat deadlines worden gehaald zonder in te leveren op kwaliteit.",
    },
  ]

  const values = [
    {
      title: "Kwaliteit",
      description: "We streven naar perfectie in elk aspect van ons werk, van ontwerp tot ontwikkeling.",
    },
    {
      title: "Innovatie",
      description: "We blijven op de hoogte van de nieuwste trends en technologieën om voorop te blijven lopen.",
    },
    {
      title: "Klantgerichtheid",
      description: "We luisteren naar onze klanten en werken nauw samen om hun visie tot leven te brengen.",
    },
    {
      title: "Transparantie",
      description: "We geloven in open communicatie en eerlijke prijzen zonder verborgen kosten.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f1f2f4] dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Over <span className="text-[#7664F3]">Ons</span></h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Maak kennis met Lucerny, uw partner voor digitale creativiteit en innovatie.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/images/waarom3.jpg"
                  alt="Ons Verhaal"
                  width={800}
                  height={600}
                  className="w-[800px] h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#7665f3] rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">Opgericht in 2018</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Over <span className="text-[#7664F3]">Lucerny</span><span className='text-black'>.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Lucerny is een modern bedrijf dat zich richt op webdesign en ontwikkeling om uw bedrijf online te laten groeien.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Wij zorgen voor een unieke website die perfect aansluit bij uw wensen en behoeften. Daarnaast bied Lucerny onderhoud, support en SEO-diensten zodat u zich nergens zorgen over hoeft te maken en kunt focussen op uw bedrijf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"><span className='text-black dark:text-white'>Onze <span className="text-[#7664F3]">Doelstelling</span><span className='text-black'>.</span></span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Onze missie is duidelijk: ondernemers laten opvallen met prachtige, gebruiksvriendelijke websites die perfect werken. 
              Wij focusen ons op kwaliteit en bied uitstekende service, zodat u zich volledig kunt richten op het laten groeien van uw bedrijf.
            </p>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Waarom Kiezen voor Lucerny?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Bij Lucerny onderscheiden we ons door onze persoonlijke aanpak, creatieve oplossingen en focus op
                resultaten. We zijn niet zomaar een digitaal bureau; we zijn uw partner in groei.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#7665f3] dark:text-[#8a7bf5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600 dark:text-gray-300">
                    Persoonlijke aanpak en aandacht voor detail
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#7665f3] dark:text-[#8a7bf5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600 dark:text-gray-300">
                    Creatieve oplossingen die zich onderscheiden
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#7665f3] dark:text-[#8a7bf5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600 dark:text-gray-300">Focus op resultaten en ROI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#7665f3] dark:text-[#8a7bf5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600 dark:text-gray-300">Transparante communicatie en prijzen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#7665f3] dark:text-[#8a7bf5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600 dark:text-gray-300">
                    Expertise in de nieuwste technologieën
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white">
                  Neem Contact Op <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
                <Image
                  src="/images/images/me/3.jpg"
                  alt="Waarom Kiezen voor Lucerny"
                  width={500}
                  height={600}
                  className="w-[500px] h-[600px] object-cover rounded-lg shadow-lg"
                />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om Samen te Werken?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
            </p>
            <Link href="/contact">
              <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white px-8 py-6 text-lg">Neem Contact Op</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

