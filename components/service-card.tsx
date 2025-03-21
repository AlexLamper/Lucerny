import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceProps {
  service: {
    title: string
    description: string
    oneTimeFee: string
    price: string
    features: string[]
    nonFeatures: string[]
    isPopular?: boolean
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] dark:border dark:border-gray-600 relative">
      {service.isPopular && (
        <div className="absolute -top-3 right-4 bg-[#7665f3] dark:bg-[#8a7bf5] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          Meest gekozen
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">{service.description}</p>
      <div className="mb-6">
        <p className="text-lg font-bold text-[#7665f3] dark:text-[#8a7bf5]">{service.oneTimeFee}</p>
        {service.price && <p className="text-sm text-gray-500 dark:text-gray-400">{service.price}</p>}
      </div>
      <div className="mb-6">
        <h4 className="font-semibold mb-2 dark:text-white">Inbegrepen:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {service.nonFeatures.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 dark:text-white">Niet inbegrepen:</h4>
          <ul className="space-y-2">
            {service.nonFeatures.map((nonFeature, index) => (
              <li key={index} className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm dark:text-gray-300">{nonFeature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link href="/contact">
        <Button className="w-full bg-[#7665f3] hover:bg-[#6555e3] text-white">Meer Informatie</Button>
      </Link>
    </div>
  )
}

