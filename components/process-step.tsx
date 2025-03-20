interface ProcessStepProps {
    step: {
      number: number
      title: string
      description: string
    }
  }
  
  export default function ProcessStep({ step }: ProcessStepProps) {
    return (
      <div className="relative">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full dark:border dark:border-gray-700">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#7665f3] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        </div>
        {step.number < 5 && (
          <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
            <div className="w-6 h-0.5 bg-[#7665f3]"></div>
          </div>
        )}
      </div>
    )
  }
  
  