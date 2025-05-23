import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkSlate/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-burgundy rounded-full p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Patro Patri</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gold transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gold transition-colors duration-300">About</Link>
            <Link href="/features" className="text-white hover:text-gold transition-colors duration-300">Features</Link>
            <Link href="/pricing" className="text-white hover:text-gold transition-colors duration-300">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-gold transition-colors duration-300">Contact</Link>
            <Link href="/legal/privacy-policy" className="text-white hover:text-gold transition-colors duration-300">Privacy</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://play.google.com/store" 
              target="_blank" 
              className="bg-burgundy text-white px-4 py-2 rounded-lg hover:bg-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download App
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                href="/" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/features" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/legal/privacy-policy" 
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                href="https://play.google.com/store" 
                target="_blank" 
                className="bg-burgundy text-white px-4 py-2 rounded-lg hover:bg-burgundy-dark transition-all duration-300 inline-block w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download App
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
