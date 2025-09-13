import { FiClock, FiTrendingUp, FiBarChart2, FiShield, FiUsers, FiPieChart } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiClock className="w-6 h-6" />,
    title: 'Save Time',
    description: 'Automated data processing saves you hours of manual work.'
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: 'Make Better Decisions',
    description: 'Data-driven insights help you make informed business choices.'
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: 'Get Clear Reports',
    description: 'Beautiful, easy-to-understand reports tailored to your needs.'
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security.'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Expert Support',
    description: 'Our team is here to help you get the most from your data.'
  },
  {
    icon: <FiPieChart className="w-6 h-6" />,
    title: 'Custom Solutions',
    description: 'Tailored analytics to fit your specific business needs.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 relative">
          Why Choose Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
