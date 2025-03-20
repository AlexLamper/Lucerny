import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ProcessStep from "@/components/process-step"
import CaseStudyCard from "@/components/case-study-card"
import WhyChooseCard from "@/components/why-choose-card"

export default function Home() {
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
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Ontdekking",
      description: "We beginnen met een gesprek om uw behoeften, doelen en visie te begrijpen.",
    },
    {
      number: 2,
      title: "Ontwerp",
      description: "We creëren een uniek ontwerp dat perfect aansluit bij uw merk en doelstellingen.",
    },
    {
      number: 3,
      title: "Ontwikkeling",
      description: "We bouwen uw website met de nieuwste technologieën voor optimale prestaties.",
    },
    {
      number: 4,
      title: "Testen",
      description: "We testen grondig op verschillende apparaten en browsers voor een perfecte ervaring.",
    },
    {
      number: 5,
      title: "Lancering",
      description: "Na uw goedkeuring lanceren we uw website en zorgen we voor een soepele overgang.",
    },
  ]

  const whyChooseReasons = [
    {
      title: "Persoonlijke Aanpak",
      description: "We werken nauw samen met u om uw visie tot leven te brengen.",
      icon: "UserCircle",
    },
    {
      title: "Moderne Technologie",
      description: "We gebruiken de nieuwste technologieën voor snelle, veilige en responsieve websites.",
      icon: "Code",
    },
    {
      title: "Creatief Ontwerp",
      description: "Unieke ontwerpen die uw merk versterken en uw doelgroep aanspreken.",
      icon: "Palette",
    },
    {
      title: "Resultaatgericht",
      description: "We focussen op websites die niet alleen mooi zijn, maar ook resultaten opleveren.",
      icon: "BarChart",
    },
  ]

  const caseStudies = [
    {
      title: "Restaurant De Smaak",
      category: "Horeca",
      description: "Een moderne website voor een lokaal restaurant met online reserveringen en menukaart.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Bloemen & Zo",
      category: "Retail",
      description: "Een stijlvolle webshop voor een lokale bloemist met online bestel- en bezorgmogelijkheden.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Advocatenkantoor Recht",
      category: "Zakelijke dienstverlening",
      description:
        "Een professionele website voor een advocatenkantoor met informatieve content en contactmogelijkheden.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              Breng Uw Visie tot{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7664F3] to-[#b0a8ff]' style={{ textShadow: '0 2px 4px rgba(118, 100, 243, 0.3)' }}>Licht</span>{" "}
              met een Unieke Website
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Verbeter uw digitale aanwezigheid. Lucerny biedt complete op maat gemaakte websites met hosting en domein, zodat u zich kunt focussen op uw doelen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white px-8 py-6">Neem Contact Op</Button>
              <Button
                variant="outline"
                className="border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10 px-8 py-6"
              >
                Bekijk Onze Diensten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Onze Diensten</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wij bieden verschillende oplossingen aan om uw online aanwezigheid te versterken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/diensten">
              <Button
                variant="outline"
                className="border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10"
              >
                Bekijk Alle Diensten <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/images/waarom3.jpg"
                  alt="Over Lucerny"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#7665f3] rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">5+ jaar ervaring</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Over Lucerny</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Lucerny is een digitaal creatief bureau dat gespecialiseerd is in het ontwerpen en ontwikkelen van
                websites, logo&apos;s, webshops en meer. Wij geloven dat een goede online aanwezigheid essentieel is voor het
                succes van elk bedrijf.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Ons team van ervaren ontwerpers en ontwikkelaars werkt nauw samen met u om uw visie tot leven te
                brengen. We luisteren naar uw wensen en behoeften en vertalen deze naar een uniek ontwerp dat perfect
                aansluit bij uw merk en doelstellingen.
              </p>
              <Link href="/over-ons">
                <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white">
                  Meer Over Ons <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Ons Proces</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We volgen een gestructureerd proces om ervoor te zorgen dat uw project succesvol wordt opgeleverd.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lucerny Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Waarom Kiezen voor Lucerny?</h2>
            <span className='text-[18px] text-[#6b6b6b] italic'>Lucerny, van lūceō: &quot;schijn, wees een licht&quot;.</span>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2">
              Wij onderscheiden ons door onze persoonlijke aanpak, creatieve oplossingen en focus op resultaten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <WhyChooseCard key={index} reason={reason} />
            ))}
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
            <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white px-8 py-6 text-lg">Neem Contact Op</Button>
          </div>
        </div>
      </section>

      {/* Casus Section */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Onze Projecten</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bekijk enkele van onze recente projecten en ontdek wat wij voor u kunnen betekenen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/casus">
              <Button
                variant="outline"
                className="border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10"
              >
                Bekijk Alle Projecten <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

