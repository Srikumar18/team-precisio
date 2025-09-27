import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/images/home-bg.png';

const Home = () => {
  const scrollToCostBreakdown = () => {
    const element = document.getElementById('cost-breakdown');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Team Precisio
          <span className="block text-2xl md:text-4xl lg:text-5xl font-normal mt-2 text-white/90">
            Finances
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Welcome to our comprehensive cost management portal. 
          Explore detailed breakdowns and financial analysis.
        </p>
        
        <Button
          onClick={scrollToCostBreakdown}
          size="lg"
          className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-elegant hover:scale-105"
        >
          View Cost Breakdown
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default Home;