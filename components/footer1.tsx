import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"><span className="text-[#7664F3]">Lucerny</span></h3>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Wij zijn een digitaal creatief bureau gespecialiseerd in het ontwerpen en ontwikkelen van websites,
              logo&apos;s, webshops en meer.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/diensten/onepager"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                >
                  Onepager
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/volledige-website"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                >
                  Volledige Website
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/website-redesign"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                >
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/webdesign"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                >
                  Webdesign (Ontwerp)
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/logo-ontwerp"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                >
                  Logo Ontwerp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/casus" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  Casus
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-[#7665f3] mr-2 flex-shrink-0" />
                <span className="text-gray-400 dark:text-gray-300">Oost Voorgors 3, 3241 KD Middelharnis</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-[#7665f3] mr-2 flex-shrink-0" />
                <span className="text-gray-400">+31 6 57586667</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-[#7665f3] mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@lucerny.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lucerny. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacybeleid
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors"
            >
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

