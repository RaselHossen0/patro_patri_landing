"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay: number;
}

const TeamMember = ({ name, role, image, bio, socialLinks, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-surface rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
    >
      <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-burgundy">{name}</h3>
              <p className="text-gold font-medium">{role}</p>
            </div>
            <div className="ml-auto flex space-x-3">
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-2 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-2 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              )}
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-2 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              )}
            </div>
          </div>
          <p className="text-darkSlate mb-4">{bio}</p>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="bg-gold/20 px-3 py-1 rounded-full text-xs text-gold font-medium">
            Team Member
          </div>
          <div className="ml-2 bg-burgundy/20 px-3 py-1 rounded-full text-xs text-burgundy font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TeamPage() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: 'Md. Rasel Hossen',
      role: 'Founder & CEO',
      image: '/images/team/ceo.jpg',
      bio: 'Rasel founded Patro Patri in 2023 with a vision to create a matrimony platform that truly understands and respects Bangladeshi culture. With over 10 years of experience in tech entrepreneurship, he leads the company with a focus on innovation and cultural sensitivity. Rasel holds an MBA from Dhaka University and is passionate about using technology to preserve and enhance cultural traditions.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'rasel@patropatri.com',
      },
      delay: 0.1,
    },
    {
      name: 'Fatima Rahman',
      role: 'Chief Technology Officer',
      image: '/images/team/cto.jpg',
      bio: 'Fatima leads the technology team at Patro Patri, overseeing all aspects of product development and technical infrastructure. She has over 8 years of experience in software development and previously worked at Google and Microsoft. Fatima holds a Master\'s degree in Computer Science from MIT and is passionate about creating intuitive, user-friendly applications that solve real-world problems.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'fatima@patropatri.com',
      },
      delay: 0.2,
    },
    {
      name: 'Ahmed Khan',
      role: 'Head of Marketing',
      image: '/images/team/marketing.jpg',
      bio: 'Ahmed brings over 12 years of marketing experience to Patro Patri, with a special focus on digital marketing and brand development. He previously led marketing teams at several successful startups and established companies. Ahmed is responsible for building the Patro Patri brand and growing our user base through innovative marketing strategies that resonate with our target audience.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'ahmed@patropatri.com',
      },
      delay: 0.3,
    },
    {
      name: 'Nusrat Jahan',
      role: 'Customer Success Manager',
      image: '/images/team/customer.jpg',
      bio: 'Nusrat leads our customer success team, ensuring that all Patro Patri users have a positive and fulfilling experience on our platform. With a background in psychology and customer service, she understands the importance of empathy and support in the matchmaking process. Nusrat and her team work tirelessly to provide guidance, resolve issues, and gather feedback to continuously improve our service.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'nusrat@patropatri.com',
      },
      delay: 0.4,
    },
    {
      name: 'Kamal Hossain',
      role: 'Lead Developer',
      image: '/images/team/developer.jpg',
      bio: 'Kamal is a senior developer with expertise in mobile application development. He leads the development of our Android and iOS applications, ensuring they are fast, reliable, and user-friendly. With a background in computer science and 6 years of experience in app development, Kamal is passionate about creating seamless user experiences that make finding a match easy and enjoyable.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        email: 'kamal@patropatri.com',
      },
      delay: 0.5,
    },
    {
      name: 'Tahmina Akter',
      role: 'UI/UX Designer',
      image: '/images/team/designer.jpg',
      bio: 'Tahmina is responsible for the beautiful, intuitive design of the Patro Patri app and website. With a keen eye for aesthetics and user experience, she creates designs that are both visually appealing and functional. Tahmina holds a degree in Graphic Design and has 5 years of experience in UI/UX design for mobile and web applications.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'tahmina@patropatri.com',
      },
      delay: 0.6,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the passionate individuals behind Patro Patri who are dedicated to helping you find your perfect match."
        backgroundImage="/images/team-bg.jpg"
      />

      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Meet The People Behind Patro Patri</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              Our diverse team combines expertise in technology, marketing, design, and customer service to create the best possible matchmaking experience for Bangladeshi singles.
            </p>
          </motion.div>

          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                socialLinks={member.socialLinks}
                delay={member.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-burgundy to-gold p-0.5 rounded-2xl max-w-4xl mx-auto overflow-hidden"
          >
            <div className="bg-surface rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-burgundy/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left md:pl-6">
                  <h3 className="text-2xl font-bold text-burgundy mb-4">Join Our Team</h3>
                  <p className="text-darkSlate mb-6">
                    We're always looking for talented individuals who are passionate about our mission to join our team. If you're interested in helping Bangladeshi singles find their perfect match, we'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                    <a 
                      href="/careers" 
                      className="bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                    >
                      View Open Positions
                    </a>
                    <a 
                      href="/contact" 
                      className="bg-transparent border border-burgundy text-burgundy px-6 py-3 rounded-lg hover:bg-burgundy hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Us
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
}
