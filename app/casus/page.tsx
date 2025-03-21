"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Casus() {
  const [activeCategory, setActiveCategory] = useState("Alle")

  const caseStudies = [
    {
      title: "Lambdago",
      category: "Zakelijke dienstverlening",
      description: "Een website voor het bedrijf Lambdago: Lamper BedrijfsDienstverlening en Advisering.",
      image: "/images/projects/lambdago.png",
      services: ["Volledige Website", "SEO Optimalisatie", "Content Creatie"],
      link: "https://www.lambdago.nl",
      externalLink: true,
    },
    {
      title: "P. Troost afbouwbedrijf",
      category: "Bouw & Constructie",
      description: "P Troost afbouwbedrijf is een bedrijf dat gespecialiseerd is in het afbouwen van huizen.",
      image: "/images/projects/project13.png",
      services: ["Volledige Website", "Logo Ontwerp", "SEO Optimalisatie"],
      link: "https://ptroostafbouwbedrijf.nl/",
      externalLink: true,
    },
    {
      title: "Restaurant De Smaak",
      category: "Horeca",
      description: "Een moderne website voor een lokaal restaurant met online reserveringen en menukaart.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Volledige Website", "Logo Ontwerp", "SEO Optimalisatie"],
      link: "/casus/restaurant-de-smaak",
    },
    {
      title: "Bloemen & Zo",
      category: "Retail",
      description: "Een stijlvolle webshop voor een lokale bloemist met online bestel- en bezorgmogelijkheden.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Webshop", "Logo Ontwerp", "Content Creatie"],
      link: "/casus/bloemen-en-zo",
    },
    {
      title: "Advocatenkantoor Recht",
      category: "Zakelijke dienstverlening",
      description:
        "Een professionele website voor een advocatenkantoor met informatieve content en contactmogelijkheden.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Volledige Website", "SEO Optimalisatie"],
      link: "/casus/advocatenkantoor-recht",
    },
    {
      title: "Sportschool Fit & Gezond",
      category: "Sport & Gezondheid",
      description: "Een dynamische website met online lesrooster en ledenportaal voor een lokale sportschool.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Volledige Website", "Logo Ontwerp"],
      link: "/casus/sportschool-fit-en-gezond",
    },
    {
      title: "Bakkerij Vers",
      category: "Horeca",
      description: "Een aantrekkelijke website met online bestelformulier voor een ambachtelijke bakkerij.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Onepager", "Logo Ontwerp"],
      link: "/casus/bakkerij-vers",
    },
    {
      title: "Uw Website",
      category: "Uw Branche",
      description: "Hier kan uw op maat gemaakte website komen te staan.",
      image: "/placeholder.svg?height=400&width=600",
      services: ["Uw Diensten"],
      link: "/contact",
      isPlaceholder: true,
    },
  ]

  const categories = [
    "Alle",
    "Horeca",
    "Retail",
    "Zakelijke dienstverlening",
    "Sport & Gezondheid",
    "Bouw & Constructie",
  ]

  // Filter case studies based on active category
  const filteredCaseStudies =
    activeCategory === "Alle" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f1f2f4] dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Onze Projecten</h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Bekijk enkele van onze recente projecten en ontdek wat wij voor u kunnen betekenen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/lambdago.png"
                  alt="Lambdago"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#7665f3] rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">Uitgelicht Project</p>
              </div>
            </div>
            <div>
              <div className="text-sm text-[#7665f3] dark:text-[#8a7bf5] font-medium mb-2">
                Zakelijke dienstverlening
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Lambdago</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Lambdago is een bedrijf gespecialiseerd in bedrijfsdienstverlening en advisering. We hebben een
                professionele website ontwikkeld die hun expertise en diensten perfect weergeeft, met een
                gebruiksvriendelijke interface en optimale vindbaarheid in zoekmachines.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold mb-2 dark:text-white">Geleverde diensten:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#f1f2f4] dark:bg-gray-800 px-3 py-1 rounded-full text-sm dark:text-gray-300">
                    Volledige Website
                  </span>
                  <span className="bg-[#f1f2f4] dark:bg-gray-800 px-3 py-1 rounded-full text-sm dark:text-gray-300">
                    SEO Optimalisatie
                  </span>
                  <span className="bg-[#f1f2f4] dark:bg-gray-800 px-3 py-1 rounded-full text-sm dark:text-gray-300">
                    Content Creatie
                  </span>
                </div>
              </div>
              <a href="https://www.lambdago.nl" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white">
                  Bekijk Website <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Filter */}
      <section className="py-20 bg-[#f1f2f4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Alle Projecten</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Bekijk onze projecten per categorie of bekijk ze allemaal.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? "bg-[#7665f3] text-white"
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-[#7665f3]/10 dark:hover:bg-[#7665f3]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] dark:border dark:border-gray-700 ${
                  caseStudy.isPlaceholder ? "border-2 border-dashed border-[#7665f3] dark:border-[#8a7bf5]" : ""
                }`}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#7665f3] text-white px-3 py-1 rounded-full text-sm">
                    {caseStudy.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{caseStudy.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-[#f1f2f4] dark:bg-gray-800 px-2 py-1 rounded-full text-xs dark:text-gray-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  {caseStudy.externalLink ? (
                    <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10"
                      >
                        Bekijk Website <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={caseStudy.link}>
                      <Button
                        variant="outline"
                        className="w-full border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10"
                      >
                        {caseStudy.isPlaceholder ? "Neem Contact Op" : "Bekijk Project"}{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor Uw Eigen Succesverhaal?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Laat ons uw visie omzetten in een prachtige website die resultaten oplevert.
            </p>
            <Link href="/contact">
              <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white px-8 py-6 text-lg">Start Uw Project</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

