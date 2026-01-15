
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MethodSection } from './components/MethodSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { LogoTicker } from './components/LogoTicker';
import { PainSection } from './components/PainSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BriefingForm } from './components/BriefingForm';
import { Portfolio } from './components/Portfolio';
import { AboutUs } from './components/AboutUs';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { WhatsAppFloat } from './components/WhatsAppFloat';

type PageState = 'home' | 'briefing' | 'portfolio' | 'about' | 'careers' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setCurrentPage('briefing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedPlan('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page: string, sectionId?: string) => {
    if (page === 'portfolio') {
        setCurrentPage('portfolio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'careers') {
        setCurrentPage('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        setCurrentPage('home');
        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      
      {currentPage === 'home' && <Navbar onNavigate={handleNavigation} />}

      <main>
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* Correção aplicada aqui: onStartProject agora recebe a função handlePlanSelect */}
            <Hero onStartProject={() => handlePlanSelect('Página de Vendas Profissional')} />
            <PainSection />
            <LogoTicker />
            <Features />
            <Testimonials />
            <MethodSection />
            <Pricing onPlanSelect={handlePlanSelect} />
            <FAQ />
          </div>
        )}

        {currentPage === 'portfolio' && (
          <Portfolio 
            onBack={handleBackToHome} 
            onNavigateToPlans={() => handleNavigation('home', 'pricing')}
          />
        )}

        {currentPage === 'briefing' && (
          <BriefingForm plan={selectedPlan} onBack={handleBackToHome} />
        )}

        {currentPage === 'about' && (
          <AboutUs onBack={handleBackToHome} />
        )}

        {currentPage === 'careers' && (
          <Careers onBack={handleBackToHome} />
        )}

        {currentPage === 'contact' && (
          <Contact onBack={handleBackToHome} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={handleBackToHome} />
        )}

        {currentPage === 'terms' && (
          <TermsOfUse onBack={handleBackToHome} />
        )}
      </main>

      {currentPage === 'home' && (
        <>
          <Footer onNavigate={handleNavigation} />
          <WhatsAppFloat />
        </>
      )}
      
    </div>
  );
};

export default App;
