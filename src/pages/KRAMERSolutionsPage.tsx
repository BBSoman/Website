import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Video,
  Globe,
  Presentation,
  Building,
  GraduationCap,
  Gamepad2,
  Link as LinkIcon,
  Monitor,
  Wifi,
  Shield,
  Zap,
  CheckCircle,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KRAMERSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Video,
      title: 'Pro AV Signal Management',
      description:
        'Delivering seamless audio and video signal routing, switching, and processing for classrooms, control rooms, and large venues.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Globe,
      title: 'AV-over-IP Solutions',
      description:
        'Enables scalable, network-based AV distribution with minimal latency for enterprise, education, and government environments.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Presentation,
      title: 'Wireless Presentation & Collaboration',
      description:
        'Empowers team collaboration with wireless sharing, screen mirroring, and multi-participant connectivity in meeting spaces.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Building,
      title: 'Smart Meeting Rooms',
      description:
        'Integrated control systems, room scheduling, and AV automation tailored for boardrooms, huddle spaces, and conference centers.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description:
        'Interactive teaching and hybrid learning with smart displays, wireless casting, and centralized control across campuses.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Gamepad2,
      title: 'Command & Control Centers',
      description:
        'Real-time visualization and decision-making support with multi-display AV distribution, switching, and secure control systems.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: LinkIcon,
      title: 'Control & Automation',
      description:
        'Unified AV and environment control via Kramer Control—scalable, customizable interfaces for devices and spaces.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: Monitor,
      title: 'Digital Signage',
      description:
        'Delivers high-impact messaging through networked content displays, perfect for retail, hospitality, and transportation hubs.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Wifi,
      title: 'Unified Communication Integration',
      description:
        'Seamlessly integrates with UC platforms like Zoom, Microsoft Teams, and Webex, supporting hybrid work environments.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const kramerProducts = [
    {
      name: 'Kramer Control',
      description:
        'Comprehensive control and automation platform for AV systems and environments',
      features: [
        'Unified Control',
        'Custom Interfaces',
        'Cloud Management',
        'Scalable Architecture',
      ],
    },
    {
      name: 'AV-over-IP Solutions',
      description:
        'Network-based audio and video distribution with ultra-low latency',
      features: [
        '4K/8K Support',
        'Low Latency',
        'Scalable Network',
        'Enterprise Grade',
      ],
    },
    {
      name: 'Wireless Presentation',
      description:
        'Advanced wireless collaboration and screen sharing solutions',
      features: [
        'Multi-device Support',
        'Secure Connection',
        'Real-time Collaboration',
        'Cross-platform',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Kramer Electronics Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kramer{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Electronics Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Kramer's comprehensive range of professional AV solutions
              and control systems. From signal management to unified
              communications, Kramer delivers cutting-edge technology for modern
              workspaces.
            </p>
          </div>

          {/* Kramer Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Kramer Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kramerProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Kramer's professional AV solutions and control systems
              are transforming workspaces and enabling seamless communication
              across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kramer */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Kramer Electronics?
              </h2>
              <p className="text-purple-100 max-w-3xl mx-auto">
                Kramer delivers professional AV solutions with over 40 years of
                innovation, providing reliable, scalable, and cutting-edge
                technology for modern workspaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  40+
                </div>
                <div className="text-purple-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  8K
                </div>
                <div className="text-purple-100">Ultra HD Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Global
                </div>
                <div className="text-purple-100">Market Presence</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-purple-100">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience Kramer Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Kramer's professional AV solutions
              and control systems, and how they can transform your workspace
              communication and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
            <div className="mt-8">
              <Link
                to="/partners"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back to Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KRAMERSolutionsPage;
