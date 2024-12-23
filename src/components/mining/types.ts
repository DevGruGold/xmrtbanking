import { LucideIcon } from 'lucide-react';

export interface Platform {
  id: string;
  name: string;
  icon: LucideIcon;
  hashrate: string;
  requirements: string[];
}