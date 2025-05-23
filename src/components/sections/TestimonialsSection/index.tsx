"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TestimonialsSectionProps {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  testimonials?: any[];
  stats?: any[];
}

const TestimonialsSection = ({ isVisible = false, title, subtitle, testimonials: customTestimonials, stats: customStats }: TestimonialsSectionProps) => {
  const testimonialsRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Patro Patri helped me find my perfect match who shares my values and vision for the future. We're getting married next month!",
      name: "Fatima Rahman",
      location: "Dhaka",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "The family involvement feature was exactly what I was looking for. My parents could participate in the process while I maintained control.",
      name: "Kamal Hossain",
      location: "Chittagong",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "I appreciated the cultural compatibility focus. It helped me connect with someone who understands my traditions and background.",
      name: "Nusrat Jahan",
      location: "Sylhet",
      image: "/images/testimonial-3.jpg",
      rating: 4
    }
  ];

  return (
    <section ref={testimonialsRef} id="testimonials" className="py-16 md:py-24 bg-appBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-darkSlate"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Hear from couples who found their perfect match through Patro Patri.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 20,
                  display: activeTestimonial === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="relative">
                      <div className="aspect-square rounded-full overflow-hidden bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 -right-3 bg-burgundy text-white rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <div className="mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 inline-block ${i < testimonial.rating ? 'text-gold' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl italic text-gray-700 mb-6">&quot;{testimonial.quote}&quot;</blockquote>
                    
                    <div>
                      <div className="font-semibold text-darkSlate">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-burgundy' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 inline-block">
            <div className="text-darkSlate font-semibold mb-2">Join our growing community</div>
            <div className="flex items-center justify-center">
              <div className="flex -space-x-4 mr-4">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-burgundy flex items-center justify-center text-white text-xs font-bold">FR</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gold flex items-center justify-center text-darkSlate text-xs font-bold">KH</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-500 flex items-center justify-center text-white text-xs font-bold">NJ</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">+2K</div>
              </div>
              <div className="text-gray-600">
                <span className="text-burgundy font-bold">2,000+</span> success stories and counting
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
