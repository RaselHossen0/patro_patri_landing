"use client";
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const LegalPage = () => {
  const legalDocuments = [
    {
      title: 'Terms of Service',
      description: 'The rules and guidelines that govern your use of the Patro Patri app and services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/legal/terms',
      delay: 0.1,
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information when you use our services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      link: '/legal/privacy-policy',
      delay: 0.2,
    },
    {
      title: 'Cookie Policy',
      description: 'Information about how we use cookies and similar technologies on our website and app.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/legal/cookies',
      delay: 0.3,
    },
    {
      title: 'Data Retention Policy',
      description: 'How long we keep your data and what happens when you delete your account.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      link: '/legal/data-retention',
      delay: 0.4,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Legal Information" 
        subtitle="Important legal documents and policies for Patro Patri users"
      />

      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Our Legal Documents</h2>
            <p className="text-darkSlate">
              At Patro Patri, we believe in transparency and clarity. Our legal documents are designed to be straightforward and easy to understand. We encourage you to read these documents to understand your rights and responsibilities when using our service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: doc.delay }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={doc.link} className="block h-full">
                  <div className="p-8">
                    <div className="bg-burgundy/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      {doc.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-burgundy mb-3 text-center">{doc.title}</h3>
                    <p className="text-darkSlate text-center">{doc.description}</p>
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center text-burgundy font-medium">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-burgundy to-gold p-0.5 rounded-2xl max-w-4xl mx-auto overflow-hidden"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-burgundy/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left md:pl-6">
                  <h3 className="text-2xl font-bold text-burgundy mb-4">Have Questions?</h3>
                  <p className="text-darkSlate mb-6">
                    If you have any questions about our legal documents or need clarification on any aspect of our service, our support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                    <a 
                      href="/contact" 
                      className="bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                    >
                      Contact Support
                    </a>
                    <a 
                      href="mailto:legal@patropatri.com" 
                      className="bg-transparent border border-burgundy text-burgundy px-6 py-3 rounded-lg hover:bg-burgundy hover:text-white transition-all duration-300 text-center"
                    >
                      Email Legal Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
