import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: '🎓',
      title: 'PhD Thesis (All Specializations)',
      description: 'Comprehensive PhD thesis assistance across all academic disciplines including literature review, methodology design, data analysis, and complete thesis writing with expert supervision.',
      features: ['Topic Selection', 'Literature Review', 'Methodology Design', 'Data Analysis', 'Complete Writing']
    },
    {
      icon: '📚',
      title: 'MBA Dissertations',
      description: 'Professional MBA dissertation support with industry-focused research, case studies, strategic analysis, and business-oriented academic writing.',
      features: ['Business Research', 'Case Studies', 'Strategic Analysis', 'Market Research', 'Financial Analysis']
    },
    {
      icon: '🎯',
      title: 'M.Ed. Dissertations',
      description: 'Educational research dissertations with focus on pedagogical methods, curriculum development, educational psychology, and teaching methodologies.',
      features: ['Educational Research', 'Curriculum Design', 'Teaching Methods', 'Assessment Strategies', 'Learning Analytics']
    },
    {
      icon: '📖',
      title: 'UG & PG Dissertations',
      description: 'Undergraduate and postgraduate dissertation assistance with structured approach, proper formatting, and academic excellence across various subjects.',
      features: ['Research Planning', 'Data Collection', 'Analysis & Interpretation', 'Academic Writing', 'Formatting & Citations']
    },
    {
      icon: '📄',
      title: 'Research Papers & Articles',
      description: 'High-quality research papers and journal articles with proper methodology, citations, and publication-ready content for academic journals.',
      features: ['Journal Articles', 'Conference Papers', 'Peer Review Support', 'Publication Guidance', 'Citation Management']
    },
    {
      icon: '🔍',
      title: 'Review Papers & Articles',
      description: 'Comprehensive review papers including systematic reviews, meta-analyses, and literature surveys with critical analysis and synthesis.',
      features: ['Systematic Reviews', 'Meta-Analysis', 'Literature Surveys', 'Critical Analysis', 'Research Synthesis']
    },
    {
      icon: '⚖️',
      title: 'Laws-based Content',
      description: 'Specialized legal content creation including case studies, legal research, statutory analysis, and jurisprudence with accurate legal citations.',
      features: ['Legal Research', 'Case Analysis', 'Statutory Interpretation', 'Jurisprudence', 'Legal Citations']
    },
    {
      icon: '📊',
      title: 'Reports & White Papers',
      description: 'Professional reports, white papers, and other academic content with industry insights, data analysis, and comprehensive documentation.',
      features: ['Industry Reports', 'White Papers', 'Policy Documents', 'Technical Reports', 'Research Summaries']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free expert counseling to understand your requirements and provide guidance on topic selection and research approach.'
    },
    {
      step: '02',
      title: 'Research Design',
      description: 'Comprehensive research methodology design with proper framework, data collection methods, and analysis techniques.'
    },
    {
      step: '03',
      title: 'Content Development',
      description: 'Professional content creation by subject specialists with high academic standards and quality assurance.'
    },
    {
      step: '04',
      title: 'Quality Review',
      description: 'Thorough quality check, plagiarism verification, and final review to ensure highest academic standards.'
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
              Our Research Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research assistance across all academic disciplines with 
              expert guidance, quality assurance, and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 text-2xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Process Section */}
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
              Our Research Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure quality, accuracy, and academic excellence 
              in every research project we undertake.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
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
              Need Help with Your Research?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get started with a free consultation. Our experts are ready to guide you 
              through your research journey with professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Get Free Consultation
              </Link>
              <Link to="/specialization" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
