"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HowItWorksSectionProps {
  isVisible?: boolean;
}

const HowItWorksSection = ({ isVisible = false }: HowItWorksSectionProps) => {
  const howItWorksRef = useRef<HTMLElement>(null);
  
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and create a detailed profile highlighting your background, interests, values, and preferences for a potential partner.",
      image: "https://plus.unsplash.com/premium_photo-1720192861879-e685b1b66a0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      number: "02",
      title: "Discover Matches",
      description: "Browse through curated matches based on your preferences and compatibility factors.",
      image: "/images/discover-matches.png"
    },
    {
      number: "03",
      title: "Connect Safely",
      description: "Initiate conversations with potential matches through our secure messaging system.",
      image: "/images/connect-safely.png"
    },
    {
      number: "04",
      title: "Meet in Person",
      description: "When you're ready, arrange to meet in person or attend one of our exclusive matrimonial events.",
      image: "/images/meet-in-person.png"
    }
  ];

  return (
    <section ref={howItWorksRef} id="how-it-works" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-darkSlate"
          >
            How Patro Patri Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Finding your perfect match is a journey. Here's how our platform makes it simple and meaningful.
          </motion.p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative">
                  <div className="absolute -top-5 -left-5 bg-burgundy text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-darkSlate mt-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {index === 0 && (
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center text-white text-xs mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-700">Profile completion: <span className="font-semibold">85%</span></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-burgundy w-[85%] rounded-full"></div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">Complete your profile to get better matches</div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="flex space-x-2">
                      <div className="bg-gray-100 rounded-lg p-3 flex-1">
                        <div className="text-sm font-medium text-darkSlate mb-1">Daily Matches</div>
                        <div className="text-2xl font-bold text-burgundy">12</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-1">
                        <div className="text-sm font-medium text-darkSlate mb-1">Compatibility</div>
                        <div className="text-2xl font-bold text-burgundy">85%</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-1">
                        <div className="text-sm font-medium text-darkSlate mb-1">New Today</div>
                        <div className="text-2xl font-bold text-burgundy">5</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mr-3">
                            <span className="text-darkSlate font-bold">SA</span>
                          </div>
                          <div>
                            <div className="font-medium text-darkSlate">Samira A.</div>
                            <div className="text-xs text-gray-500">Online now</div>
                          </div>
                        </div>
                        <div className="bg-burgundy text-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 bg-white p-3 rounded-lg mb-2 inline-block">
                        Hello! I liked your profile. Would you like to connect?
                      </div>
                      <div className="flex justify-end">
                        <div className="text-sm text-gray-700 bg-burgundy/10 p-3 rounded-lg inline-block">
                          Hi Samira! I'd love to chat and get to know you better.
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="text-sm font-medium text-darkSlate mb-2">Upcoming Event</div>
                      <div className="text-lg font-bold text-burgundy mb-1">Matrimony Meetup - Dhaka</div>
                      <div className="text-sm text-gray-600 mb-3">Sunday, June 15th • 3:00 PM</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">15 people attending</div>
                        <button className="bg-burgundy text-white text-sm py-1 px-3 rounded-lg">RSVP</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
