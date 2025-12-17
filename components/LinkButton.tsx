import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  item: LinkItem;
}

// Map color names to specific Tailwind utility classes for consistent theming
const THEME_STYLES: Record<string, any> = {
  teal: {
    borderTop: 'border-t-teal-500',
    hoverBorderTop: 'hover:border-t-teal-600',
    hoverBorder: 'hover:border-teal-500',
    ring: 'hover:ring-teal-50',
    iconBg: 'bg-teal-50',
    iconText: 'text-teal-600',
    hoverIconBg: 'group-hover:bg-teal-600',
    hoverTitle: 'group-hover:text-teal-700',
    ctaText: 'group-hover:text-teal-500',
    decoGradient: 'from-teal-50 to-cyan-50'
  },
  blue: {
    borderTop: 'border-t-blue-500',
    hoverBorderTop: 'hover:border-t-blue-600',
    hoverBorder: 'hover:border-blue-500',
    ring: 'hover:ring-blue-50',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
    hoverIconBg: 'group-hover:bg-blue-600',
    hoverTitle: 'group-hover:text-blue-700',
    ctaText: 'group-hover:text-blue-500',
    decoGradient: 'from-blue-50 to-indigo-50'
  },
  indigo: {
    borderTop: 'border-t-indigo-500',
    hoverBorderTop: 'hover:border-t-indigo-600',
    hoverBorder: 'hover:border-indigo-500',
    ring: 'hover:ring-indigo-50',
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    hoverIconBg: 'group-hover:bg-indigo-600',
    hoverTitle: 'group-hover:text-indigo-700',
    ctaText: 'group-hover:text-indigo-500',
    decoGradient: 'from-indigo-50 to-violet-50'
  },
  rose: {
    borderTop: 'border-t-rose-500',
    hoverBorderTop: 'hover:border-t-rose-600',
    hoverBorder: 'hover:border-rose-500',
    ring: 'hover:ring-rose-50',
    iconBg: 'bg-rose-50',
    iconText: 'text-rose-600',
    hoverIconBg: 'group-hover:bg-rose-600',
    hoverTitle: 'group-hover:text-rose-700',
    ctaText: 'group-hover:text-rose-500',
    decoGradient: 'from-rose-50 to-pink-50'
  },
  amber: {
    borderTop: 'border-t-amber-500',
    hoverBorderTop: 'hover:border-t-amber-600',
    hoverBorder: 'hover:border-amber-500',
    ring: 'hover:ring-amber-50',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
    hoverIconBg: 'group-hover:bg-amber-600',
    hoverTitle: 'group-hover:text-amber-700',
    ctaText: 'group-hover:text-amber-600',
    decoGradient: 'from-amber-50 to-orange-50'
  },
  emerald: {
    borderTop: 'border-t-emerald-500',
    hoverBorderTop: 'hover:border-t-emerald-600',
    hoverBorder: 'hover:border-emerald-500',
    ring: 'hover:ring-emerald-50',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    hoverIconBg: 'group-hover:bg-emerald-600',
    hoverTitle: 'group-hover:text-emerald-700',
    ctaText: 'group-hover:text-emerald-500',
    decoGradient: 'from-emerald-50 to-green-50'
  },
  violet: {
    borderTop: 'border-t-violet-500',
    hoverBorderTop: 'hover:border-t-violet-600',
    hoverBorder: 'hover:border-violet-500',
    ring: 'hover:ring-violet-50',
    iconBg: 'bg-violet-50',
    iconText: 'text-violet-600',
    hoverIconBg: 'group-hover:bg-violet-600',
    hoverTitle: 'group-hover:text-violet-700',
    ctaText: 'group-hover:text-violet-500',
    decoGradient: 'from-violet-50 to-fuchsia-50'
  },
  sky: {
    borderTop: 'border-t-sky-500',
    hoverBorderTop: 'hover:border-t-sky-600',
    hoverBorder: 'hover:border-sky-500',
    ring: 'hover:ring-sky-50',
    iconBg: 'bg-sky-50',
    iconText: 'text-sky-600',
    hoverIconBg: 'group-hover:bg-sky-600',
    hoverTitle: 'group-hover:text-sky-700',
    ctaText: 'group-hover:text-sky-500',
    decoGradient: 'from-sky-50 to-blue-50'
  }
};

const LinkButton: React.FC<LinkButtonProps> = ({ item }) => {
  const Icon = item.icon;
  // Default to 'teal' if color is not provided or invalid
  const theme = THEME_STYLES[item.color || 'teal'] || THEME_STYLES['teal'];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-300 border-t-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.15)] hover:ring-4 transition-all duration-300 ease-out transform hover:-translate-y-2 overflow-hidden ${theme.borderTop} ${theme.hoverBorder} ${theme.hoverBorderTop} ${theme.ring}`}
    >
      {/* Decorative background circle inside card */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 ${theme.decoGradient}`}></div>

      <div className={`relative z-10 p-4 rounded-full mb-4 group-hover:text-white transition-colors duration-300 ${theme.iconBg} ${theme.iconText} ${theme.hoverIconBg}`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      {/* Label */}
      <h3 className={`relative z-10 text-xl font-bold text-slate-800 mb-2 text-center transition-colors ${theme.hoverTitle}`}>
        {item.label}
      </h3>
      
      {/* CTA */}
      <div className={`relative z-10 flex items-center text-base text-slate-400 font-medium transition-colors ${theme.ctaText}`}>
        <span>Truy cập ngay</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
};

export default LinkButton;