import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  color?: 'teal' | 'blue' | 'indigo' | 'rose' | 'amber' | 'emerald' | 'violet' | 'sky';
}