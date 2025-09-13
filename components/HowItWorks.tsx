import { FiUpload, FiCpu, FiBarChart2, FiLayers } from 'react-icons/fi';

const steps = [
  {
    icon: <FiUpload className="w-8 h-8" />,
    title: 'Upload Data',
    description: 'Share your business data with us through our secure platform.'
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: 'We Process',
    description: 'Our team processes and cleans your data for accuracy.'
  },
  {
    icon: <FiBarChart2 className="w-8 h-8" />,
    title: 'Simplified Insights',
    description: 'Receive clear, actionable insights from your data.'
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: 'Dashboard Access',
    description: 'Access your data through our intuitive dashboard.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 relative">
          How It Works
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
