"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { apiService, UserCountResponse } from '@/services/api';

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [countdown, setCountdown] = useState<CountdownProps>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [userCount, setUserCount] = useState<UserCountResponse['data']>({
    totalUsers: 1000,
    message: 'Join 1,000+ registered users'
  });
  const [isLoading, setIsLoading] = useState(true);
  
  // Set launch date to 12 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 12);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
      
      if (difference < 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Fetch user count on component mount
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        setIsLoading(true);
        const response = await apiService.getRegisteredUsersCount();
        if (response.success) {
          setUserCount(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-darkSlate to-darkSlate/95 text-white py-20 md:py-0 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your <span className="text-gold">Perfect Match</span> with Patro Patri
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              The premier matrimony app designed specifically for Bangladeshi singles looking for meaningful relationships that respect cultural values.
            </p>
            
            {/* User Count Display */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center bg-gold/10 border border-gold/20 rounded-full px-6 py-3"
              >
                <div className="w-3 h-3 bg-gold rounded-full mr-3 animate-pulse"></div>
                <span className="text-gold font-semibold">
                  {isLoading ? 'Loading...' : userCount.message}
                </span>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="https://play.google.com/store/apps/details?id=com.patropatri.matrimony"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-burgundy text-white font-medium py-3 px-8 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Download App
              </a>
              <button className="bg-transparent border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-300 mb-4">Launching in:</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="bg-darkSlate/50 backdrop-blur-md rounded-lg p-4 w-20 text-center">
                  <div className="text-3xl font-bold text-gold">{countdown.days}</div>
                  <div className="text-xs text-gray-400">Days</div>
                </div>
                <div className="bg-darkSlate/50 backdrop-blur-md rounded-lg p-4 w-20 text-center">
                  <div className="text-3xl font-bold text-gold">{countdown.hours}</div>
                  <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="bg-darkSlate/50 backdrop-blur-md rounded-lg p-4 w-20 text-center">
                  <div className="text-3xl font-bold text-gold">{countdown.minutes}</div>
                  <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="bg-darkSlate/50 backdrop-blur-md rounded-lg p-4 w-20 text-center">
                  <div className="text-3xl font-bold text-gold">{countdown.seconds}</div>
                  <div className="text-xs text-gray-400">Seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-burgundy/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-burgundy/10 to-gold/10 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
                <div className="bg-darkSlate/80 backdrop-blur-md rounded-xl overflow-hidden">
                  <div className="relative h-[600px] w-full">
                    <Image 
                      src="https://images.unsplash.com/photo-1680711552836-5f2567e02c36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Patro Patri App" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-gold/90 text-darkSlate text-xs font-bold px-3 py-1 rounded-full">
                    Premium
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkSlate to-transparent p-6">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">RA</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Rahima A.</h3>
                        <div className="flex items-center">
                          <span className="text-gray-300 text-sm mr-2">28, Dhaka</span>
                          <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex space-x-2">
                          <button className="bg-burgundy text-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                          <button className="bg-white/10 text-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
