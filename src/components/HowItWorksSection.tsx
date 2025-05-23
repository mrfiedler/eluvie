
import { LineChart, CreditCard, BadgeCheck, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <LineChart className="h-10 w-10 text-blue-400" />,
      title: t('track-income'),
      description: t('track-income-desc')
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-400" />,
      title: t('create-budgets'),
      description: t('create-budgets-desc')
    },
    {
      icon: <Calendar className="h-10 w-10 text-cyan-400" />,
      title: t('monitor-subscriptions'),
      description: t('monitor-subscriptions-desc')
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-indigo-400" />,
      title: t('get-rewarded'),
      description: t('get-rewarded-desc')
    }
  ];
  
  return (
    <section id="how-it-works" className="section relative overflow-hidden py-24 bg-[#1a1a1a]">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl bg-[#202020]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('how-eluvie-works')}</h2>
          <p className="text-lg text-gray-400">
            {t('how-it-works-subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col items-center text-center">
              <div className="mb-5 rounded-full bg-[#202020] p-3 shadow-sm border border-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div id="eluvie-video-section" className="mt-20 mb-8 max-w-6xl mx-auto bg-gradient-to-br from-[#202020] to-[#1a1a1a] rounded-2xl shadow-xl p-10 border border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full from-blue-500/5 to-purple-500/5 bg-[#1a1a1a]"></div>
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full blur-3xl bg-gray-950"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl bg-zinc-950"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-white">{t('trial-title')}</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('trial-description')}
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-3/5">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-600 bg-[#1a1a1a]">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/M0Sp7ZP96Xo?autoplay=1&mute=1&loop=1&playlist=M0Sp7ZP96Xo" title="Eluvie demonstration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <div className="bg-[#202020]/50 p-8 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-semibold mb-4 text-white">{t('ready-to-start')}</h4>
                  <p className="text-gray-300 mb-8">
                    {t('ready-to-start-desc')}
                  </p>
                  <Button 
                    className="flex items-center justify-center gap-2 text-base py-6 px-10 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none" 
                    onClick={() => navigate('/coming-soon')}
                  >
                    {t('start-free-trial')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
