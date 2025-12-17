import React from 'react';
import { LINKS, BANNER_CONFIG } from './constants';
import LinkButton from './components/LinkButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 overflow-x-hidden selection:bg-teal-200 selection:text-teal-900">
      
      {/* Navigation Bar - Empty/Transparent (Content removed) */}
      <nav className="fixed top-0 w-full bg-transparent z-50 transition-all duration-300 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo removed as requested */}
        </div>
      </nav>

      {/* Banner Section - Height 150px, Content Left Aligned */}
      <header className="relative h-[150px] flex items-center overflow-hidden shadow-md">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={BANNER_CONFIG.backgroundImage} 
            alt="Banner Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Banner Content (Left Aligned & Larger Text) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight text-left">
            {BANNER_CONFIG.title}
          </h1>
          {/* Subtitle font size increased to text-lg (mobile) and sm:text-xl (desktop) */}
          <p className="text-lg sm:text-xl text-slate-100 font-medium mt-2 drop-shadow-sm opacity-90 text-left max-w-2xl">
            {BANNER_CONFIG.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        {/* Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LINKS.map((link) => (
            <LinkButton key={link.id} item={link} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-base sm:text-lg font-medium">
           Phát triển bởi nhóm học sinh THPT Đào Duy Từ 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;