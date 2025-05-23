"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JobPostingProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  delay: number;
}

const JobPosting = ({ title, department, location, type, description, requirements, delay }: JobPostingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-burgundy">{title}</h3>
            <p className="text-darkSlate mt-1">{department}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
            <span className="bg-burgundy/10 text-burgundy px-3 py-1 rounded-full text-sm font-medium">
              {location}
            </span>
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
              {type}
            </span>
          </div>
        </div>
        
        <p className="text-darkSlate mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-burgundy mb-3">Requirements</h4>
          <ul className="list-disc pl-5 space-y-2 text-darkSlate">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-end">
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-burgundy text-white px-5 py-2 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="mr-2">Apply Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CareersPage = () => {
  const jobPostings: JobPostingProps[] = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      description: 'We are looking for a Senior Frontend Developer to join our engineering team and help build beautiful, responsive user interfaces for our matrimony platform. You will work closely with our design and backend teams to create seamless user experiences.',
      requirements: [
        '5+ years of experience in frontend development',
        'Proficiency in React, Next.js, and TypeScript',
        'Experience with responsive design and mobile-first approaches',
        'Strong understanding of UI/UX principles',
        'Experience with state management libraries (Redux, Zustand, etc.)',
        'Knowledge of testing frameworks (Jest, React Testing Library)',
        'Excellent problem-solving skills and attention to detail'
      ],
      delay: 0.1,
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      description: 'We are seeking a talented Mobile App Developer to help maintain and enhance our Android and iOS applications. You will be responsible for implementing new features, fixing bugs, and ensuring a smooth user experience across different devices.',
      requirements: [
        '3+ years of experience in mobile app development',
        'Proficiency in Flutter and Dart',
        'Experience with native Android (Kotlin/Java) and/or iOS (Swift) development',
        'Understanding of RESTful APIs and GraphQL',
        'Knowledge of app performance optimization techniques',
        'Experience with app store deployment processes',
        'Strong problem-solving skills and ability to work in a team'
      ],
      delay: 0.2,
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote (Bangladesh)',
      type: 'Full-time',
      description: 'We are looking for a creative UX/UI Designer to help create beautiful, intuitive interfaces for our matrimony platform. You will work closely with our product and engineering teams to design user-centered experiences that are both aesthetically pleasing and functional.',
      requirements: [
        '3+ years of experience in UX/UI design',
        'Proficiency in design tools such as Figma, Adobe XD, or Sketch',
        'Strong portfolio demonstrating user-centered design processes',
        'Experience with design systems and component libraries',
        'Understanding of accessibility standards and best practices',
        'Knowledge of frontend technologies (HTML, CSS, JavaScript)',
        'Excellent communication and collaboration skills'
      ],
      delay: 0.3,
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Support',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      description: 'We are seeking a Customer Success Manager to ensure our users have a positive experience on our platform. You will be responsible for addressing user inquiries, resolving issues, and gathering feedback to improve our service.',
      requirements: [
        '2+ years of experience in customer support or success roles',
        'Excellent communication skills in Bengali and English',
        'Empathetic approach to customer issues',
        'Problem-solving mindset and ability to work under pressure',
        'Experience with CRM software and support ticket systems',
        'Understanding of matrimony services or dating platforms is a plus',
        'Bachelor\'s degree in any field'
      ],
      delay: 0.4,
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      description: 'We are looking for a Digital Marketing Specialist to help grow our user base through various digital channels. You will be responsible for planning and executing marketing campaigns, analyzing performance metrics, and optimizing our marketing strategies.',
      requirements: [
        '3+ years of experience in digital marketing',
        'Proficiency in social media marketing, SEO, and content marketing',
        'Experience with paid advertising (Google Ads, Facebook Ads, etc.)',
        'Knowledge of marketing analytics tools and CRM systems',
        'Understanding of conversion rate optimization techniques',
        'Excellent copywriting skills in Bengali and English',
        'Bachelor\'s degree in Marketing, Communications, or related field'
      ],
      delay: 0.5,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Careers at Patro Patri" 
        subtitle="Join our team and help Bangladeshi singles find their perfect match"
        backgroundImage="/images/careers-bg.jpg"
      />

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-6">Why Join Patro Patri?</h2>
              <p className="text-darkSlate mb-6">
                At Patro Patri, we're on a mission to revolutionize the way Bangladeshi singles find their life partners. We combine traditional values with modern technology to create meaningful connections that lead to happy marriages.
              </p>
              <p className="text-darkSlate mb-6">
                When you join our team, you become part of a passionate group of individuals who are making a positive impact on people's lives. We value innovation, cultural sensitivity, and a user-centered approach in everything we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-burgundy/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-burgundy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy">Meaningful Work</h3>
                    <p className="text-darkSlate">Help people find love and build families in a culturally respectful way.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-burgundy/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-burgundy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy">Growth Opportunities</h3>
                    <p className="text-darkSlate">Develop your skills and advance your career in a supportive environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-burgundy/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-burgundy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy">Competitive Benefits</h3>
                    <p className="text-darkSlate">Enjoy competitive salary, health insurance, and flexible work arrangements.</p>
                  </div>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-burgundy/10 rounded-lg p-6 h-40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="bg-gold/10 rounded-lg p-6 h-48 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-500/10 rounded-lg p-6 h-48 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6 h-40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Current Openings</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about our mission. Check out our current job openings below.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {jobPostings.map((job, index) => (
              <JobPosting
                key={index}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                description={job.description}
                requirements={job.requirements}
                delay={job.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 md:py-24 bg-white">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left md:pl-6">
                  <h3 className="text-2xl font-bold text-burgundy mb-4">How to Apply</h3>
                  <p className="text-darkSlate mb-6">
                    To apply for any of the positions listed above, please send your resume and a cover letter to <strong>careers@patropatri.com</strong> with the job title in the subject line. Alternatively, you can use our contact form to submit your application.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                    <a 
                      href="/contact" 
                      className="bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                    >
                      Contact Us
                    </a>
                    <a 
                      href="mailto:careers@patropatri.com" 
                      className="bg-transparent border border-burgundy text-burgundy px-6 py-3 rounded-lg hover:bg-burgundy hover:text-white transition-all duration-300 text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">What Our Team Says</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              Hear from our team members about what it's like to work at Patro Patri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Kamal Hossain',
                role: 'Lead Developer',
                image: '/images/team/developer.jpg',
                quote: 'Working at Patro Patri has been an incredible journey. I get to solve interesting technical challenges while making a positive impact on people\'s lives. The team is supportive, and there\'s always room for growth and learning.',
                delay: 0.1,
              },
              {
                name: 'Tahmina Akter',
                role: 'UI/UX Designer',
                image: '/images/team/designer.jpg',
                quote: 'As a designer, I appreciate how Patro Patri values user experience and aesthetics. I\'ve had the freedom to implement creative ideas and see them make a real difference in how people interact with our platform.',
                delay: 0.2,
              },
              {
                name: 'Nusrat Jahan',
                role: 'Customer Success Manager',
                image: '/images/team/customer.jpg',
                quote: 'The most rewarding part of my job is hearing success stories from our users. At Patro Patri, we truly care about helping people find happiness, and that mission-driven approach makes coming to work every day meaningful.',
                delay: 0.3,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-burgundy">{testimonial.name}</h3>
                      <p className="text-darkSlate text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-darkSlate italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
