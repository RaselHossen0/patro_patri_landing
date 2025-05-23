"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import FeatureSection from '@/components/sections/FeaturesSection/index';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      title: 'Trust',
      description: 'We verify all profiles to ensure a safe and authentic experience for our users.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'burgundy',
    },
    {
      title: 'Tradition',
      description: 'We honor Bangladeshi cultural values and traditions in the matchmaking process.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'gold',
    },
    {
      title: 'Privacy',
      description: 'We prioritize user privacy and data security in all our operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'teal',
    },
    {
      title: 'Innovation',
      description: 'We combine traditional values with modern technology to create the best matchmaking experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'green',
    },
  ];

  const testimonials = [
    {
      initials: 'RA',
      names: 'Rahima & Ahmed',
      status: 'Married for 2 years',
      testimonial: 'We are so grateful to Patro Patri for helping us find each other. The cultural matching was spot on, and we connected instantly. Now we\'re happily married!',
      location: 'Dhaka, Bangladesh',
      color: 'burgundy',
      delay: 0.1,
    },
    {
      initials: 'SK',
      names: 'Sadia & Karim',
      status: 'Engaged after 6 months',
      testimonial: 'The verification process made us feel safe, and the matching algorithm really understood our preferences. We\'re now planning our wedding!',
      location: 'Chittagong, Bangladesh',
      color: 'gold',
      delay: 0.2,
    },
    {
      initials: 'TF',
      names: 'Tasneem & Fahad',
      status: 'Dating for 3 months',
      testimonial: 'As busy professionals, we appreciate how easy Patro Patri made it to connect with compatible matches. The app respects our values while helping us find love.',
      location: 'Sylhet, Bangladesh',
      color: 'teal',
      delay: 0.3,
    },
  ];

  const stats = [
    {
      value: '5,000+',
      label: 'Successful Matches',
      color: 'burgundy',
      delay: 0.1,
    },
    {
      value: '1,200+',
      label: 'Marriages',
      color: 'gold',
      delay: 0.2,
    },
    {
      value: '98%',
      label: 'Satisfaction Rate',
      color: 'teal',
      delay: 0.3,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="About Patro Patri" 
        subtitle="Bringing together tradition and technology to help Bangladeshi singles find their perfect match."
        backgroundImage="/images/about-bg.jpg"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-6">Our Mission</h2>
              <p className="text-darkSlate mb-6">
                At Patro Patri, our mission is to create meaningful connections between Bangladeshi singles who share similar values, traditions, and life goals. We understand the importance of cultural compatibility in relationships, and we've built our platform to honor these traditions while embracing modern technology.
              </p>
              <p className="text-darkSlate mb-6">
                We believe that finding a life partner should be a safe, respectful, and enjoyable experience. That's why we've created a platform that prioritizes authenticity, privacy, and compatibility, helping our users find matches that truly align with their values and preferences.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/founder.jpg" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-burgundy">Md. Rasel Hossen</p>
                  <p className="text-darkSlate text-sm">Founder & CEO</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-burgundy/10 rounded-xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-burgundy mb-4">Our Story</h3>
                <p className="text-darkSlate mb-4">
                  Patro Patri was founded in 2023 with a simple idea: to create a matrimony platform that truly understands and respects Bangladeshi culture and traditions.
                </p>
                <p className="text-darkSlate mb-4">
                  Our founder, Md. Rasel Hossen, saw that existing matrimony apps weren't addressing the unique needs and preferences of Bangladeshi singles. He set out to build a platform that combines traditional matchmaking values with modern technology.
                </p>
                <p className="text-darkSlate">
                  Today, Patro Patri has helped thousands of Bangladeshi singles find their perfect match, with over 1,200 marriages and counting.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-burgundy rounded-full flex items-center justify-center text-white font-bold text-xl">
                <span>Est.<br/>2023</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <FeatureSection
        title="Our Core Values"
        subtitle="These principles guide everything we do at Patro Patri"
        features={values}
        showPremiumBadge={false}
      />

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Meet Our Team</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to helping you find your perfect match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Md. Rasel Hossen',
                role: 'Founder & CEO',
                image: '/images/team/ceo.jpg',
                delay: 0.1,
              },
              {
                name: 'Fatima Rahman',
                role: 'Chief Technology Officer',
                image: '/images/team/cto.jpg',
                delay: 0.2,
              },
              {
                name: 'Ahmed Khan',
                role: 'Head of Marketing',
                image: '/images/team/marketing.jpg',
                delay: 0.3,
              },
              {
                name: 'Nusrat Jahan',
                role: 'Customer Success Manager',
                image: '/images/team/customer.jpg',
                delay: 0.4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: member.delay }}
                className="bg-surface rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-burgundy">{member.name}</h3>
                  <p className="text-darkSlate">{member.role}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-burgundy hover:text-gold transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-burgundy hover:text-gold transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="/about/team" 
              className="inline-flex items-center bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span className="mr-2">Meet Our Full Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Success Stories"
        subtitle="Hear from couples who found their perfect match on Patro Patri"
        testimonials={testimonials}
        stats={stats}
      />
    </Layout>
  );
}
