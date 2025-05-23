"use client";

import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-burgundy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of Bangladeshi singles who have found their life partners through Patro Patri. Download our app today and start your journey to a meaningful relationship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <button className="bg-white text-burgundy font-medium py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9 2.318A5.364 5.364 0 0 1 21.593 6.6 48.677 48.677 0 0 1 12 6.6a49.86 49.86 0 0 1-9.593 0A5.364 5.364 0 0 1 6.1 2.318a49.353 49.353 0 0 1 11.8 0zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <span>Google Play</span>
            </button>
            <button className="bg-white text-burgundy font-medium py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>App Store</span>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-darkSlate text-xs font-bold">RA</div>
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">SK</div>
                <div className="w-8 h-8 rounded-full bg-burgundy flex items-center justify-center text-white text-xs font-bold">TF</div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">+</div>
              </div>
              <div className="text-sm text-white/80">
                Join <span className="text-white font-semibold">5,000+</span> users already finding matches
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
