import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CaseStudyProps {
  caseStudy: {
    title: string
    category: string
    description: string
    image: string
    link: string
  }
}

export default function CaseStudyCard({ caseStudy }: CaseStudyProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] dark:border dark:border-gray-700">
      <div className="relative h-48 md:h-64">
        <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#7665f3] dark:text-[#8a7bf5] font-medium mb-2">{caseStudy.category}</div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{caseStudy.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
        <Link href={caseStudy.link} target="_blank">
          <Button
            variant="outline"
            className="border-[#7665f3] text-[#7665f3] dark:text-[#8a7bf5] dark:border-[#8a7bf5] hover:bg-[#7665f3]/10 dark:hover:bg-[#8a7bf5]/10"
          >
            Bekijk Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

