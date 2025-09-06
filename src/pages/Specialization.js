import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

const Specialization = () => {
  const specializations = [
    {
      icon: '🎯',
      title: 'Free Expert Counseling',
      description: 'Comprehensive guidance for title selection, research design, and methodology planning',
      features: [
        'Topic Selection Guidance',
        'Research Design Planning',
        'Methodology Consultation',
        'Literature Review Strategy',
        'Timeline Planning'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: '👨‍🎓',
      title: 'Subject Specialists',
      description: 'Team of highly qualified specialists with exceptional academic achievements',
      features: [
        'PhD & Post-Doc Experts',
        'Industry Experience',
        'Published Researchers',
        'Academic Excellence',
        'Specialized Knowledge'
      ],
      color: 'bg-green-500'
    },
    {
      icon: '✅',
      title: 'Highest Quality Standards',
      description: 'Maintaining excellence with zero plagiarism and rigorous quality control',
      features: [
        'Zero Plagiarism Guarantee',
        'Quality Assurance Process',
        'Peer Review System',
        'Multiple Quality Checks',
        'Academic Standards Compliance'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: '🏢',
      title: 'In-house Expert Team',
      description: 'Dedicated team of data analysts, programmers, and creative writers',
      features: [
        'Data Analysts',
        'Statistical Programmers',
        'Creative Writers',
        'Research Coordinators',
        'Quality Reviewers'
      ],
      color: 'bg-orange-500'
    }
  ];

  const academicDisciplines = [
    'Engineering & Technology',
    'Medical & Health Sciences',
    'Business & Management',
    'Social Sciences',
    'Natural Sciences',
    'Computer Science & IT',
    'Education & Pedagogy',
    'Law & Legal Studies',
    'Arts & Humanities',
    'Economics & Finance',
    'Psychology & Behavioral Sciences',
    'Environmental Studies'
  ];

  const qualityMetrics = [
    {
      metric: '100%',
      label: 'Plagiarism Free',
      description: 'All content is original and properly cited'
    },
    {
      metric: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered research projects'
    },
    {
      metric: '98%',
      label: 'Client Satisfaction',
      description: 'Clients satisfied with our services'
    },
    {
      metric: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance and guidance'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Specializations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Relytix Research the pioneer in academic assistance. 
              Our specialized approach ensures excellence in every research project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Specializations */}
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
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of expertise, quality standards, and personalized approach 
              makes us the preferred choice for academic research assistance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className={`flex items-center justify-center w-16 h-16 ${spec.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-2xl">
                    {spec.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{spec.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Disciplines */}
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
              Academic Disciplines We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across all major academic fields, ensuring specialized 
              knowledge and understanding for your research requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {academicDisciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-700 font-medium">{discipline}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and quality in academic research assistance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.metric}</div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <div className="text-primary-100">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Excellence */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence in Every Step
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our systematic approach ensures that every research project meets the highest 
                academic standards while maintaining originality and scholarly rigor.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rigorous Quality Control</h3>
                    <p className="text-gray-600">Multiple review stages ensure error-free, high-quality output</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Supervision</h3>
                    <p className="text-gray-600">Subject matter experts guide every aspect of your research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Timely Delivery</h3>
                    <p className="text-gray-600">Committed to meeting deadlines without compromising quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Expertise?</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Academic Excellence</h4>
                  <p className="text-gray-600 text-sm">Our team consists of PhD holders and published researchers with proven track records.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔍 Research Integrity</h4>
                  <p className="text-gray-600 text-sm">We maintain the highest standards of academic integrity and ethical research practices.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">💡 Innovation Focus</h4>
                  <p className="text-gray-600 text-sm">We encourage innovative approaches and cutting-edge research methodologies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved academic success with our specialized research assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Start Your Project
              </Link>
              <a 
                href="https://wa.me/918800708757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                WhatsApp Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Specialization;
