import { UserCircle, Code, Palette, BarChart } from "lucide-react"

interface WhyChooseProps {
  reason: {
    title: string
    description: string
    icon: string
  }
}

export default function WhyChooseCard({ reason }: WhyChooseProps) {
  const getIcon = () => {
    switch (reason.icon) {
      case "UserCircle":
        return <UserCircle className="h-10 w-10 text-[#7665f3]" />
      case "Code":
        return <Code className="h-10 w-10 text-[#7665f3]" />
      case "Palette":
        return <Palette className="h-10 w-10 text-[#7665f3]" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-[#7665f3]" />
      default:
        return <UserCircle className="h-10 w-10 text-[#7665f3]" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100 dark:border-gray-700">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{reason.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
    </div>
  )
}

