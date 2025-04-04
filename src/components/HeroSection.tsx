
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-eluvie-gold/30 rounded-full blur-3xl" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-eluvie-teal/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              A financial platform made for your 
              <span className="gradient-text"> creative flow.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Manage clients, finances, contracts and subscriptions – in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-gradient flex items-center gap-2 text-base py-6 px-8">
                Start for Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2 text-base py-6 px-8 border-gray-200">
                <Play className="h-5 w-5 text-gray-600" />
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="User"
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="User"
                />
              </div>
              Trusted by 2,000+ creative professionals
            </div>
          </div>

          <div className="w-full lg:w-1/2 animate-fade-in animation-delay-300 lg:pl-10">
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-float">
                <img 
                  src="/lovable-uploads/50090990-842e-4cea-a92b-ced353291b87.png" 
                  alt="Eluvie Dashboard" 
                  className="w-full object-cover"
                />
              </div>
              
              {/* Floating notification card */}
              <div className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 max-w-[15rem] border border-gray-100 animate-float" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <p className="text-xs font-medium">Payment Received</p>
                </div>
                <p className="text-sm text-gray-600">Client Acme Inc. paid $2,400.00</p>
              </div>
              
              {/* Gamification badge */}
              <div className="absolute top-8 -right-4 bg-white rounded-full shadow-lg p-3 animate-float" style={{animationDelay: '0.6s'}}>
                <div className="h-12 w-12 bg-gradient-to-br from-eluvie-gold to-eluvie-teal rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
