import React from 'react';
import { Brain, Eye, Zap, Lightbulb, Cpu, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description:
        'Advanced AI solutions including machine learning, natural language processing, and predictive analytics to automate and optimize your business processes.',
      features: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Predictive Analytics',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Augmented Reality',
      description:
        'Immersive AR experiences that blend digital content with the real world, enhancing customer engagement and operational efficiency.',
      features: [
        'AR Apps',
        'Training Simulations',
        'Interactive Displays',
        'Product Visualization',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Virtual Reality',
      description:
        'Cutting-edge VR solutions for training, visualization, and entertainment that transport users to entirely new digital environments.',
      features: [
        'VR Training',
        'Virtual Showrooms',
        'Immersive Experiences',
        '3D Visualization',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Solutions That Drive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in three core areas of emerging technology, delivering
            comprehensive solutions that transform how businesses operate and
            engage with their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              ></div>

              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
