import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-darkSlate z-0" 
        style={backgroundImage ? {
          backgroundImage: `linear-gradient(rgba(27, 36, 48, 0.85), rgba(27, 36, 48, 0.9)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
      
      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
