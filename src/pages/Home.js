import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: '🎓',
      title: 'PhD Thesis',
      description: 'Comprehensive assistance for PhD thesis across all specializations with expert guidance and research support.'
    },
    {
      icon: '📚',
      title: 'Dissertations',
      description: 'Professional dissertation writing for MBA, M.Ed., UGs & PGs with structured methodology and quality assurance.'
    },
    {
      icon: '📄',
      title: 'Research Papers',
      description: 'High-quality research papers and articles with proper citations, methodology, and academic standards.'
    },
    {
      icon: '⚖️',
      title: 'Legal Content',
      description: 'Specialized laws-based content creation with accurate legal research and comprehensive analysis.'
    }
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Expert Counseling',
      description: 'Free expert guidance for title selection, research design, and methodology planning.'
    },
    {
      icon: '👨‍🎓',
      title: 'Subject Specialists',
      description: 'Team of subject specialists with high academic achievements and proven expertise.'
    },
    {
      icon: '✅',
      title: 'Quality Standards',
      description: 'Maintaining highest quality standards with zero plagiarism guarantee.'
    },
    {
      icon: '🏢',
      title: 'In-house Team',
      description: 'Dedicated team of data analysts, programmers, and creative writers.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Pioneer in{' '}
                <span className="text-primary-600">Research Assistance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering academic excellence through comprehensive research support. 
                From PhD thesis to dissertations, we provide expert assistance with 
                highest quality standards and zero plagiarism guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Get Started
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl font-bold">R</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Relytix Research</h3>
                  <p className="text-gray-600 mb-6">Your trusted partner in academic research excellence</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">100%</div>
                      <div className="text-sm text-gray-600">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research assistance across all academic disciplines with 
              expert guidance and quality assurance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Relytix Research?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine academic expertise with professional excellence to deliver 
              outstanding research assistance that exceeds expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert guidance and professional research assistance. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Get Free Consultation
              </Link>
              <a 
                href="https://wa.me/918800708757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
